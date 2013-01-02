/*
	Session Routes
*/
//User details will come from DB
var users = require('../data/users');

module.exports = function (app) {
	app.dynamicHelpers({
		session: function (req, res) {
			return req.session;
		}
	});

	//Presents the login form - present in views/login/index.ejs
	app.get('/login', function (req, res) {
		res.render('login/', {title: "Log in"});
	});

	/*
		When a user tries to view a presentation, first it's session will be checked, if not present,
		he will be redirected to the login form, using the above route.
	*/
	app.post('/session', function (req, res) {
		if (users[req.body.username] &&
			users[req.bosdy.username].password === req.body.password) {
			req.session.user = users[req.body.username];
			res.redirect('/users');
		} else {
			res.redirect('/login');
		}
	});

	app.del('/session', function (req, res, next) {
		req.session.destroy();
		res.redirect('/users');
	});
};