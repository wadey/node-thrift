var sys = require('sys');

exports.Type = {
  STOP: 0,
  VOID: 1,
  BOOL: 2,
  BYTE: 3,
  I08: 3,
  DOUBLE: 4,
  I16: 6,
  I32: 8,
  I64: 10,
  STRING: 11,
  UTF7: 11,
  STRUCT: 12,
  MAP: 13,
  SET: 14,
  LIST: 15,
  UTF8: 16,
  UTF16: 17,
}

exports.MessageType = {
  CALL: 1,
  REPLY: 2,
  EXCEPTION: 3,
  ONEWAY: 4,
}

var TApplicationException = exports.TApplicationException = function(type, message) {
  this.type = type || this.Type.UNKNOWN;
  Error.call(this, message);
  this.name = 'TApplicationException';
}
sys.inherits(TApplicationException, Error);

TApplicationException.Type = {
  UNKNOWN: 0,
  UNKNOWN_METHOD: 1,
  INVALID_MESSAGE_TYPE: 2,
  WRONG_METHOD_NAME: 3,
  BAD_SEQUENCE_ID: 4,
  MISSING_RESULT: 5
}

