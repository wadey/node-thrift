var thrift = require('../lib/thrift');
 
var ThriftTest = require('./generated/gen-nodejs/ThriftTest'),
ttypes = require('./generated/gen-nodejs/ThriftTest_types');
Int64 = require('node-int64');
var async = require('async');


var server = thrift.createServer(ThriftTest, {
  testVoid: function(success) {
    success();
  },
  testString: function(thing, success) {
    success(thing);
  },
  testOneway: function(secondsToSleep) {
    onewayfunc();
  }
});

exports['test_reconnect_reopen'] = function(test, assert) {
  server.listen(9162);
  async.series([
    function(callback) {
      var connection = thrift.createConnection('localhost', 9162),
      client = thrift.createClient(ThriftTest, connection);
      
      client.testVoid(function(err, response) {
        assert.ifError(err);
        connection.end();
        server.close();
        callback();
      });
    },
    function(callback) {
      server.listen(9162);
      var connection = thrift.createConnection('localhost', 9162),
      client = thrift.createClient(ThriftTest, connection);
      
      client.testVoid(function(err, response) {
        assert.ifError(err);
        connection.end();
        callback();
      });
    }
  ], function(err) {
    assert.ifError(err);
    server.close();
    test.finish();
  });
}

exports['test_disconnect_detect'] = function(test, assert) {
  server.listen(9162);
  var connection = thrift.createConnection('localhost', 9162); 
  var conncheck = false;
  connection.once('close', function() {
    conncheck = true;
    test.finish();
  });
  var client = thrift.createClient(ThriftTest, connection);
  client.testVoid(function(err, response) {
    assert.ifError(err);
    connection.end();
    server.close();
  });
}

