/*
	Handles the following functionalities:
	1. Sign-up
	2. Login
	3. Display Form Error

	http://fabianosoriani.wordpress.com/2012/03/06/basic-authentication-on-node-js-express-and-mongoose/
*/

//Load the class "authenticate" from "helpers" directory
var authenticate = require('../helpers/authenticate'),
	auth = new authenticate();

module.exports = function (app) {
	//Sign-Up activities
	app.post('/auth/signup', function (req, res, next) {
		auth.signUp(req, res, next);
	});

	//Login activities
	app.post('/auth/login', function (req, res, next) {
		 auth.login(req,res,next);
	});
};