//Load the class "validation" class for form fields validation
var validation = require('./validation');

//Define private variables
var _self;

//Define authentication Class
function authenticate () {
	_self = this;
	_self.validate = new validation();
}

var authenticator = authenticate.prototype;

/*
	Submit button is clicked, data to be inserted in DB. A new user will be created and will be redirected to
	it's profile page.
*/
authenticator.signUp = function (req, res, next) {

};

/*
	Login Validation work - First it will be checked against db, if found it will be redirected to that specific page,
	else error message will be displayed.
*/
authenticator.login = function (req, res, next) {
	//if success redirect to the profile page
	res.redirect('/users/pulak');
};


module.exports = authenticate;