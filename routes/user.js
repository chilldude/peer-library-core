var models = require('../schemas/models');

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.profile = function(req, res){
  models.User.findById(req.user._id).populate('institution').exec(function (err, user) {
    res.render('profile', {
      title: 'Peer Library',
      name: user.name_first + ' ' + user.name_last,
      title: user.title,
      institution: user.institution.name
    });
  });
};
