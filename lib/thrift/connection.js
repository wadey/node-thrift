/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var sys = require('sys'),
    EventEmitter = require("events").EventEmitter,
    net = require('net'),
    http = require('http'),
    https = require('https'),
    ttransport = require('./transport'),
    tprotocol = require('./protocol'),
    assert = require('assert');

var BinaryParser = require('./binary_parser').BinaryParser;
BinaryParser.bigEndian = true;

var Connection = exports.Connection = function(options) {
  var self = this;
  EventEmitter.call(this);

  this.options = options || {};
  this.transport = this.options.transport || ttransport.TFramedTransport;
  this.protocol = this.options.protocol || tprotocol.TBinaryProtocol;
  this.offline_queue = [];
  this.connected = false;
};
sys.inherits(Connection, EventEmitter);

Connection.prototype.bindRequest = function(stream) {
  var self = this;
  this.request = stream;

  this.request.addListener("connect", function() {
    self.connected = true;

    this.setTimeout(self.options.timeout || 0);
    this.setNoDelay();
    this.frameLeft = 0;
    this.framePos = 0;
    this.frame = null;

    self.offline_queue.forEach(function(data) {
      self.request.write(data);
    });

    self.emit("connect");
  });

  this.request.addListener("error", function(err) {
    self.emit("error", err);
  });

  // Add a close listener
  this.request.addListener("close", function() {
    self.emit("close");
  });

  this.request.addListener("timeout", function() {
    self.emit("timeout");
  });
};

Connection.prototype.bindReponse = function(stream) {

  var self = this;
  this.response = stream;

  this.response.addListener("data", self.transport.receiver(function(transport_with_data) {
    var message = new self.protocol(transport_with_data);
    try {
      var header = message.readMessageBegin();
      var dummy_seqid = header.rseqid * -1;
      var client = self.client;
      client._reqs[dummy_seqid] = function(err, success){
        transport_with_data.commitPosition();

        var callback = client._reqs[header.rseqid];
        delete client._reqs[header.rseqid];
        if (callback) {
          callback(err, success);
        }
      };
      client['recv_' + header.fname](message, header.mtype, dummy_seqid);
    }
    catch (e) {
      if (e instanceof ttransport.InputBufferUnderrunError) {
        transport_with_data.rollbackPosition();
      }
      else {
        throw e;
      }
    }
  }));
};

Connection.prototype.end = function() {
  this.request.end();
}

Connection.prototype.write = function(data) {
  if (this.options.httpOpts) {
    var httpOpts = this.options.httpOpts;
    var self = this;

    assert.ok(/^(http|https)$/.test(httpOpts.schema), 'support http/https schema only');

    httpOpts.headers = {
      'Host': httpOpts.host,
      'Accept': 'application/x-thrift',
      'User-Agent': 'NodeJS/THTTPClient',
      'Content-Type': 'application/x-thrift',
      'Content-Length': data.length || 0
    };
    var schema = httpOpts.schema === 'http' ? http : https;
    var request = schema.request(httpOpts);
    this.bindRequest(request);
    request.once('response', function(res) {
      self.bindReponse(res);
    });
  } else {
    if (!this.connected) {
      this.offline_queue.push(data);
      return;
    }
  }

  this.request.write(data);
}

exports.createConnection = function(host, port, options) {
  if (options && options.httpOpts) {
    options.transport = ttransport.TBufferedTransport;
    return new Connection(options);
  }

  // socket
  var connection = new Connection(options);
  var stream = net.createConnection(port, host);
  connection.bindRequest(stream);
  connection.bindReponse(stream);
  return connection;
}

exports.createClient = function(cls, connection) {
  if (cls.Client) {
    cls = cls.Client;
  }
  var client = new cls(new connection.transport(undefined, function(buf) {
    connection.write(buf);
  }), connection.protocol);

  // TODO clean this up
  connection.client = client;

  return client;
}
