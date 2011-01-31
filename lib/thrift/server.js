var sys = require('sys'),
    net = require('net');

var binary = require('./binary'),
    TMemoryBuffer = require('./transport').TMemoryBuffer,
    TBinaryProtocol = require('./protocol').TBinaryProtocol,
    int32FramedReceiver = require('./connection').int32FramedReceiver;

exports.createServer = function(cls, handler) {
  if (cls.Processor) {
    cls = cls.Processor;
  }
  var processor = new cls(handler);

  return net.createServer(function(stream) {
    stream.on('data', int32FramedReceiver(function(data) {
      var input = new TBinaryProtocol(new TMemoryBuffer(data));
      var output = new TBinaryProtocol(new TMemoryBuffer(undefined, function(buf) {
        // TODO: optimize this better, allocate one buffer instead of both:
        var msg = new Buffer(buf.length + 4);
        binary.writeI32(msg, buf.length);
        buf.copy(msg, 4, 0, buf.length);
        stream.write(msg);
      }));

      processor.process(input, output);
    }));

    stream.on('end', function() {
      stream.end();
    });
  });
}
