# node-thrift

Thrift protocol implementation for nodejs. As of version 0.0.1, the basic
protocol has been implemented. A Thrift compiler that will generate the .js
files from a Thrift specification is being implemented as well, see the
Thrift Compiler section below.

NOTE: By default, node-thrift uses TFramedTransport. Using a popular
example, this is enabled by default in Cassandra 0.7 (but configuration must be
changed in Cassandra 0.6.x and earlier). See the
[examples](https://github.com/wadey/node-thrift/tree/master/examples) folder
to see how to enable TBufferedTransport (added in 0.7.0).

## Install

    npm install thrift 

## Thrift Compiler

A Thrift compiler is included in the 0.6.0 release of Thrift. You can
compile nodejs sources by running the following:

    thrift --gen js:node thrift_file

## Cassandra Client Example:

Here is a Cassandra example:

    var thrift = require('thrift'),
        Cassandra = require('./gen-nodejs/Cassandra')
        ttypes = require('./gen-nodejs/cassandra_types');

    var connection = thrift.createConnection("localhost", 9160),
        client = thrift.createClient(Cassandra, connection);

    connection.on('error', function(err) {
      console.error(err);
    });

    client.get_slice("Keyspace", "key", new ttypes.ColumnParent({column_family: "ExampleCF"}), new ttypes.SlicePredicate({slice_range: new ttypes.SliceRange({start: '', finish: ''})}), ttypes.ConsistencyLevel.ONE, function(err, data) {
      if (err) {
        // handle err
      } else {
        // data == [ttypes.ColumnOrSuperColumn, ...]
      }
      connection.end();
    });

## Using Standard IO

The StdIOClient and StdIOConnection was tested with: https://github.com/apache/thrift/blob/trunk/tutorial/php/PhpServer.php.
However, the StdIOConnection should be able to interface with any process reading and writing to stdin and stdout using a thrift protocol.

Here is a example:

	var thrift = require('thrift'),
			connection = thrift.createStdIOConnection('php PhpServer.php'),//the php server from above
			client = thrift.createStdIOClient(someProcessor,connection);

			client.someMethod(someParam,function(err,data){
				if(!err){
					console.log(data,"MADE IT HERE'S YOUR DATA");
					return;
				}

				throw err;

			});

## Libraries using node-thrift

* [yukim/node_cassandra](https://github.com/yukim/node_cassandra)

## Custom client and server example

An example based on the one shown on the Thrift front page is included in the [examples](https://github.com/wadey/node-thrift/tree/master/examples) folder.
