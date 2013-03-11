var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define User schema
	var UserSchema = new Schema({
		user_id: Number,
		email: String,
		password: String,
		salt: String,
		publications: [{ type: ObjectId, ref: 'Publication' }],
		name_first: String,
		name_middle: String,
		name_last: String,
		title: String,
		institution: { type: ObjectId, ref: 'Institution' },
		last_seen: Date,
		created_at: Date,
		email_verified: Boolean,
		email_verification_key: String,
		new: Boolean,
		score: {raw: Number, display: Number}
	});
	return mongoose.model('User', UserSchema);
}