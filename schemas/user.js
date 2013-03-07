var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define User schema
	var UserSchema = new Schema({
		user_id: Number,
		password: String,
		salt: String,
		emails: [{email: String, verification_key: Number, verified: Boolean}],
		publications: [ObjectId],
		first_name: String,
		middle_name: String,
		last_name: String,
		affiliations: [{title: String, institution: ObjectId}],
		last_seen: Date,
		created_at: Date,
		new: Boolean,
		score: {raw: Number, display: Number}
	});
	mongoose.model('User', UserSchema);
}