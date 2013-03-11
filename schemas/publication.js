var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define Publication schema
	var PublicationSchema = new Schema({
		title: String,
		authors: [{author: String, user: { type: ObjectId, ref: 'User' }}],
		year: Number,
		journal: { type: ObjectId, ref: 'Journal' },
		issue: Number,
		volume: Number,
		pages: {start: Number, end: Number},
		abstract: String,
		tags: {keywords: [String], fields: [String]},
		full_text: {local: String, remote: String},
		score: {raw: Number, display: Number},
		citations: {incoming: [{ type: ObjectId, ref: 'Publication' }], outgoing: [{ type: ObjectId, ref: 'Publication' }]},
		comments: [{ type: ObjectId, ref: 'Comment' }],
		reviews: [{ type: ObjectId, ref: 'Review' }]
	});
	return mongoose.model('Publication', PublicationSchema);
}