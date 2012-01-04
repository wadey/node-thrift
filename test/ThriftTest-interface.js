var thrift = require('../lib/thrift');
 
var ThriftTest = require('./generated/gen-nodejs/ThriftTest'),
ttypes = require('./generated/gen-nodejs/ThriftTest_types');
Int64 = require('node-int64');

var bogusMultiMap = {1 : { 1: 2, 3: 4}, 2: { 2: 3, 4: 5}}

var userMap = { 1 : new Int64('134') };

var bogusInsanity = new ttypes.Insanity( { 
  userMap: userMap,
  xtructs: [ new ttypes.Xtruct({ string_thing: 'blah', byte_thing: 240, i32_thing: 24440, i64_thing: new Int64(0x1234) }) ]
});


var testStruct1 = new ttypes.Xtruct({ string_thing: 'blaffh', byte_thing: 220, i32_thing: 245540, i64_thing: new Int64(0x12234) });
var testStruct2 = new ttypes.Xtruct({ string_thing: 'blaeeh', byte_thing: 250, i32_thing: 24440, i64_thing: new Int64(0x12434) });
var onewayfunc = null;

var server = thrift.createServer(ThriftTest, {
  testVoid: function(success) {
    success();
  },
  testString: function(thing, success) {
    success(thing);
  },
  testByte: function(thing, success) {
    success(thing);
  },
  testI32: function(thing, success) {
    success(thing);
  },
  testI64: function(thing, success) {
    success(thing);
  },
  testDouble: function(thing, success) {
    success(thing);
  },
  testStruct: function(thing, success) {
    success(thing);
  },
  testNest: function(thing, success) {
    success(thing);
  },
  testMap: function(thing, success) {
    success(thing);
  },
  testStringMap: function(thing, success) {
    success(thing);
  },
  testSet: function(thing, success) {
    success(thing);
  },
  testList: function(thing, success) {
    success(thing);
  },
  testEnum: function(thing, success) {
    success(thing);
  },
  testTypedef: function(thing, success) {
    success(thing);
  },
  testMapMap: function(thing, success) {
    if (thing === 2) {
      success(bogusMultiMap);
    } else {
      success({});
    }
  },
  testInsanity: function(thing, success) {
    success(bogusInsanityResponse);
  },
  testMulti: function(arg0, arg1, arg2, arg3, arg4, arg5, success) {
    if (arg0 !== 233) {
      success(testStruct1);
    }
    if (arg1 !== 2400) {
      success(testStruct1);
    }
    if (!(arg2 instanceof Int64)) {
      success(testStruct1);
    }
    if (arg2.toString(10) !== '2400') {
      success(testStruct1);
    }
    if (arg3[2] !== 'blah') {
      success(testStruct1);
    }
    if (arg4 === 2) {
      success(testStruct1);
    }
    if (!(arg5 instanceof Int64)) {
      success(testStruct1);
    }
    if (arg5.toString(10) !== '3400') {
      success(testStruct1);
    }
    success(testStruct2);
  },
  testOneway: function(secondsToSleep) {
    onewayfunc();
  }
});

exports['setUp'] = function(test, assert) {
  server.listen(9162);
  test.finish();
}

exports['tearDown'] = function(test, assert) {
  server.close();
  test.finish();
}

exports['test_void'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testVoid(function(err, response) {
    assert.ifError(err);
    connection.end();
    test.finish();
  });
}

exports['test_string'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testString('blah nlah', function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,'blah nlah');
    connection.end();
    test.finish();
  });
}

exports['test_byte'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testByte(240, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,240);
    connection.end();
    test.finish();
  });
}

exports['test_i32'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testI32(2400, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,2400);
    connection.end();
    test.finish();
  });
}

exports['test_i64'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testI64(2400, function(err, response) {
    assert.ifError(err);
    assert.ok(response instanceof Int64);
    assert.deepEqual(response.toString(10),'2400');
    connection.end();
    test.finish();
  });
}

exports['test_double'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testDouble(2400.2, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,2400.2);
    connection.end();
    test.finish();
  });
}

exports['test_struct'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  var struct = new ttypes.Xtruct({ string_thing: 'blah', byte_thing: 240, i32_thing: 24440, i64_thing: new Int64(0x1234) });
  
  client.testStruct(struct, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,struct);
    assert.ok(response instanceof ttypes.Xtruct);
    connection.end();
    test.finish();
  });
}

exports['test_nest'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  var struct1 = new ttypes.Xtruct({ string_thing: 'blah', byte_thing: 240, i32_thing: 24440, i64_thing: new Int64(0x1234) });
  var struct2 = new ttypes.Xtruct2({byte_thing: 220, struct_thing: struct1, i32_thing: 2600});
  
  client.testNest(struct2, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,struct2);
    assert.ok(response instanceof ttypes.Xtruct2);
    assert.ok(response.struct_thing instanceof ttypes.Xtruct);
    connection.end();
    test.finish();
  });
}

exports['test_map'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  var map = { 2: 3, 3: 4};
  
  client.testMap(map, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,map);
    connection.end();
    test.finish();
  });
}

exports['test_map2'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  var map = {};
  
  client.testMap(map, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,map);
    connection.end();
    test.finish();
  });
}

exports['test_string_map'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  var map = { 'ff': 'qq', 'bb': 'zzzzzz'};
  
  client.testStringMap(map, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,map);
    connection.end();
    test.finish();
  });
}

exports['test_set'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  var set = [2,3,4,5];
  
  client.testMap(set, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,set);
    connection.end();
    test.finish();
  });
}

exports['test_list'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  var list = [2,3,4,5];
  
  client.testList(list, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,list);
    connection.end();
    test.finish();
  });
}

exports['test_enum'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  var en = ttypes.Numberz['TWO'];
  
  client.testEnum(en, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,en);
    connection.end();
    test.finish();
  });
}

exports['test_typedef'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testTypedef(2400, function(err, response) {
    assert.ifError(err);
    assert.ok(response instanceof Int64);
    assert.deepEqual(response.toString(10),'2400');
    connection.end();
    test.finish();
  });
}

exports['test_mapmap'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testMapMap(2, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,bogusMultiMap);
    connection.end();
    test.finish();
  });
}

exports['test_mapmap2'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testMapMap(1, function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,{});
    connection.end();
    test.finish();
  });
}

exports['test_insanity'] = function (test, assert) {
  test.skip(); //There is somethng severely brokey here..
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testInsanity(bogusInsanity, function(err, response) {
    assert.ifError(err);
    console.log(Object.keys(response));
    //assert.deepEqual(response[new Int64(1234)][6],bogusInsanity);
    connection.end();
    test.finish();
  });
}

exports['test_multi'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  client.testMulti(233, 2400, new Int64(2400), {2: 'blah'}, 4, new Int64(3400), function(err, response) {
    assert.ifError(err);
    assert.deepEqual(response,testStruct2);
    connection.end();
    test.finish();
  });
}

exports['test_oneway'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(ThriftTest, connection);
  
  onewayfunc = function() {
    connection.end();
    test.finish();
  }
  
  client.testOneway(10);
}