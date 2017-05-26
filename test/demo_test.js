var mocha  = require('mocha');
var assert = require('assert');
var User   = require('../app/models/user');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');

mongoose.Promise = global.Promise;

//connect to db before test
before(function(done){
    mongoose.connect(configDB.url , function(err){
    if(err) {
        console.log('Unable to connect to DB ' + err);
    }
    else {
		console.log('Connection to DB successful')
		setTimeout(done, 200);
	}
    }); // connect to our database
});

//describes test
describe('Saving records', function(){

	//create test
	it('saving a record to the database', function(){

		var test_user = new User({
			facebook : {
				name : 'bro'
			}

		 });

		test_user.save().then(function(done){
			asser(test_user.isNew === false);
			setTimeout(done, 200);
			// done();
		});
	});
});

// //drop 	the characters collection before each test

// beforeEach(function(done){
// 	//Drop teh collection
// 	mongoose.connection.collections['Users'].drop(function(){
// 		console.log('droped');
// 		setTimeout(done, 200);
// 	});

// });