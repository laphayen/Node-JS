var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res){
	res.send('Hello Home Page');
});
app.get('/route', function(req, res){
	res.send('Hello Router, <img src="route.jpg">')
});
app.get('/login', function(req, res){
	res.send('<h1>Login Please</h1>');
});
app.listen(3000, function(){
	console.log('Conneted 3000 port!');
});
