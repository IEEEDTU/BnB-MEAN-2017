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
                    if(Customer.stockHoldings[i].company.toString() === compDetails._id.toString())
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
                    if(Customer.stockShorted[i].company.toString() === compDetails._id.toString())
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
		res.send("unable to fetch news list");
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
    company.findById(req.params.id, function(err, Company) {
    if (err){
		console.log(err);
		res.send("unable to fetch company");
	}else {
        customer
        .findById(req.user._id)
        .populate('stockHoldings.company')
        // .populate('activity.company')
        .exec(function(err, Customer){
            // console.log(Customer);
            if(err){
                console.log(err);
                res.send('unable to fetch user')
            }
            quantity = req.body.quantity;
            if(quantity === null || undefined){
              res.json({'success':false});
            }
            if (0 < quantity  && quantity <= Math.min(Math.floor(Customer.accountBalance / Company.stockPrice),Company.availableQuantity)){
                var found = false;
                for(var i = 0; i < Customer.stockHoldings.length; i++){
                    if(Customer.stockHoldings[i].company._id.toString() === Company._id.toString()){
                      Customer.stockHoldings[i].quantity += quantity;
                      found = true;
                    }
                }
                if (!found){
                    Customer.stockHoldings.push({
                        'company' : mongoose.Types.ObjectId(Company._id.toString()),
                        'quantity' : quantity

                    });                   
                }

                Customer.accountBalance -= Company.stockPrice*quantity;
                Company.availableQuantity -= quantity;
                Customer.activity.push({
                    'company' : mongoose.Types.ObjectId(Company._id.toString()),
                    'timeStamp' : Date.now(),
                    'action' : 'BUY',
                    'quantity' : quantity,
                    'price' : Company.stockPrice

                });
                // Customer.populate('stockHoldings.company').populate('history.company')
                Customer.save();
                Company.save();
                // console.log(Customer)
              res.json({'success':true}); 
            }else{
                res.json({'success':false});
            }
            
        })
	}
  });
}

exports.sell = function(req, res){
    company.findById(req.params.id, function(err, Company) {
    if (err){
		console.log(err);
		res.send("unable to fetch company");
	}else {
        customer
        .findById(req.user._id)
        .populate('stockHoldings.company')
        // .populate('activity.company')
        .exec(function(err, Customer){
            // console.log(Customer);
            if(err){
                console.log(err);
                res.send('unable to fetch user')
            }
            quantity = req.body.quantity;
            if(quantity === null || undefined){
              res.json({'success':false});
            }
            var index = Customer.stockHoldings.findIndex((item) => item.company._id.toString() === Company._id.toString());
            console.log(index);
            var stocksHeld = 0;
            var index = null;
            for(var i = 0; i < Customer.stockHoldings.length; i++){
                if(Customer.stockHoldings[i].company._id.toString() === Company._id.toString()){
                    stocksHeld = Customer.stockHoldings[i].quantity;
                    index = i;
                }
            }
            console.log(index);
            if (0 < quantity  && quantity <= stocksHeld){
                Customer.stockHoldings[index].quantity -= quantity;
                Customer.accountBalance += Company.stockPrice*quantity;
                Company.availableQuantity += quantity;
                Customer.activity.push({
                    'company' : mongoose.Types.ObjectId(Company._id.toString()),
                    'timeStamp' : Date.now(),
                    'action' : 'SELL',
                    'quantity' : quantity,
                    'price' : Company.stockPrice

                });
                // Customer.populate('stockHoldings.company').populate('history.company')
                Customer.save();
                Company.save();
                // console.log(Customer)
              res.json({'success':true}); 
            }else{
                res.json({'success':false});
            }
            
        })
	}
  });
}


exports.short = function(req, res){
    company.findById(req.params.id, function(err, Company) {
    if (err){
		console.log(err);
		res.send("unable to fetch company");
	}else {
        customer
        .findById(req.user._id)
        // .populate('stockShorted.company')
        // .populate('activity.company')
        .exec(function(err, Customer){
            // console.log(Customer);
            if(err){
                console.log(err);
                res.send('unable to fetch user')
            }
            quantity = req.body.quantity;
            if(quantity === null || undefined){
              res.json({'success':false});
            }
            var stocksShorted = 0;
            var index = Customer.stockShorted.findIndex((item) => item.company.toString() === compDetails._id.toString());
            // for(var i = 0; i < Customer.stockShorted.length; i++)
            // {
            //     if(Customer.stockShorted[i].company.toString() === compDetails._id.toString())
            //     {
            //         return stocksShorted = Customer.stockShorted[i].quantity;
            //     }else {
            //         return stocksShorted = 0;
            //     }
            // }

            // var shortMax =  parameters.shortMax - stocksShorted;
            res.json({'success':true}); 
        })
	}
  });
}

exports.cover = function(req, res){

}