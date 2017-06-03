// load the things we need
var mongoose = require('mongoose');
var parameters = require('../parameters')

// define the schema for our company model
var companySchema = mongoose.Schema({

	name: {type: String, unique: true, required: true},

	symbol : {type: String, unique: true, required: true},

	description : String,

	stockPrice : {type: Number, default: 0, min : 0.0, required: true},

	availableQuantity : {type: Number, default: 0, min : 0.0, max: parameters.maxNumberOfShares, required: true},

	totalQuantity : {type: Number, default: 0, min : 0.0, max: parameters.maxNumberOfShares, required: true},

	annualGrowthRate: Number,

	marketCap : Number,
	
	history : [{
        timeStamp : {type: Date, default: Date.now},
		stockPrice : {type: Number, default: 0, min : 0.0},
		availableQuantity : {type: Number, default: 0, min : 0.0, max: parameters.maxNumberOfShares},
	}],

	complementaryCompany : [{
		company : mongoose.Schema.Types.ObjectId,
		factor : {type: Number, min: 0.0, default: 0.0},
	}],

	supplementaryCompany : [{
		company : mongoose.Schema.Types.ObjectId,
		factor : {type: Number, min: 0.0, default: 0.0},
	}]

});


// create the model for company and expose it to our app
module.exports = mongoose.model('Company', companySchema);
