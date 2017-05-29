var mongoose = require('mongoose')
var company = require('./models/company');
var customer = require('./models/Customer');
var news = require('./models/news');

exports.companyList = function(req, res, authToken) {
  company.find({}, function(err, companies) {
    if (err){
		console.log(err);
		res.send("unable to fetch company list");
	}
	console.log(req.headers.authorization);
	console.log(req.user);
	// if (req.user.facebook.token = )
    res.json(companies);
  });
};


exports.companyDetails = function(req, res) {
  company.findById(req.params.id, function(err, compDetails) {
    if (err){
		console.log(err);
		res.send("unable to fetch company details");
	}
    res.json(compDetails);
  });
};

exports.newsList = function(req, res) {
  news.find({}, function(err, newslist) {
    if (err){
		console.log(err);
		res.send("unable to fetch company list");
	}
    res.json(newslist);
  });
};


exports.newsDetails = function(req, res) {
  news.findById(req.params.id, function(err, newsdetail) {
    if (err){
		console.log(err);
		res.send("unable to fetch company details");
	}
    res.json(newsdetail);
  });
};