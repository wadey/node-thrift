var emptyBuf = new Buffer(0);

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

  readAll: function() {
    return this.inBuf;
  },

  write: function(buf, encoding) {
    if (typeof(buf) === "string") {
      // Defaulting to ascii encoding here since that's more like the original
      // code, but I feel like 'utf8' would be a better choice.
      buf = new Buffer(buf, encoding || 'ascii');
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
