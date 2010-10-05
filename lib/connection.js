var sys = require('sys'),
    EventEmitter = require("events").EventEmitter,
    net = require('net');

var Connection = exports.Connection = function(cls, host, port) {
  this.cls = cls;
  this.host = host;
  this.port = port;
}
sys.inherits(Connection, EventEmitter);

Connection.prototype.open = function() {
  var self = this;

  this.connection = net.createConnection(this.port, this.host);
  this.connection.setEncoding("binary");
  this.connection.addListener("connect", function() {
    this.setEncoding("binary");
    this.setTimeout(0);
    this.setNoDelay();
    self.emit("connect", self);
  });

  this.connection.addListener("error", function(err) {
    self.emit("error", err);
  });

  // Add a close listener
  this.connection.addListener("close", function() {
    self.emit("close");
  });

  this.connection.addListener("data", function(data) {
    self.emit("data", data);
  });
}
