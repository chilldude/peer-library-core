/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , article = require('./routes/article')
  , auth = require('./routes/auth')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
	, mongoose = require('mongoose');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
	app.use(passport.initialize());
	app.use(passport.session());
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//database declarations
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

require('./schemas/user.js').make(Schema, mongoose);
require('./schemas/institution.js').make(Schema, mongoose);
require('./schemas/publication.js').make(Schema, mongoose);
require('./schemas/journal.js').make(Schema, mongoose);
require('./schemas/review.js').make(Schema, mongoose);
require('./schemas/comment.js').make(Schema, mongoose);

//authentication
passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	},
	function(username, password, done) {
		user.findOne({ username: username }, function(err, user) {
			if (err) { return done(err); }
			if (!user || !user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect email/password combination' });
			}
			return done(null, user);
		});
	}
));

//configure routes
app.get('/', routes.index);
app.get('/login', auth.login);
app.get('/register', auth.register);
app.get('/profile', user.profile);
app.get('/article', article.details);
app.get('/search', article.results);
app.get('/users', user.list);

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
