var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define Institution schema
	var InstitutionSchema = new Schema({
		name: String,
		domain: String
	});
	return mongoose.model('Institution', InstitutionSchema);
}