var mongoose = require('mongoose')
var company = require('./models/company');
var customer = require('./models/Customer');
var news = require('./models/news');
var parameters = require('./parameters')



// ============================================================================
// Stock Market ===============================================================
// ============================================================================

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
		customer.findById(req.user._id, function(err, Customer) {
            
            if (err){
                console.log(err);
                res.send("unable to fetch customer from request");
            }else {
                //Acccount Balance of the user
                var accountBalance = Customer.accountBalance
                // compDetails.push(accountBal);

                //Maximum quantity customer can buy
                var buyMax = Math.min(Math.floor(Customer.accountBalance / compDetails.stockPrice),compDetails.availableQuantity);
                // compDetails.push(buyMax);

                
                var stocksHeld = 0;
                for(var i = 0; i < Customer.stockHoldings.length; i++)
                {
                    if(Customer.stockHoldings[i].company === compDetails._id)
                    {
                        return stocksHeld = Customer.stockHoldings[i].quantity;
                    }else {
                        return stocksHeld = 0;
                    }
                }
                var sellMax = stocksHeld;
                // compDetails.push(sellMax);

                var stocksShorted = 0;
                for(var i = 0; i < Customer.stockShorted.length; i++)
                {
                    if(Customer.stockShorted[i].company === compDetails._id)
                    {
                        return stocksShorted = Customer.stockShorted[i].quantity;
                    }else {
                        return stocksShorted = 0;
                    }
                }

                var shortMax =  parameters.shortMax - stocksShorted;
                // compDetails.push(shortMax);

                var coverMax = Math.min(stocksShorted, Math.floor(Customer.accountBalance / compDetails.stockPrice));
                // compDetails.push(coverMax);

                // console.log(compDetails,accountBal, buyMax, sellMax, shortMax , coverMax);
                res.json({compDetails,accountBalance, buyMax, sellMax, shortMax , coverMax});
            }
        });
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



// ============================================================================
// Customer ===================================================================
// ============================================================================


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


exports.buy = function(req, res){

}

exports.sell = function(req, res){

}

exports.short = function(req, res){

}

exports.cover = function(req, res){

}