var sys = require('sys'),
    EventEmitter = require("events").EventEmitter,
    net = require('net'),
    ttransport = require('./transport'),
    tprotocol = require('./protocol');

var BinaryParser = require('./binary_parser').BinaryParser;
BinaryParser.bigEndian = true;

var Connection = exports.Connection = function(stream, options) {
  var self = this;
  EventEmitter.call(this);

  this.connection = stream;
  this.options = options || {};
  this.transport = this.options.transport || ttransport.TFramedTransport;
  this.protocol = this.options.protocol || tprotocol.TBinaryProtocol;
  this.offline_queue = [];
  this.connected = false;

  this.connection.addListener("connect", function() {
    self.connected = true;

    this.setTimeout(self.options.timeout || 0);
    this.setNoDelay();
    this.frameLeft = 0;
    this.framePos = 0;
    this.frame = null;

    self.offline_queue.forEach(function(data) {
      self.connection.write(data);
    });

    self.emit("connect");
  });

  this.connection.addListener("error", function(err) {
    self.emit("error", err);
  });

  // Add a close listener
  this.connection.addListener("close", function() {
    self.emit("close");
  });

  this.connection.addListener("timeout", function() {
    self.emit("timeout");
  });

  this.connection.addListener("data", self.transport.receiver(function(framed_transport) {
    var message = new self.protocol(framed_transport);
    var header = message.readMessageBegin();
    self.client['recv_' + header.fname](message, header.mtype, header.rseqid);
  }));
};
sys.inherits(Connection, EventEmitter);

Connection.prototype.end = function() {
  this.connection.end();
}

Connection.prototype.write = function(data) {
  if (!this.connected) {
    this.offline_queue.push(data);
    return;
  }
  this.connection.write(data);
}

exports.createConnection = function(host, port, options) {
  var stream = net.createConnection(port, host);
  var connection = new Connection(stream, options);
  connection.host = host;
  connection.port = port;

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
