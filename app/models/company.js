// load the things we need
var mongoose = require('mongoose');
var parameters = require('../parameters')

// define the schema for our company model
var companySchema = mongoose.Schema({

});


// create the model for company and expose it to our app
module.exports = mongoose.model('company', companySchema);
