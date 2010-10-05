var Thrift = require('thrift').Thrift,
    ttypes = require('./cassandra_types');

//HELPER FUNCTIONS AND STRUCTURES

Cassandra_login_args = function(args){
this.keyspace = ''
this.auth_request = new AuthenticationRequest()
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.auth_request)
this.auth_request = args.auth_request
}}
Cassandra_login_args.prototype = {}
Cassandra_login_args.prototype.read = function(input){ 
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
case 2:if (ftype == Thrift.Type.STRUCT) {
this.auth_request = new AuthenticationRequest()
this.auth_request.read(input)
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

Cassandra_login_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_login_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.auth_request) {
output.writeFieldBegin('auth_request', Thrift.Type.STRUCT, 2)
this.auth_request.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_login_result = function(args){
this.authnx = new AuthenticationException()
this.authzx = new AuthorizationException()
if( args != null ){if (null != args.authnx)
this.authnx = args.authnx
if (null != args.authzx)
this.authzx = args.authzx
}}
Cassandra_login_result.prototype = {}
Cassandra_login_result.prototype.read = function(input){ 
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
case 1:if (ftype == Thrift.Type.STRUCT) {
this.authnx = new AuthenticationException()
this.authnx.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.authzx = new AuthorizationException()
this.authzx.read(input)
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

Cassandra_login_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_login_result')
if (null != this.authnx) {
output.writeFieldBegin('authnx', Thrift.Type.STRUCT, 1)
this.authnx.write(output)
output.writeFieldEnd()
}
if (null != this.authzx) {
output.writeFieldBegin('authzx', Thrift.Type.STRUCT, 2)
this.authzx.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_args = function(args){
this.keyspace = ''
this.key = ''
this.column_path = new ColumnPath()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_args.prototype = {}
Cassandra_get_args.prototype.read = function(input){ 
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
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
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

Cassandra_get_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_args')
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
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 3)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_result = function(args){
this.success = new ColumnOrSuperColumn()
this.ire = new InvalidRequestException()
this.nfe = new NotFoundException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.nfe)
this.nfe = args.nfe
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_result.prototype = {}
Cassandra_get_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.STRUCT) {
this.success = new ColumnOrSuperColumn()
this.success.read(input)
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.nfe = new NotFoundException()
this.nfe.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_get_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRUCT, 0)
this.success.write(output)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.nfe) {
output.writeFieldBegin('nfe', Thrift.Type.STRUCT, 2)
this.nfe.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 3)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 4)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_slice_args = function(args){
this.keyspace = ''
this.key = ''
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
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
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
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
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
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
elem42 = new ColumnOrSuperColumn()
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
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_multiget_args = function(args){
this.keyspace = ''
this.keys = []
this.column_path = new ColumnPath()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.keys)
this.keys = args.keys
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_multiget_args.prototype = {}
Cassandra_multiget_args.prototype.read = function(input){ 
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
case 2:if (ftype == Thrift.Type.LIST) {
{
var _size44 = 0
var rtmp3
this.keys = []
var _etype47 = 0
rtmp3 = input.readListBegin()
_etype47 = rtmp3.etype
_size44 = rtmp3.size
for (var _i48 = 0; _i48 < _size44; ++_i48)
{
var elem49 = null
var rtmp = input.readString()
elem49 = rtmp.value
this.keys.push(elem49)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
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

Cassandra_multiget_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.keys) {
output.writeFieldBegin('keys', Thrift.Type.LIST, 2)
{
output.writeListBegin(Thrift.Type.STRING, this.keys.length)
{
for(var iter50 in this.keys)
{
iter50=this.keys[iter50]
output.writeString(iter50)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 3)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_multiget_result = function(args){
this.success = {}
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_multiget_result.prototype = {}
Cassandra_multiget_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size51 = 0
var rtmp3
this.success = {}
var _ktype52 = 0
var _vtype53 = 0
rtmp3 = input.readMapBegin()
_ktype52= rtmp3.ktype
_vtype53= rtmp3.vtype
_size51= rtmp3.size
for (var _i55 = 0; _i55 < _size51; ++_i55)
{
key56 = ''
val57 = null
var rtmp = input.readString()
key56 = rtmp.value
val57 = new ColumnOrSuperColumn()
val57.read(input)
this.success[key56] = val57
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_multiget_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, this.success.length)
{
for(var kiter58 in this.success){
var viter59 = this.success[kiter58]
output.writeString(kiter58)
viter59.write(output)
}
}
output.writeMapEnd()
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

Cassandra_multiget_slice_args = function(args){
this.keyspace = ''
this.keys = []
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.keys)
this.keys = args.keys
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_multiget_slice_args.prototype = {}
Cassandra_multiget_slice_args.prototype.read = function(input){ 
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
case 2:if (ftype == Thrift.Type.LIST) {
{
var _size60 = 0
var rtmp3
this.keys = []
var _etype63 = 0
rtmp3 = input.readListBegin()
_etype63 = rtmp3.etype
_size60 = rtmp3.size
for (var _i64 = 0; _i64 < _size60; ++_i64)
{
var elem65 = null
var rtmp = input.readString()
elem65 = rtmp.value
this.keys.push(elem65)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
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

Cassandra_multiget_slice_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_slice_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.keys) {
output.writeFieldBegin('keys', Thrift.Type.LIST, 2)
{
output.writeListBegin(Thrift.Type.STRING, this.keys.length)
{
for(var iter66 in this.keys)
{
iter66=this.keys[iter66]
output.writeString(iter66)
}
}
output.writeListEnd()
}
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

Cassandra_multiget_slice_result = function(args){
this.success = {}
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_multiget_slice_result.prototype = {}
Cassandra_multiget_slice_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size67 = 0
var rtmp3
this.success = {}
var _ktype68 = 0
var _vtype69 = 0
rtmp3 = input.readMapBegin()
_ktype68= rtmp3.ktype
_vtype69= rtmp3.vtype
_size67= rtmp3.size
for (var _i71 = 0; _i71 < _size67; ++_i71)
{
key72 = ''
val73 = []
var rtmp = input.readString()
key72 = rtmp.value
{
var _size74 = 0
var rtmp3
val73 = []
var _etype77 = 0
rtmp3 = input.readListBegin()
_etype77 = rtmp3.etype
_size74 = rtmp3.size
for (var _i78 = 0; _i78 < _size74; ++_i78)
{
var elem79 = null
elem79 = new ColumnOrSuperColumn()
elem79.read(input)
val73.push(elem79)
}
input.readListEnd()
}
this.success[key72] = val73
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_multiget_slice_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_slice_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, this.success.length)
{
for(var kiter80 in this.success){
var viter81 = this.success[kiter80]
output.writeString(kiter80)
{
output.writeListBegin(Thrift.Type.STRUCT, viter81.length)
{
for(var iter82 in viter81)
{
iter82=viter81[iter82]
iter82.write(output)
}
}
output.writeListEnd()
}
}
}
output.writeMapEnd()
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

Cassandra_get_count_args = function(args){
this.keyspace = ''
this.key = ''
this.column_parent = new ColumnParent()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_count_args.prototype = {}
Cassandra_get_count_args.prototype.read = function(input){ 
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
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
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

Cassandra_get_count_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_count_args')
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
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_count_result = function(args){
this.success = 0
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_count_result.prototype = {}
Cassandra_get_count_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_get_count_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_count_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.I32, 0)
output.writeI32(this.success)
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

Cassandra_multiget_key_range_args = function(args){
this.keyspace = ''
this.column_family = ''
this.key_ranges = []
this.count = 100
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.column_family)
this.column_family = args.column_family
if (null != args.key_ranges)
this.key_ranges = args.key_ranges
if (null != args.count)
this.count = args.count
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_multiget_key_range_args.prototype = {}
Cassandra_multiget_key_range_args.prototype.read = function(input){ 
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
this.column_family = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.LIST) {
{
var _size83 = 0
var rtmp3
this.key_ranges = []
var _etype86 = 0
rtmp3 = input.readListBegin()
_etype86 = rtmp3.etype
_size83 = rtmp3.size
for (var _i87 = 0; _i87 < _size83; ++_i87)
{
var elem88 = null
elem88 = new KeyRange()
elem88.read(input)
this.key_ranges.push(elem88)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.count = rtmp.value
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

Cassandra_multiget_key_range_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_key_range_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.column_family) {
output.writeFieldBegin('column_family', Thrift.Type.STRING, 2)
output.writeString(this.column_family)
output.writeFieldEnd()
}
if (null != this.key_ranges) {
output.writeFieldBegin('key_ranges', Thrift.Type.LIST, 3)
{
output.writeListBegin(Thrift.Type.STRUCT, this.key_ranges.length)
{
for(var iter89 in this.key_ranges)
{
iter89=this.key_ranges[iter89]
iter89.write(output)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.count) {
output.writeFieldBegin('count', Thrift.Type.I32, 4)
output.writeI32(this.count)
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

Cassandra_multiget_key_range_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_multiget_key_range_result.prototype = {}
Cassandra_multiget_key_range_result.prototype.read = function(input){ 
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
var _size90 = 0
var rtmp3
this.success = []
var _etype93 = 0
rtmp3 = input.readListBegin()
_etype93 = rtmp3.etype
_size90 = rtmp3.size
for (var _i94 = 0; _i94 < _size90; ++_i94)
{
var elem95 = null
var rtmp = input.readString()
elem95 = rtmp.value
this.success.push(elem95)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_multiget_key_range_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_key_range_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRING, this.success.length)
{
for(var iter96 in this.success)
{
iter96=this.success[iter96]
output.writeString(iter96)
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

Cassandra_get_range_slice_args = function(args){
this.keyspace = ''
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.start_key = ''
this.finish_key = ''
this.row_count = 100
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.start_key)
this.start_key = args.start_key
if (null != args.finish_key)
this.finish_key = args.finish_key
if (null != args.row_count)
this.row_count = args.row_count
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_range_slice_args.prototype = {}
Cassandra_get_range_slice_args.prototype.read = function(input){ 
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
case 2:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.start_key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.finish_key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 6:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.row_count = rtmp.value
} else {
  input.skip(ftype)
}
break
case 7:if (ftype == Thrift.Type.I32) {
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

Cassandra_get_range_slice_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_range_slice_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 2)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 3)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.start_key) {
output.writeFieldBegin('start_key', Thrift.Type.STRING, 4)
output.writeString(this.start_key)
output.writeFieldEnd()
}
if (null != this.finish_key) {
output.writeFieldBegin('finish_key', Thrift.Type.STRING, 5)
output.writeString(this.finish_key)
output.writeFieldEnd()
}
if (null != this.row_count) {
output.writeFieldBegin('row_count', Thrift.Type.I32, 6)
output.writeI32(this.row_count)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 7)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_range_slice_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_range_slice_result.prototype = {}
Cassandra_get_range_slice_result.prototype.read = function(input){ 
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
var _size97 = 0
var rtmp3
this.success = []
var _etype100 = 0
rtmp3 = input.readListBegin()
_etype100 = rtmp3.etype
_size97 = rtmp3.size
for (var _i101 = 0; _i101 < _size97; ++_i101)
{
var elem102 = null
elem102 = new KeySlice()
elem102.read(input)
this.success.push(elem102)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_get_range_slice_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_range_slice_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRUCT, this.success.length)
{
for(var iter103 in this.success)
{
iter103=this.success[iter103]
iter103.write(output)
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

Cassandra_get_range_slices_args = function(args){
this.keyspace = ''
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.range = new KeyRange()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.range)
this.range = args.range
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_range_slices_args.prototype = {}
Cassandra_get_range_slices_args.prototype.read = function(input){ 
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
case 2:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.range = new KeyRange()
this.range.read(input)
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

Cassandra_get_range_slices_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_range_slices_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 2)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 3)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.range) {
output.writeFieldBegin('range', Thrift.Type.STRUCT, 4)
this.range.write(output)
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

Cassandra_get_range_slices_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_range_slices_result.prototype = {}
Cassandra_get_range_slices_result.prototype.read = function(input){ 
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
var _size104 = 0
var rtmp3
this.success = []
var _etype107 = 0
rtmp3 = input.readListBegin()
_etype107 = rtmp3.etype
_size104 = rtmp3.size
for (var _i108 = 0; _i108 < _size104; ++_i108)
{
var elem109 = null
elem109 = new KeySlice()
elem109.read(input)
this.success.push(elem109)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_get_range_slices_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_range_slices_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRUCT, this.success.length)
{
for(var iter110 in this.success)
{
iter110=this.success[iter110]
iter110.write(output)
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

Cassandra_insert_args = function(args){
this.keyspace = ''
this.key = ''
this.column_path = new ColumnPath()
this.value = ''
this.timestamp = 0
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.value)
this.value = args.value
if (null != args.timestamp)
this.timestamp = args.timestamp
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_insert_args.prototype = {}
Cassandra_insert_args.prototype.read = function(input){ 
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
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.value = rtmp.value
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I64) {
var rtmp = input.readI64()
this.timestamp = rtmp.value
} else {
  input.skip(ftype)
}
break
case 6:if (ftype == Thrift.Type.I32) {
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

Cassandra_insert_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_insert_args')
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
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 3)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.value) {
output.writeFieldBegin('value', Thrift.Type.STRING, 4)
output.writeString(this.value)
output.writeFieldEnd()
}
if (null != this.timestamp) {
output.writeFieldBegin('timestamp', Thrift.Type.I64, 5)
output.writeI64(this.timestamp)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 6)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_insert_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_insert_result.prototype = {}
Cassandra_insert_result.prototype.read = function(input){ 
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
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_insert_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_insert_result')
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

Cassandra_batch_insert_args = function(args){
this.keyspace = ''
this.key = ''
this.cfmap = {}
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.cfmap)
this.cfmap = args.cfmap
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_batch_insert_args.prototype = {}
Cassandra_batch_insert_args.prototype.read = function(input){ 
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
case 3:if (ftype == Thrift.Type.MAP) {
{
var _size111 = 0
var rtmp3
this.cfmap = {}
var _ktype112 = 0
var _vtype113 = 0
rtmp3 = input.readMapBegin()
_ktype112= rtmp3.ktype
_vtype113= rtmp3.vtype
_size111= rtmp3.size
for (var _i115 = 0; _i115 < _size111; ++_i115)
{
key116 = ''
val117 = []
var rtmp = input.readString()
key116 = rtmp.value
{
var _size118 = 0
var rtmp3
val117 = []
var _etype121 = 0
rtmp3 = input.readListBegin()
_etype121 = rtmp3.etype
_size118 = rtmp3.size
for (var _i122 = 0; _i122 < _size118; ++_i122)
{
var elem123 = null
elem123 = new ColumnOrSuperColumn()
elem123.read(input)
val117.push(elem123)
}
input.readListEnd()
}
this.cfmap[key116] = val117
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
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

Cassandra_batch_insert_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_batch_insert_args')
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
if (null != this.cfmap) {
output.writeFieldBegin('cfmap', Thrift.Type.MAP, 3)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, this.cfmap.length)
{
for(var kiter124 in this.cfmap){
var viter125 = this.cfmap[kiter124]
output.writeString(kiter124)
{
output.writeListBegin(Thrift.Type.STRUCT, viter125.length)
{
for(var iter126 in viter125)
{
iter126=viter125[iter126]
iter126.write(output)
}
}
output.writeListEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_batch_insert_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_batch_insert_result.prototype = {}
Cassandra_batch_insert_result.prototype.read = function(input){ 
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
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_batch_insert_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_batch_insert_result')
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

Cassandra_remove_args = function(args){
this.keyspace = ''
this.key = ''
this.column_path = new ColumnPath()
this.timestamp = 0
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.timestamp)
this.timestamp = args.timestamp
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_remove_args.prototype = {}
Cassandra_remove_args.prototype.read = function(input){ 
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
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I64) {
var rtmp = input.readI64()
this.timestamp = rtmp.value
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

Cassandra_remove_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_remove_args')
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
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 3)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.timestamp) {
output.writeFieldBegin('timestamp', Thrift.Type.I64, 4)
output.writeI64(this.timestamp)
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

Cassandra_remove_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_remove_result.prototype = {}
Cassandra_remove_result.prototype.read = function(input){ 
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
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_remove_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_remove_result')
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

Cassandra_batch_mutate_args = function(args){
this.keyspace = ''
this.mutation_map = {}
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.mutation_map)
this.mutation_map = args.mutation_map
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_batch_mutate_args.prototype = {}
Cassandra_batch_mutate_args.prototype.read = function(input){ 
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
case 2:if (ftype == Thrift.Type.MAP) {
{
var _size127 = 0
var rtmp3
this.mutation_map = {}
var _ktype128 = 0
var _vtype129 = 0
rtmp3 = input.readMapBegin()
_ktype128= rtmp3.ktype
_vtype129= rtmp3.vtype
_size127= rtmp3.size
for (var _i131 = 0; _i131 < _size127; ++_i131)
{
key132 = ''
val133 = {}
var rtmp = input.readString()
key132 = rtmp.value
{
var _size134 = 0
var rtmp3
val133 = {}
var _ktype135 = 0
var _vtype136 = 0
rtmp3 = input.readMapBegin()
_ktype135= rtmp3.ktype
_vtype136= rtmp3.vtype
_size134= rtmp3.size
for (var _i138 = 0; _i138 < _size134; ++_i138)
{
key139 = ''
val140 = []
var rtmp = input.readString()
key139 = rtmp.value
{
var _size141 = 0
var rtmp3
val140 = []
var _etype144 = 0
rtmp3 = input.readListBegin()
_etype144 = rtmp3.etype
_size141 = rtmp3.size
for (var _i145 = 0; _i145 < _size141; ++_i145)
{
var elem146 = null
elem146 = new Mutation()
elem146.read(input)
val140.push(elem146)
}
input.readListEnd()
}
val133[key139] = val140
}
input.readMapEnd()
}
this.mutation_map[key132] = val133
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.I32) {
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

Cassandra_batch_mutate_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_batch_mutate_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.mutation_map) {
output.writeFieldBegin('mutation_map', Thrift.Type.MAP, 2)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.MAP, this.mutation_map.length)
{
for(var kiter147 in this.mutation_map){
var viter148 = this.mutation_map[kiter147]
output.writeString(kiter147)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, viter148.length)
{
for(var kiter149 in viter148){
var viter150 = viter148[kiter149]
output.writeString(kiter149)
{
output.writeListBegin(Thrift.Type.STRUCT, viter150.length)
{
for(var iter151 in viter150)
{
iter151=viter150[iter151]
iter151.write(output)
}
}
output.writeListEnd()
}
}
}
output.writeMapEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 3)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_batch_mutate_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_batch_mutate_result.prototype = {}
Cassandra_batch_mutate_result.prototype.read = function(input){ 
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
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
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

Cassandra_batch_mutate_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_batch_mutate_result')
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

Cassandra_get_string_property_args = function(args){
this.property = ''
if( args != null ){if (null != args.property)
this.property = args.property
}}
Cassandra_get_string_property_args.prototype = {}
Cassandra_get_string_property_args.prototype.read = function(input){ 
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
this.property = rtmp.value
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

Cassandra_get_string_property_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_string_property_args')
if (null != this.property) {
output.writeFieldBegin('property', Thrift.Type.STRING, 1)
output.writeString(this.property)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_string_property_result = function(args){
this.success = ''
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_get_string_property_result.prototype = {}
Cassandra_get_string_property_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
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

Cassandra_get_string_property_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_string_property_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_string_list_property_args = function(args){
this.property = ''
if( args != null ){if (null != args.property)
this.property = args.property
}}
Cassandra_get_string_list_property_args.prototype = {}
Cassandra_get_string_list_property_args.prototype.read = function(input){ 
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
this.property = rtmp.value
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

Cassandra_get_string_list_property_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_string_list_property_args')
if (null != this.property) {
output.writeFieldBegin('property', Thrift.Type.STRING, 1)
output.writeString(this.property)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_string_list_property_result = function(args){
this.success = []
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_get_string_list_property_result.prototype = {}
Cassandra_get_string_list_property_result.prototype.read = function(input){ 
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
var _size152 = 0
var rtmp3
this.success = []
var _etype155 = 0
rtmp3 = input.readListBegin()
_etype155 = rtmp3.etype
_size152 = rtmp3.size
for (var _i156 = 0; _i156 < _size152; ++_i156)
{
var elem157 = null
var rtmp = input.readString()
elem157 = rtmp.value
this.success.push(elem157)
}
input.readListEnd()
}
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

Cassandra_get_string_list_property_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_string_list_property_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRING, this.success.length)
{
for(var iter158 in this.success)
{
iter158=this.success[iter158]
output.writeString(iter158)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspaces_args = function(args){
}
Cassandra_describe_keyspaces_args.prototype = {}
Cassandra_describe_keyspaces_args.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_keyspaces_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspaces_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspaces_result = function(args){
this.success = []
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_describe_keyspaces_result.prototype = {}
Cassandra_describe_keyspaces_result.prototype.read = function(input){ 
console.log("XXX: in here");
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
console.log("XXX: field: " + fname + ", " + ftype);
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.SET) {
{
  console.log("XXX: set");
var _size159 = 0
var rtmp3
this.success = []
var _etype162 = 0
rtmp3 = input.readSetBegin()
_etype162= rtmp3.etype
_size159 = rtmp3.size
for (var _i163 = 0; _i163 < _size159; ++_i163)
{
var elem164 = null
var rtmp = input.readString()
console.log("SUCCESS: " + rtmp);
elem164 = rtmp.value
this.success.push(elem164)
}
input.readSetEnd()
}
} else {
  input.skip(ftype)
}
break
default:
  console.log("XXX: skip: " + ftype);
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
console.log("XXX: out here");
return
}

Cassandra_describe_keyspaces_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspaces_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.SET, 0)
{
output.writeSetBegin(Thrift.Type.STRING, this.success.length)
{
for(var iter165 in this.success)
{
iter165=this.success[iter165]
output.writeString(iter165)
}
}
output.writeSetEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_cluster_name_args = function(args){
}
Cassandra_describe_cluster_name_args.prototype = {}
Cassandra_describe_cluster_name_args.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_cluster_name_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_cluster_name_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_cluster_name_result = function(args){
this.success = ''
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_describe_cluster_name_result.prototype = {}
Cassandra_describe_cluster_name_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
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

Cassandra_describe_cluster_name_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_cluster_name_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_version_args = function(args){
}
Cassandra_describe_version_args.prototype = {}
Cassandra_describe_version_args.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_version_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_version_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_version_result = function(args){
this.success = ''
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_describe_version_result.prototype = {}
Cassandra_describe_version_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
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

Cassandra_describe_version_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_version_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_ring_args = function(args){
this.keyspace = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
}}
Cassandra_describe_ring_args.prototype = {}
Cassandra_describe_ring_args.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_ring_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_ring_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_ring_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
}}
Cassandra_describe_ring_result.prototype = {}
Cassandra_describe_ring_result.prototype.read = function(input){ 
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
var _size166 = 0
var rtmp3
this.success = []
var _etype169 = 0
rtmp3 = input.readListBegin()
_etype169 = rtmp3.etype
_size166 = rtmp3.size
for (var _i170 = 0; _i170 < _size166; ++_i170)
{
var elem171 = null
elem171 = new TokenRange()
elem171.read(input)
this.success.push(elem171)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
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

Cassandra_describe_ring_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_ring_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRUCT, this.success.length)
{
for(var iter172 in this.success)
{
iter172=this.success[iter172]
iter172.write(output)
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
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_partitioner_args = function(args){
}
Cassandra_describe_partitioner_args.prototype = {}
Cassandra_describe_partitioner_args.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_partitioner_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_partitioner_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_partitioner_result = function(args){
this.success = ''
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_describe_partitioner_result.prototype = {}
Cassandra_describe_partitioner_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
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

Cassandra_describe_partitioner_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_partitioner_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspace_args = function(args){
this.keyspace = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
}}
Cassandra_describe_keyspace_args.prototype = {}
Cassandra_describe_keyspace_args.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_keyspace_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspace_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspace_result = function(args){
this.success = {}
this.nfe = new NotFoundException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.nfe)
this.nfe = args.nfe
}}
Cassandra_describe_keyspace_result.prototype = {}
Cassandra_describe_keyspace_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size173 = 0
var rtmp3
this.success = {}
var _ktype174 = 0
var _vtype175 = 0
rtmp3 = input.readMapBegin()
_ktype174= rtmp3.ktype
_vtype175= rtmp3.vtype
_size173= rtmp3.size
for (var _i177 = 0; _i177 < _size173; ++_i177)
{
key178 = ''
val179 = {}
var rtmp = input.readString()
key178 = rtmp.value
{
var _size180 = 0
var rtmp3
val179 = {}
var _ktype181 = 0
var _vtype182 = 0
rtmp3 = input.readMapBegin()
_ktype181= rtmp3.ktype
_vtype182= rtmp3.vtype
_size180= rtmp3.size
for (var _i184 = 0; _i184 < _size180; ++_i184)
{
key185 = ''
val186 = ''
var rtmp = input.readString()
key185 = rtmp.value
var rtmp = input.readString()
val186 = rtmp.value
val179[key185] = val186
}
input.readMapEnd()
}
this.success[key178] = val179
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.nfe = new NotFoundException()
this.nfe.read(input)
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

Cassandra_describe_keyspace_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspace_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.MAP, this.success.length)
{
for(var kiter187 in this.success){
var viter188 = this.success[kiter187]
output.writeString(kiter187)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, viter188.length)
{
for(var kiter189 in viter188){
var viter190 = viter188[kiter189]
output.writeString(kiter189)
output.writeString(viter190)
}
}
output.writeMapEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.nfe) {
output.writeFieldBegin('nfe', Thrift.Type.STRUCT, 1)
this.nfe.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_take_snapshot_args = function(args){
this.table_name = ''
this.snapshot_name = ''
if( args != null ){if (null != args.table_name)
this.table_name = args.table_name
if (null != args.snapshot_name)
this.snapshot_name = args.snapshot_name
}}
Cassandra_take_snapshot_args.prototype = {}
Cassandra_take_snapshot_args.prototype.read = function(input){ 
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
this.table_name = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.snapshot_name = rtmp.value
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

Cassandra_take_snapshot_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_take_snapshot_args')
if (null != this.table_name) {
output.writeFieldBegin('table_name', Thrift.Type.STRING, 1)
output.writeString(this.table_name)
output.writeFieldEnd()
}
if (null != this.snapshot_name) {
output.writeFieldBegin('snapshot_name', Thrift.Type.STRING, 2)
output.writeString(this.snapshot_name)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_take_snapshot_result = function(args){
}
Cassandra_take_snapshot_result.prototype = {}
Cassandra_take_snapshot_result.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_take_snapshot_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_take_snapshot_result')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_force_table_clean_args = function(args){
}
Cassandra_force_table_clean_args.prototype = {}
Cassandra_force_table_clean_args.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_force_table_clean_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_force_table_clean_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_force_table_clean_result = function(args){
}
Cassandra_force_table_clean_result.prototype = {}
Cassandra_force_table_clean_result.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_force_table_clean_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_force_table_clean_result')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_force_table_compaction_args = function(args){
}
Cassandra_force_table_compaction_args.prototype = {}
Cassandra_force_table_compaction_args.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_force_table_compaction_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_force_table_compaction_args')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_force_table_compaction_result = function(args){
}
Cassandra_force_table_compaction_result.prototype = {}
Cassandra_force_table_compaction_result.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_force_table_compaction_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_force_table_compaction_result')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_force_table_flush_args = function(args){
this.table_name = ''
if( args != null ){if (null != args.table_name)
this.table_name = args.table_name
}}
Cassandra_force_table_flush_args.prototype = {}
Cassandra_force_table_flush_args.prototype.read = function(input){ 
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
this.table_name = rtmp.value
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

Cassandra_force_table_flush_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_force_table_flush_args')
if (null != this.table_name) {
output.writeFieldBegin('table_name', Thrift.Type.STRING, 1)
output.writeString(this.table_name)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_force_table_flush_result = function(args){
}
Cassandra_force_table_flush_result.prototype = {}
Cassandra_force_table_flush_result.prototype.read = function(input){ 
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
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_force_table_flush_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_force_table_flush_result')
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_table_stats_args = function(args){
this.table_name = ''
if( args != null ){if (null != args.table_name)
this.table_name = args.table_name
}}
Cassandra_get_table_stats_args.prototype = {}
Cassandra_get_table_stats_args.prototype.read = function(input){ 
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
this.table_name = rtmp.value
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

Cassandra_get_table_stats_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_table_stats_args')
if (null != this.table_name) {
output.writeFieldBegin('table_name', Thrift.Type.STRING, 1)
output.writeString(this.table_name)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_table_stats_result = function(args){
this.success = {}
this.nfe = new NotFoundException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.nfe)
this.nfe = args.nfe
}}
Cassandra_get_table_stats_result.prototype = {}
Cassandra_get_table_stats_result.prototype.read = function(input){ 
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
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size191 = 0
var rtmp3
this.success = {}
var _ktype192 = 0
var _vtype193 = 0
rtmp3 = input.readMapBegin()
_ktype192= rtmp3.ktype
_vtype193= rtmp3.vtype
_size191= rtmp3.size
for (var _i195 = 0; _i195 < _size191; ++_i195)
{
key196 = ''
val197 = {}
var rtmp = input.readString()
key196 = rtmp.value
{
var _size198 = 0
var rtmp3
val197 = {}
var _ktype199 = 0
var _vtype200 = 0
rtmp3 = input.readMapBegin()
_ktype199= rtmp3.ktype
_vtype200= rtmp3.vtype
_size198= rtmp3.size
for (var _i202 = 0; _i202 < _size198; ++_i202)
{
key203 = ''
val204 = ''
var rtmp = input.readString()
key203 = rtmp.value
var rtmp = input.readString()
val204 = rtmp.value
val197[key203] = val204
}
input.readMapEnd()
}
this.success[key196] = val197
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.nfe = new NotFoundException()
this.nfe.read(input)
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

Cassandra_get_table_stats_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_table_stats_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.MAP, this.success.length)
{
for(var kiter205 in this.success){
var viter206 = this.success[kiter205]
output.writeString(kiter205)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, viter206.length)
{
for(var kiter207 in viter206){
var viter208 = viter206[kiter207]
output.writeString(kiter207)
output.writeString(viter208)
}
}
output.writeMapEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.nfe) {
output.writeFieldBegin('nfe', Thrift.Type.STRUCT, 1)
this.nfe.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_splits_args = function(args){
this.start_token = ''
this.end_token = ''
this.keys_per_split = 0
if( args != null ){if (null != args.start_token)
this.start_token = args.start_token
if (null != args.end_token)
this.end_token = args.end_token
if (null != args.keys_per_split)
this.keys_per_split = args.keys_per_split
}}
Cassandra_describe_splits_args.prototype = {}
Cassandra_describe_splits_args.prototype.read = function(input){ 
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
this.start_token = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.end_token = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.keys_per_split = rtmp.value
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

Cassandra_describe_splits_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_splits_args')
if (null != this.start_token) {
output.writeFieldBegin('start_token', Thrift.Type.STRING, 1)
output.writeString(this.start_token)
output.writeFieldEnd()
}
if (null != this.end_token) {
output.writeFieldBegin('end_token', Thrift.Type.STRING, 2)
output.writeString(this.end_token)
output.writeFieldEnd()
}
if (null != this.keys_per_split) {
output.writeFieldBegin('keys_per_split', Thrift.Type.I32, 3)
output.writeI32(this.keys_per_split)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_splits_result = function(args){
this.success = []
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_describe_splits_result.prototype = {}
Cassandra_describe_splits_result.prototype.read = function(input){ 
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
var _size209 = 0
var rtmp3
this.success = []
var _etype212 = 0
rtmp3 = input.readListBegin()
_etype212 = rtmp3.etype
_size209 = rtmp3.size
for (var _i213 = 0; _i213 < _size209; ++_i213)
{
var elem214 = null
var rtmp = input.readString()
elem214 = rtmp.value
this.success.push(elem214)
}
input.readListEnd()
}
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

Cassandra_describe_splits_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_splits_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRING, this.success.length)
{
for(var iter215 in this.success)
{
iter215=this.success[iter215]
output.writeString(iter215)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

CassandraClient = exports.Client = function(input, output) {
  this.input  = input
  this.output = null == output ? input : output
  this.seqid  = 0
}
CassandraClient.prototype = {}
CassandraClient.prototype.login = function(keyspace,auth_request){
this.send_login(keyspace, auth_request)
this.recv_login()
}

CassandraClient.prototype.send_login = function(keyspace,auth_request){
this.output.writeMessageBegin('login', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_login_args()
args.keyspace = keyspace
args.auth_request = auth_request
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_login = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_login_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.authnx) {
  throw result.authnx
}
if (null != result.authzx) {
  throw result.authzx
}
return
}
CassandraClient.prototype.get = function(keyspace,key,column_path,consistency_level){
this.send_get(keyspace, key, column_path, consistency_level)
return this.recv_get()
}

CassandraClient.prototype.send_get = function(keyspace,key,column_path,consistency_level){
this.output.writeMessageBegin('get', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_args()
args.keyspace = keyspace
args.key = key
args.column_path = column_path
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.nfe) {
  throw result.nfe
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get failed: unknown result"
}
CassandraClient.prototype.get_slice = function(keyspace,key,column_parent,predicate,consistency_level){
this.send_get_slice(keyspace, key, column_parent, predicate, consistency_level)
return this.recv_get_slice()
}

CassandraClient.prototype.send_get_slice = function(keyspace,key,column_parent,predicate,consistency_level){
this.output.writeMessageBegin('get_slice', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_slice_args()
args.keyspace = keyspace
args.key = key
args.column_parent = column_parent
args.predicate = predicate
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_slice = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_slice_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_slice failed: unknown result"
}
CassandraClient.prototype.multiget = function(keyspace,keys,column_path,consistency_level){
this.send_multiget(keyspace, keys, column_path, consistency_level)
return this.recv_multiget()
}

CassandraClient.prototype.send_multiget = function(keyspace,keys,column_path,consistency_level){
this.output.writeMessageBegin('multiget', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_multiget_args()
args.keyspace = keyspace
args.keys = keys
args.column_path = column_path
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_multiget = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_multiget_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "multiget failed: unknown result"
}
CassandraClient.prototype.multiget_slice = function(keyspace,keys,column_parent,predicate,consistency_level){
this.send_multiget_slice(keyspace, keys, column_parent, predicate, consistency_level)
return this.recv_multiget_slice()
}

CassandraClient.prototype.send_multiget_slice = function(keyspace,keys,column_parent,predicate,consistency_level){
this.output.writeMessageBegin('multiget_slice', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_multiget_slice_args()
args.keyspace = keyspace
args.keys = keys
args.column_parent = column_parent
args.predicate = predicate
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_multiget_slice = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_multiget_slice_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "multiget_slice failed: unknown result"
}
CassandraClient.prototype.get_count = function(keyspace,key,column_parent,consistency_level){
this.send_get_count(keyspace, key, column_parent, consistency_level)
return this.recv_get_count()
}

CassandraClient.prototype.send_get_count = function(keyspace,key,column_parent,consistency_level){
this.output.writeMessageBegin('get_count', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_count_args()
args.keyspace = keyspace
args.key = key
args.column_parent = column_parent
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_count = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_count_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_count failed: unknown result"
}
CassandraClient.prototype.multiget_key_range = function(keyspace,column_family,key_ranges,count,consistency_level){
this.send_multiget_key_range(keyspace, column_family, key_ranges, count, consistency_level)
return this.recv_multiget_key_range()
}

CassandraClient.prototype.send_multiget_key_range = function(keyspace,column_family,key_ranges,count,consistency_level){
this.output.writeMessageBegin('multiget_key_range', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_multiget_key_range_args()
args.keyspace = keyspace
args.column_family = column_family
args.key_ranges = key_ranges
args.count = count
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_multiget_key_range = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_multiget_key_range_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "multiget_key_range failed: unknown result"
}
CassandraClient.prototype.get_range_slice = function(keyspace,column_parent,predicate,start_key,finish_key,row_count,consistency_level){
this.send_get_range_slice(keyspace, column_parent, predicate, start_key, finish_key, row_count, consistency_level)
return this.recv_get_range_slice()
}

CassandraClient.prototype.send_get_range_slice = function(keyspace,column_parent,predicate,start_key,finish_key,row_count,consistency_level){
this.output.writeMessageBegin('get_range_slice', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_range_slice_args()
args.keyspace = keyspace
args.column_parent = column_parent
args.predicate = predicate
args.start_key = start_key
args.finish_key = finish_key
args.row_count = row_count
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_range_slice = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_range_slice_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_range_slice failed: unknown result"
}
CassandraClient.prototype.get_range_slices = function(keyspace,column_parent,predicate,range,consistency_level){
this.send_get_range_slices(keyspace, column_parent, predicate, range, consistency_level)
return this.recv_get_range_slices()
}

CassandraClient.prototype.send_get_range_slices = function(keyspace,column_parent,predicate,range,consistency_level){
this.output.writeMessageBegin('get_range_slices', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_range_slices_args()
args.keyspace = keyspace
args.column_parent = column_parent
args.predicate = predicate
args.range = range
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_range_slices = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_range_slices_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_range_slices failed: unknown result"
}
CassandraClient.prototype.insert = function(keyspace,key,column_path,value,timestamp,consistency_level){
this.send_insert(keyspace, key, column_path, value, timestamp, consistency_level)
this.recv_insert()
}

CassandraClient.prototype.send_insert = function(keyspace,key,column_path,value,timestamp,consistency_level){
this.output.writeMessageBegin('insert', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_insert_args()
args.keyspace = keyspace
args.key = key
args.column_path = column_path
args.value = value
args.timestamp = timestamp
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_insert = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_insert_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.batch_insert = function(keyspace,key,cfmap,consistency_level){
this.send_batch_insert(keyspace, key, cfmap, consistency_level)
this.recv_batch_insert()
}

CassandraClient.prototype.send_batch_insert = function(keyspace,key,cfmap,consistency_level){
this.output.writeMessageBegin('batch_insert', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_batch_insert_args()
args.keyspace = keyspace
args.key = key
args.cfmap = cfmap
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_batch_insert = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_batch_insert_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.remove = function(keyspace,key,column_path,timestamp,consistency_level){
this.send_remove(keyspace, key, column_path, timestamp, consistency_level)
this.recv_remove()
}

CassandraClient.prototype.send_remove = function(keyspace,key,column_path,timestamp,consistency_level){
this.output.writeMessageBegin('remove', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_remove_args()
args.keyspace = keyspace
args.key = key
args.column_path = column_path
args.timestamp = timestamp
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_remove = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_remove_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.batch_mutate = function(keyspace,mutation_map,consistency_level){
this.send_batch_mutate(keyspace, mutation_map, consistency_level)
this.recv_batch_mutate()
}

CassandraClient.prototype.send_batch_mutate = function(keyspace,mutation_map,consistency_level){
this.output.writeMessageBegin('batch_mutate', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_batch_mutate_args()
args.keyspace = keyspace
args.mutation_map = mutation_map
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_batch_mutate = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_batch_mutate_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.get_string_property = function(property){
this.send_get_string_property(property)
return this.recv_get_string_property()
}

CassandraClient.prototype.send_get_string_property = function(property){
this.output.writeMessageBegin('get_string_property', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_string_property_args()
args.property = property
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_string_property = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_string_property_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "get_string_property failed: unknown result"
}
CassandraClient.prototype.get_string_list_property = function(property){
this.send_get_string_list_property(property)
return this.recv_get_string_list_property()
}

CassandraClient.prototype.send_get_string_list_property = function(property){
this.output.writeMessageBegin('get_string_list_property', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_string_list_property_args()
args.property = property
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_string_list_property = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_string_list_property_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "get_string_list_property failed: unknown result"
}
CassandraClient.prototype.describe_keyspaces = function(){
this.send_describe_keyspaces()
return this.recv_describe_keyspaces()
}

CassandraClient.prototype.send_describe_keyspaces = function(){
this.output.writeMessageBegin('describe_keyspaces', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_keyspaces_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_keyspaces = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_keyspaces_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "describe_keyspaces failed: unknown result"
}
CassandraClient.prototype.describe_cluster_name = function(){
this.send_describe_cluster_name()
return this.recv_describe_cluster_name()
}

CassandraClient.prototype.send_describe_cluster_name = function(){
this.output.writeMessageBegin('describe_cluster_name', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_cluster_name_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_cluster_name = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_cluster_name_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "describe_cluster_name failed: unknown result"
}
CassandraClient.prototype.describe_version = function(){
this.send_describe_version()
return this.recv_describe_version()
}

CassandraClient.prototype.send_describe_version = function(){
this.output.writeMessageBegin('describe_version', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_version_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_version = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_version_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "describe_version failed: unknown result"
}
CassandraClient.prototype.describe_ring = function(keyspace){
this.send_describe_ring(keyspace)
return this.recv_describe_ring()
}

CassandraClient.prototype.send_describe_ring = function(keyspace){
this.output.writeMessageBegin('describe_ring', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_ring_args()
args.keyspace = keyspace
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_ring = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_ring_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
throw "describe_ring failed: unknown result"
}
CassandraClient.prototype.describe_partitioner = function(){
this.send_describe_partitioner()
return this.recv_describe_partitioner()
}

CassandraClient.prototype.send_describe_partitioner = function(){
this.output.writeMessageBegin('describe_partitioner', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_partitioner_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_partitioner = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_partitioner_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "describe_partitioner failed: unknown result"
}
CassandraClient.prototype.describe_keyspace = function(keyspace){
this.send_describe_keyspace(keyspace)
return this.recv_describe_keyspace()
}

CassandraClient.prototype.send_describe_keyspace = function(keyspace){
this.output.writeMessageBegin('describe_keyspace', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_keyspace_args()
args.keyspace = keyspace
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_keyspace = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_keyspace_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.nfe) {
  throw result.nfe
}
throw "describe_keyspace failed: unknown result"
}
CassandraClient.prototype.take_snapshot = function(table_name,snapshot_name){
this.send_take_snapshot(table_name, snapshot_name)
this.recv_take_snapshot()
}

CassandraClient.prototype.send_take_snapshot = function(table_name,snapshot_name){
this.output.writeMessageBegin('take_snapshot', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_take_snapshot_args()
args.table_name = table_name
args.snapshot_name = snapshot_name
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_take_snapshot = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_take_snapshot_result()
result.read(this.input)
this.input.readMessageEnd()

return
}
CassandraClient.prototype.force_table_clean = function(){
this.send_force_table_clean()
this.recv_force_table_clean()
}

CassandraClient.prototype.send_force_table_clean = function(){
this.output.writeMessageBegin('force_table_clean', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_force_table_clean_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_force_table_clean = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_force_table_clean_result()
result.read(this.input)
this.input.readMessageEnd()

return
}
CassandraClient.prototype.force_table_compaction = function(){
this.send_force_table_compaction()
this.recv_force_table_compaction()
}

CassandraClient.prototype.send_force_table_compaction = function(){
this.output.writeMessageBegin('force_table_compaction', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_force_table_compaction_args()
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_force_table_compaction = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_force_table_compaction_result()
result.read(this.input)
this.input.readMessageEnd()

return
}
CassandraClient.prototype.force_table_flush = function(table_name){
this.send_force_table_flush(table_name)
this.recv_force_table_flush()
}

CassandraClient.prototype.send_force_table_flush = function(table_name){
this.output.writeMessageBegin('force_table_flush', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_force_table_flush_args()
args.table_name = table_name
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_force_table_flush = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_force_table_flush_result()
result.read(this.input)
this.input.readMessageEnd()

return
}
CassandraClient.prototype.get_table_stats = function(table_name){
this.send_get_table_stats(table_name)
return this.recv_get_table_stats()
}

CassandraClient.prototype.send_get_table_stats = function(table_name){
this.output.writeMessageBegin('get_table_stats', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_table_stats_args()
args.table_name = table_name
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_table_stats = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_table_stats_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.nfe) {
  throw result.nfe
}
throw "get_table_stats failed: unknown result"
}
CassandraClient.prototype.describe_splits = function(start_token,end_token,keys_per_split){
this.send_describe_splits(start_token, end_token, keys_per_split)
return this.recv_describe_splits()
}

CassandraClient.prototype.send_describe_splits = function(start_token,end_token,keys_per_split){
this.output.writeMessageBegin('describe_splits', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_splits_args()
args.start_token = start_token
args.end_token = end_token
args.keys_per_split = keys_per_split
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_splits = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_splits_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "describe_splits failed: unknown result"
}
