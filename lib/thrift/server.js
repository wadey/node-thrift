var sys = require('sys'),
    net = require('net');

var BinaryParser = require('./binary_parser').BinaryParser,
    TBinaryProtocol = require('./protocol').TBinaryProtocol,
    TFramedTransport = require('./transport').TFramedTransport;

exports.createServer = function(cls, handler, options) {
  if (cls.Processor) {
    cls = cls.Processor;
  }
  var processor = new cls(handler);
  var transport = (options && options.transport) ? options.transport : TFramedTransport;
  var protocol = (options && options.protocol) ? options.protocol : TBinaryProtocol;

  return net.createServer(function(stream) {
    stream.on('data', transport.receiver(function(framed_transport) {
      var input = new protocol(framed_transport);
      var output = new protocol(new transport(undefined, function(buf) {
        stream.write(buf);
      }));

      processor.process(input, output);
    }));

    stream.on('end', function() {
      stream.end();
    });
  });
};
