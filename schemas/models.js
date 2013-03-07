var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/pldb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  module.exports.User = require('./user.js').make(Schema, mongoose);
  module.exports.Institution = require('./institution.js').make(Schema, mongoose);
  module.exports.Publication = require('./publication.js').make(Schema, mongoose);
  module.exports.Journal = require('./journal.js').make(Schema, mongoose);
  module.exports.Review = require('./review.js').make(Schema, mongoose);
  module.exports.Comment = require('./comment.js').make(Schema, mongoose);
  console.log('Connected to MongoDB');
});
