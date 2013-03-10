var models = require('../schemas/models');

//login
exports.login = function(req, res){
  res.render('login', { title: 'Peer Library' });
};

//register
exports.register = function(req, res) {
  res.render('register', { title: 'Peer Library Registration'});
};

exports.registerHandler = function(req, res){
  var user = new models.User({
    email: req.body.email,
    name_first: req.body.name_first,
    name_last: req.body.name_last,
    password: req.body.password,
		email_verfication_key: 6969,
		email_verified: false
  });

  user.save(function (err) {
    if (err) res.render('index', { title: 'Peer Library' });
    res.render('profile', {'title': 'Peer Library'});
  });
};