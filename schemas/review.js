var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define Review schema
	var ReviewSchema = new Schema({
		author: ObjectId,
		text: String,
		timestamp: Date
	});
	mongoose.model('Review', ReviewSchema);
}