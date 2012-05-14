/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var thrift = require('thrift');

var UserStorage = require('./gen-nodejs/UserStorage.js'),
    ttypes = require('./gen-nodejs/user_types');

var users = {};

var server = thrift.createServer(UserStorage, {
  store: function(user, response) {
	setTimeout(function(){//simulate latency
		/* 
		 * this is good for debugging. if a callback throws an error, it 
		 * cant be caught if there's latency. that's also why we need to return the 
		 * errors via parameters and not just throw them and expect they'll make 
		 * their way back up the call stack)
		 */
		console.log("server stored:", user.uid);
	    users[user.uid] = user;
	    response(null,null,function(err){
	      if(err) {
			//you can test this by killing the client before the server responds
            console.log("looks like we got a connection error");
			return console.error(err);
          }
	      console.log('server.store() done!');
	    });
	},2000);
  },

  retrieve: function(uid, response) {
    console.log("server retrieved:", uid);
	setTimeout(function(){
		response(null,users[uid]);
	},2000);
  },
});

server.listen(9090);
