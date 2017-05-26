// load the things we need
var mongoose = require('mongoose');
var parameters = require('../parameters');
var company = require('./company');

// define the schema for our user model
var customerSchema = mongoose.Schema({
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    accountBalance : {type: Number, Default: parameters.accountBalance },
    ban : {type: Boolean, Default : false},
    activity : [{
        company : {type: mongoose.Schema.Types.ObjectId, ref: 'company' }
    }]

});

// create the model for users and expose it to our app
module.exports = mongoose.model('customer', customerSchema);