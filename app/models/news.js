// load the things we need
var mongoose = require('mongoose');
var parameters = require('../parameters');
var company = require('./company');

// define the schema for our news model
var newsSchema = mongoose.Schema({
    
});

// create the model for news and expose it to our app
module.exports = mongoose.model('news', newsSchema);