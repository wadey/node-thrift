var BinaryParser = require('./binary_parser').BinaryParser;

var emptyBuf = new Buffer(0);

var TFramedTransport = exports.TFramedTransport = function(buffer, callback) {
  this.inBuf = buffer || emptyBuf;
  this.outBuffers = [];
  this.outCount = 0;
  this.readPos = 0;
  this.onFlush = callback;
};
TFramedTransport.receiver = function(callback) {
  var frameLeft = 0,
      framePos = 0,
      frame = null;
  var residual = null;

  return function(data) {
    // Prepend any residual data from our previous read
    if (residual) {
      var dat = new Buffer(data.length + residual.length);
      residual.copy(dat, 0, 0);
      data.copy(dat, residual.length, 0);
      residual = null;
    }

    // framed transport
    while (data.length) {
      if (frameLeft === 0) {
        // TODO assumes we have all 4 bytes
        if (data.length < 4) {
          console.log("Expecting > 4 bytes, found only " + data.length);
          residual = data;
          break;
          //throw Error("Expecting > 4 bytes, found only " + data.length);
        }
        frameLeft = BinaryParser.toInt(data.slice(0,4));
        frame = new Buffer(frameLeft);
        framePos = 0;
        data = data.slice(4, data.length);
      }
      
      if (data.length >= frameLeft) {
        data.copy(frame, framePos, 0, frameLeft);
        data = data.slice(frameLeft, data.length);
        
        frameLeft = 0;
        callback(new TFramedTransport(frame));
      } else if (data.length) {
        data.copy(frame, framePos, 0, data.length);
        frameLeft -= data.length;
        framePos += data.length;
        data = data.slice(data.length, data.length);
      }
    }
  };
};

TFramedTransport.prototype = {
  // TODO: Implement open/close support
  isOpen: function() {return true;},
  open: function() {},
  close: function() {},

  read: function(len) { // this function will be used for each frames.
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
    var out = new Buffer(this.outCount),
        pos = 0;
    this.outBuffers.forEach(function(buf) {
      buf.copy(out, pos, 0);
      pos += buf.length;
    });
    
    if (this.onFlush) {
      // TODO: optimize this better, allocate one buffer instead of both:
      var msg = new Buffer(out.length + 4);
      BinaryParser.fromInt(out.length).copy(msg, 0, 0, 4);
      out.copy(msg, 4, 0, out.length);
      this.onFlush(msg);
    }

    this.outBuffers = [];
    this.outCount = 0;
  }
};
