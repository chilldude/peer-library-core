//login
exports.login = function(req, res){
	res.render('login', { title: 'Peer Library' });
};

//register
exports.register = function(req, res) {
	res.render('register', { title: 'Peer Library Registration'});
};