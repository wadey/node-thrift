var Thrift = require('thrift').Thrift,
    ttypes = require('./cassandra_types');

//HELPER FUNCTIONS AND STRUCTURES

Cassandra_get_slice_args = function(args){
this.keyspace = ''
this.key = ''
this.column_parent = null;
this.predicate = null;
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_slice_args.prototype = {}
Cassandra_get_slice_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ttypes.ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new ttypes.SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_slice_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_slice_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 2)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 3)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 4)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 5)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_slice_result = function(args){
this.success = []
this.ire = new ttypes.InvalidRequestException()
this.ue = new ttypes.UnavailableException()
this.te = new ttypes.TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_slice_result.prototype = {}
Cassandra_get_slice_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.LIST) {
{
var _size37 = 0
var rtmp3
this.success = []
var _etype40 = 0
rtmp3 = input.readListBegin()
_etype40 = rtmp3.etype
_size37 = rtmp3.size
for (var _i41 = 0; _i41 < _size37; ++_i41)
{
var elem42 = null
elem42 = new ttypes.ColumnOrSuperColumn()
elem42.read(input)
this.success.push(elem42)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new ttypes.InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new ttypes.UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new ttypes.TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_slice_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_slice_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRUCT, this.success.length)
{
for(var iter43 in this.success)
{
iter43=this.success[iter43]
iter43.write(output)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

CassandraClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this.seqid  = 0
  this._reqs = {};
}
CassandraClient.prototype = {}

CassandraClient.prototype.get_slice = function(keyspace,key,column_parent,predicate,consistency_level,callback){
this.seqid += 1;
this._reqs[this.seqid] = callback;
this.send_get_slice(keyspace, key, column_parent, predicate, consistency_level)
}

CassandraClient.prototype.send_get_slice = function(keyspace,key,column_parent,predicate,consistency_level){
var output = new this.pClass(this.output);
output.writeMessageBegin('get_slice', Thrift.MessageType.CALL, this.seqid)
var args = new ttypes.Cassandra_get_slice_args()
args.keyspace = keyspace
args.key = key
args.column_parent = column_parent
args.predicate = predicate
args.consistency_level = consistency_level
args.write(output)
output.writeMessageEnd()
return this.output.flush()
}

CassandraClient.prototype.recv_get_slice = function(input, mtype, rseqid){
var callback = this._reqs[rseqid] || function() {};
delete this._reqs[rseqid];
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(input)
  input.readMessageEnd()
  return callback(x, null);
}
var result = new Cassandra_get_slice_result()
result.read(input)
input.readMessageEnd()

if (null != result.success ) {
  return callback(null, result.success);
}
if (null != result.ire) {
  return callback(result.ire, null);
}
if (null != result.nfe) {
  return callback(result.nfe, null);
}
if (null != result.ue) {
  return callback(result.ue, null);
}
if (null != result.te) {
  return callback(result.te, null);
}
throw "get_slice failed: unknown result"
}
