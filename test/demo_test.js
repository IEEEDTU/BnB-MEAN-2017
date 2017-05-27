var mocha  = require('mocha');
var assert = require('assert');
var mongoose = require('mongoose');
var configDB = require('../config/database.js');

var Customer   = require('../app/models/Customer');
var Company   = require('../app/models/company');
var News   = require('../app/models/news');

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
describe('Saving data', function(){

	//create test
	it('saving a company to the database', function(){

		var test_company = new Company({
			name : 'IOCL',
			symbol : 'IOCL',
			description : 'oil India',

			stockPrice : 500,

			availableQuantity : 200,

			totalQuantity : 800,

			annualGrowthRate: 2,

			marketCap : 5,



		 });

		test_company.save().then(function(done){
			asser(test_user.isNew === false);
			setTimeout(done, 200);
			// done();
		});
	});

	it('saving a news to the database', function(){

		var test_news= new News({
			newsText: 'Flipkart sold Myntra',

			youtubeSrc : 'no',

			isPublished : false,

			publishedOn : Date.now()


		 });

		test_news.save().then(function(done){
			assert(test_user.isNew === false);
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