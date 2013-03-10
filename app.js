/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , article = require('./routes/article')
  , auth = require('./routes/auth')
  , models = require('./schemas/models')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , bcrypt = require('bcrypt');

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

//configure routes
app.get('/', routes.index);
app.get('/login', auth.login);
app.get('/register', auth.register);
app.post('/registerHandler', auth.registerHandler);
app.get('/profile', user.profile);
app.get('/article', article.details);
app.get('/search', article.results);
app.get('/users', user.list);

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// Authentication
passport.use(new LocalStrategy(
	function(username, password, done) {
    console.log('dope');
		models.User.findOne({ email: username }, function (err, user) {
			if (!user || !bcrypt.compareSync(password, user.password)) {
				console.log('fail');
				return done(null, false, { message: 'Incorrect email/password combination.' });
			}
			console.log('success');
			return done(null, user);
		});
	}
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
