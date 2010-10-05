var sys = require('sys'),
    EventEmitter = require("events").EventEmitter,
    net = require('net'),
    TMemoryBuffer = require('./transport').TMemoryBuffer,
    TBinaryProtocol = require('./protocol').TBinaryProtocol;

var BinaryParser = require('./binary_parser').BinaryParser;
BinaryParser.bigEndian = true;

var Connection = exports.Connection = function(cls, host, port) {
  this.cls = cls;
  this.host = host;
  this.port = port;
}
sys.inherits(Connection, EventEmitter);

Connection.prototype.open = function(connectCallback) {
  var self = this;

  this.connection = net.createConnection(this.port, this.host);
  this.connection.setEncoding("binary");
  this.connection.addListener("connect", function() {
    this.setEncoding("binary");
    this.setTimeout(0);
    this.setNoDelay();
    this.frameLeft = 0;
    this.framePos = 0;
    this.frame = null;

    self.client = new self.cls(new TMemoryBuffer(undefined, function(buf) {
        self.connection.write(BinaryParser.fromInt(buf.length));
        self.connection.write(buf);
    }), TBinaryProtocol);

    self.emit("connect", self.client);
  });

  this.connection.addListener("error", function(err) {
    self.emit("error", err);
  });

  // Add a close listener
  this.connection.addListener("close", function() {
    self.emit("close");
  });

  var frameReceived = function(data) {
    //console.log(typeof(data));
    var input = new TBinaryProtocol(new TMemoryBuffer(data));
    var r = input.readMessageBegin();
    self.client.recv_describe_keyspace(input, r.mtype, r.rseqid);
    // self.emit("data", data);
  }

  this.connection.addListener("data", function(data) {
    var buf = new Buffer(data, 'binary');
    console.log(buf);
    // framed transport
    while (buf.length) {
      if (this.frameLeft === 0) {
        // TODO assumes we have all 4 bytes
        if (buf.length < 4) {
          throw Error("Not enough bytes");
        }
        this.frameLeft = BinaryParser.toInt(buf.slice(0,4));
        this.frame = new Buffer(this.frameLeft);
        this.framePos = 0;
        buf = buf.slice(4, buf.length);
      }

      if (buf.length >= this.frameLeft) {
        buf.copy(this.frame, this.framePos, 0, this.frameLeft);
        buf = buf.slice(this.frameLeft, buf.length);

        this.frameLeft = 0;
        frameReceived(this.frame);
      } else if (buf.length) {
        buf.copy(this.frame, this.framePos, 0, buf.length);
        this.frameLeft -= buf.length;
        this.framePos += buf.length;
        buf = buf.slice(buf.length, buf.length);
      }
    }
  });

  if (connectCallback !== undefined) {
    this.on("connect", connectCallback);
  }
}
