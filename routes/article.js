exports.details = function(req, res){
  res.render('article', { title: 'Peer Library' });
};

exports.results = function(req, res){
  res.render('results', { title: 'Peer Library' });
};
