/*
	Routes for handling all user activities:
		1. Listing
		2. Displaying specific user profile
		3. Add new user
		4. Modify user details
		5. Delete User
*/

//Load the JSON data (Can be fetched from db)
var user_data = require('../data/users.json');

var users = module.exports = function users(){};
 
users.prototype = {
 
	init: function(app){	
		//Lists all the users
		app.get('/users', function (req, res) {
			res.render('users/index');
		});

		//A specific user profile
		app.get('/users/:name', function (req, res, next) {
			/*
				Get the user details from the db and pass those data to the template. If user
				does not exist, the control is passed back to the middleware engine, which in 
				this case will render a "Not found" message.
			*/

			var user_obj = user_data[req.params.name];
						
			if (user_obj) {
				res.render('users/profile', {title: 'User Profile', user_first_name: user_obj.name});			
			} else {
				next();
			}
		});

		//Create a new user by presenting a form with a sbmit button
		app.get('/users/new', function (req, res) {
			res.render('users/new', {title: 'New User'});
		});
		
		/*
			Delete a user. Only users with Admin rights can delete a user. It will be soft delete, not
			physical delete from DB. He will be deactivated in the system.
		*/
		app.del('/users/:name', function (req, res, next) {
			/*
				Check the user from DB first, if exists, delete it.
			*/
			if (users[req.params.name]) {
				delete users[req.params.name];
				res.redirect('/users');
			} else {
				next();
			}
		});	
	}	
};