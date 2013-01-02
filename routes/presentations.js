/*
	Routes for handling all presentation activities:
		1. Listing
		2. Displaying specific presentation
		3. Add new presentation
		4. Modify presentation
		5. Delete a presentation
*/
var presentations = module.exports = function presentations(){};
 
presentations.prototype = { 
	init: function(app){
		app.get('/presentations', function (req, res) {
			res.render('presentations/index');
		});
	}
};