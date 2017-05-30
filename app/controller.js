var mongoose = require('mongoose')
var company = require('./models/company');
var customer = require('./models/Customer');
var news = require('./models/news');

exports.companyList = function(req, res) {
  company.find({}, function(err, companies) {
    if (err){
		console.log(err);
		res.send("unable to fetch company list");
	}else {
		var accountBal = {'accountBalance' : req.user.accountBalance}
		companies.push(accountBal);
		res.json(companies);
	}
  });
};


exports.companyDetails = function(req, res) {
  company.findById(req.params.id, function(err, compDetails) {
    if (err){
		console.log(err);
		res.send("unable to fetch company details");
	}else {
		res.json(compDetails);
	}
  });
};

exports.newsList = function(req, res) {
  news.find({}, function(err, newslist) {
    if (err){
		console.log(err);
		res.send("unable to fetch company list");
	}else {
		res.json(newslist);
	}
  });
};


exports.newsDetails = function(req, res) {
  news.findById(req.params.id, function(err, newsdetail) {
    if (err){
		console.log(err);
		res.send("unable to fetch company details");
	}else {
		res.json(newsdetail);
	}
  });
};

exports.customerDetail = function(req, res) {
  customer.findById(req.user._id, function(err, customerdetail) {
    if (err){
		console.log(err);
		res.send("unable to fetch customer details");
	}else {
		res.json(customerdetail);
	}
  });
};

exports.customerList = function(req, res) {
  customer.find({}, function(err, customerlist) {
    if (err){
		console.log(err);
		res.send("unable to fetch company list");
	}else {
		res.json(customerlist);
	}
  });
};
