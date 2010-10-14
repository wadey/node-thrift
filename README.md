# node-thrift

Thrift protocol implementation for nodejs. As of version 0.0.1, the basic
protocol has been implemented. The next step is to create a Thrift code
generator that will generate the .js files from a Thrift specification.
An example of one of the Cassandra methods is included in the examples/
folder.

NOTE: you must the the framed thrift transport, TFramedTransport in most
implementations, on the server side. Using a popular example, this is enabled
by default in Cassandra 0.7 (but configuration must be changed in Cassandra
0.6.x and earlier).

## Usage:

Here is a Cassandra example:

    var thrift = require('thrift'),
        Cassandra = require('./examples/Cassandra')
        cassandra_types = require('./examples/cassandra_types');

    var conn = new thrift.Connection(Cassandra.Client, "localhost", 9160);
    conn.open(function(client) {
      client.get_slice("Keyspace", "key", new ColumnParent({column_family: "ExampleCF", super_column: null}), new SlicePredicate({slice_range: new SliceRange({start: '', end: ''})}), ConsistencyLevel.ONE, function(err, data) {
        if (err) {
          // handle err
        } else {
          // data == [ColumnOrSuperColumn, ...]
        }
        conn.end();
      });
    });
