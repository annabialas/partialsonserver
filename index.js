var express = require('express');
var hbs = require('express-handlebars');

var app = express();

var portNum = 8080;

app.set('port', portNum);

// tell express to use handlebars

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('index');
});

// start server

app.listen(portNum, function() {
	console.log('listening on port', portNum);
});