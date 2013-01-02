/*
	Handles the following functionalities:
	1. Sign-up
	2. Login
	3. Display Form Error

	http://fabianosoriani.wordpress.com/2012/03/06/basic-authentication-on-node-js-express-and-mongoose/
*/

//Load the class "authenticate" from "helpers" directory
var authenticate = require('../helpers/authenticate');
var _self;

var authentication = module.exports = function authentication(){
	_self = this;
	_self.auth = new authenticate();
};
 
authentication.prototype = { 
	init: function(app){
		//Sign-Up activities
		app.post('/auth/signup', _self.auth.signup);

		//Login activities
		app.post('/auth/login', _self.auth.login);
	}
};