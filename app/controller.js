var mongoose = require('mongoose')
var company = require('./models/company');
var customer = require('./models/Customer');
var news = require('./models/news');

exports.companyList = function(req, res) {
		try{
			if(req.headers.authorization === req.user.facebook.token || true){
				company.find({}, function(err, companies) {
					if (err){
						console.log(err);
						res.send("unable to fetch company list");
					} else{
						try{
						// console.log(req.headers.authorization);
						// console.log(req.user.accountBalance);
						var accountBal = {'accountBalance' : req.user.accountBalance}
						companies.push(accountBal);
						console.log('success')
					}catch (err) {
						console.log(err);
						var accountBal = {'accountBalance' : 'error bro'}
						companies.push(accountBal);
					}
					// if (req.user.facebook.token = )
					res.json(companies);
				}
			});
		}else {
			console.log('user unauthenticated');
		}
	} catch(err) {
		console.log(err);
		res.json('unable to fetch user from request');
	}
};


exports.companyDetails = function(req, res) {
	try{
		if(req.headers.authorization === req.user.facebook.token || true){
			  company.findById(req.params.id, function(err, compDetails) {
				if (err){
					console.log(err);
					res.send("unable to fetch company details");
				}
				res.json(compDetails);
			});
		}else {
			console.log('user unauthenticated');
		}

	}catch(err){
		console.log(err);
		res.json('unable to fetch user from request');
	}
};

exports.newsList = function(req, res) {
	try{
		if(req.headers.authorization === req.user.facebook.token || true){
			  news.find({}, function(err, newslist) {
				if (err){
					console.log(err);
					res.send("unable to fetch news list");
				}
				res.json(newslist);
			});
		}else {
			console.log('user unauthenticated');
		}

	}catch(err){
		console.log(err);
		res.json('unable to fetch user from request');
	}
};


exports.newsDetails = function(req, res) {

	try{
		if(req.headers.authorization === req.user.facebook.token || true){
			  news.findById(req.params.id, function(err, newsdetail) {
				if (err){
					console.log(err);
					res.send("unable to fetch news details");
				}
				res.json(newsdetail);
			});
		}else {
			console.log('user unauthenticated');
		}

	}catch(err){
		console.log(err);
		res.json('unable to fetch user from request ' + req.headers.authorization);
	}
};

