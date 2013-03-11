var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define Review schema
	var ReviewSchema = new Schema({
		author: { type: ObjectId, ref: 'User' },
		text: String,
		timestamp: Date
	});
	return mongoose.model('Review', ReviewSchema);
}