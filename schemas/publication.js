var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define Publication schema
	var PublicationSchema = new Schema({
		title: String,
		authors: [{author: String, user: ObjectId}],
		year: Number,
		journal: ObjectId,
		issue: Number,
		volume: Number,
		pages: {start: Number, end: Number},
		abstract: String,
		tags: {keywords: [String], fields: [String]},
		full_text: {local: String, remote: String},
		score: {raw: Number, display: Number},
		citations: {incoming: [ObjectId], outgoing: [ObjectId]},
		comments: [ObjectId],
		reviews: [ObjectId]
	});
	return mongoose.model('Publication', PublicationSchema);
}