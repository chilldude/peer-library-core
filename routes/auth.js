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
    emails: [{email: req.body.email, verification_key: 1337, verified: false}],
    first_name: req.body.name_first,
    last_name: req.body.name_last,
    password: req.body.password
  });

  user.save(function (err) {
    if (err) res.render('index', { title: 'Peer Library' });
    res.render('profile', {'title': 'Peer Library'});
  });
};