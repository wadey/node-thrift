var emptyBuf = new Buffer(0);

var binary = require('./binary');

var TMemoryBuffer = exports.TMemoryBuffer = function(buffer, callback) {
  this.inBuf = buffer || emptyBuf;
  this.outBuffers = [];
  this.outCount = 0;
  this.readPos = 0;
  this.onFlush = callback;
};

TMemoryBuffer.prototype = {
  // TODO: Implement open/close support
  isOpen: function() {return true;},
  open: function() {},
  close: function() {},

  read: function(len) {
    var end = this.readPos + len;

    if (this.inBuf.length < end) {
      throw new Error('read(' + len + ') failed - not enough data');
    }

    var buf = this.inBuf.slice(this.readPos, end);
    this.readPos = end;
    return buf;
  },

  readByte: function() {
    return this.inBuf[this.readPos++];
  },

  readI16: function() {
    var i16 = binary.readI16(this.inBuf, this.readPos);
    this.readPos += 2;
    return i16;
  },

  readI32: function() {
    var i32 = binary.readI32(this.inBuf, this.readPos);
    this.readPos += 4;
    return i32;
  },

  readDouble: function() {
    var d = binary.readDouble(this.inBuf, this.readPos);
    this.readPos += 8;
    return d;
  },

  readString: function(len) {
    var str = this.inBuf.toString('utf8', this.readPos, this.readPos + len);
    this.readPos += len;
    return str;
  },

  readAll: function() {
    return this.inBuf;
  },

  write: function(buf, encoding) {
    if (typeof(buf) === "string") {
      buf = new Buffer(buf, encoding || 'utf8');
    }
    this.outBuffers.push(buf);
    this.outCount += buf.length;
  },

  flush: function() {
    var out = new Buffer(this.outCount), pos = 0;
    this.outBuffers.forEach(function(buf) {
      buf.copy(out, pos, 0);
      pos += buf.length;
    });

    if (this.onFlush) {
      this.onFlush(out);
    }

    this.outBuffers = [];
    this.outCount = 0;
  }
};
