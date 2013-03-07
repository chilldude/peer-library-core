var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define Comment schema
	var CommentSchema = new Schema({
		author: ObjectId,
		text: String,
		timestamp: Date,
		parent: ObjectId,
		children: [ObjectId],
		votes: [ObjectId]
	});
	return mongoose.model('Comment', CommentSchema);
}