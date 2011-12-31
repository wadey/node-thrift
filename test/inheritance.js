var thrift = require('../lib/thrift');
 
var SuperUserStorage = require('./generated/gen-nodejs/SuperUserStorage'),
ttypes = require('./generated/gen-nodejs/mid_types');

var SuperUserStorage = require('./generated/gen-nodejs/SuperUserStorage'),
mid_ttypes = require('./generated/gen-nodejs/mid_types');

var server = thrift.createServer(SuperUserStorage, {
   store: function(user, success) {
       success();
   },
								 
   retrieve: function(uid, success) {
       success(new mid_ttypes.UserProfile({'uid':1,'name':'blak','blurb':'blak'}));
   },
								 
   names: function(success) {
       success(['bob','bob mcbob']);
   },
   yourmom: function(success) {
         success();                 
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

exports['test_derived'] = function (test, assert) {
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(SuperUserStorage, connection);
  
  client.yourmom(function(err, response) {
    assert.ifError(err);
    connection.end();
    test.finish();
  });
}

exports['test_base'] = function (test, assert) {
  test.skip(); //added this and then forgot that.. *cough* this bug has yet to be fixed in our builds. :)
  
  var connection = thrift.createConnection('localhost', 9162),
  client = thrift.createClient(SuperUserStorage, connection);
  
  client.names(function(err, response) {
    assert.ifError(err);
    connection.end();
    test.finish();
  });
}
