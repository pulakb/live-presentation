//import express framework
var express = require('express');

//import the passport module
var passport = require('passport');

//create application instance
var app = module.exports = express();

//set up middleware
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('my secret string'));
  app.use(express.session({
    secret: 'my secret string',
    maxAge: 3600000
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/presentations'));
 });

//Error handler for development & product
app.configure('development', function () {
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function () {
  app.use(express.errorHandler());
});

/*
  set the routes & pass the application instance.
*/
require('./routes/index')(app);

var users = require('./routes/users');
var uObj = new users();
uObj.init(app);

var authentication = require('./routes/authentication');
var auObj = new authentication();
auObj.init(app);

var presentations = require('./routes/presentations');
var preObj = new presentations();
preObj.init(app);

//Bind & listen for a connection
app.listen(3000, function(){
  console.log("Express server listening on port 3000");
});