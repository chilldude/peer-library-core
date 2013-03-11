var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define Comment schema
	var CommentSchema = new Schema({
		author: { type: ObjectId, ref: 'User' },
		text: String,
		timestamp: Date,
		parent: { type: ObjectId, ref: 'Comment' },
		children: [{ type: ObjectId, ref: 'Comment' }],
		votes: [{ type: ObjectId, ref: 'User' }]
	});
	return mongoose.model('Comment', CommentSchema);
}