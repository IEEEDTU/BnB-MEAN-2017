// load the things we need
var mongoose = require('mongoose');
var parameters = require('../parameters');
var Company = require('./company');

// define the schema for our news model
var newsSchema = mongoose.Schema({
	newsText: {type: String, required: true},
	youtubeSrc : String,
	isPublished : {type: Boolean, default: false, required: true},
	publishedOn : Date,
	newsImpact : [{
		company : {type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
		impact : Number,
		iterationsRun : Number 
	}] 
    
});

// create the model for news and expose it to our app
module.exports = mongoose.model('news', newsSchema);