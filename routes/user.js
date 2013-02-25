/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.profile = function(req, res){
  res.render('profile', {'title': 'Peer Library'});
};