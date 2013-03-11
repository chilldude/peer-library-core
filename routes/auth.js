var models = require('../schemas/models');
var bcrypt = require('bcrypt');
var auth = require('../modules/auth')

//login
exports.login = function(req, res){
  res.render('login', { title: 'Peer Library - Log in' });
};

//register
exports.register = function(req, res) {
  res.render('register', { title: 'Peer Library Registration'});
};

exports.registerHandler = function(req, res){
  var salt = bcrypt.genSaltSync(10);
  var user = new models.User({
    email: req.body.email,
    name_first: req.body.name_first,
    name_last: req.body.name_last,
    password: bcrypt.hashSync(req.body.password, salt),
    salt: salt,
		email_verfication_key: 6969,
		email_verified: false
  });

  user.save(function (err) {
    if (err) res.redirect('/register');
    res.redirect('/');
  });
};