// load the things we need
var mongoose = require('mongoose');
var parameters = require('../parameters');
var Company = require('./company');

// define the schema for our user model
var customerSchema = mongoose.Schema({

    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },

    accountBalance : {type: Number, default: 0.0, min: 0.0, required: true },

    ban : {type: Boolean, Default : false, required: true},

    activity : [{
        company : {type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        timeStamp : {type: Date, default: Date.now},
        action : String,
        quantity : {type: Number, default: 0, min : 0.0},
        price : {type: Number, min : 0.0},
    }],

    stockHoldings : [{
        company : {type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        quantity : {type: Number, default: 0, min : 0.0},
    }],

    stockShorted : [{
        company : {type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        quantity : {type: Number, default: 0, min : 0.0},
    }],

    loan : [{
        taken : {type: Boolean, default: false},
        amount : {type: Number, min: 0.0, max: parameters.loanAmount},
        takeOutTime : Date,
        repayTime : Date
    }]


});

// create the model for users and expose it to our app
module.exports = mongoose.model('customer', customerSchema);