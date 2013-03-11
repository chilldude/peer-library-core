var passport = require('passport')
  , models = require('../schemas/models')
  , bcrypt = require('bcrypt')
  , LocalStrategy = require('passport-local').Strategy;

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
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  models.User.findById(id, function(err, user) {
    done(err, user);
  });
});