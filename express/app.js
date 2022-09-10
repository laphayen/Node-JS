var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// jade html코드 간단히
app.locals.pretty = true;
// jade 템플릿 사용
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/form', function(req, res){
	res.render('form');
});
app.get('/form_receiver', function(req, res){
	// res.send('hello, GET');
	// var title = req.query.title;
	// var description = req.query.description;
	// res.send(title+','+description);
});
app.post('/form_receiver', function(req, res){
	// res.send('hello, POST');
	var title = req.body.title;
	var description = req.body.description;
	res.send(title+','+description);
});
app.get('/topic/:id', function(req, res){
var topics = [
		'javascript1',
		'node2',
		'js3'
	];
	var output = `
	<a href="/topic?id=0">javascript</a><br>
	<a href="/topic?id=1">node</a><br>
	<a href="/topic?id=2">express</a><br>
	${topics[req.params.id]}
	`
	res.send(output);
});
app.get('/topic/:id/:mode', function(req, res){
	res.send(req.params.id+','+req.params.mode);
});
app.get('/');
app.get('/template', function(req, res){
	res.render('temp', {time:Date(), _title:'Jade'});
});
app.get('/', function(req, res){
	res.send('Hello Home Page');
});
app.get('/dynamic', function(req, res){
	var lis = '';
	for(var i = 0; i<5; i++){
		lis = lis + '<li>coding</li>';
	}
	var time = Date();
	var output = `
		!DOCTYPE html>
		<html lang="en" dir="ltr">
	  <head>
	    <meta charset="utf-8">
	    <title></title>
	  </head>
	  <body>
	    <<p>Hello, dynamic!</p>
			<ul>
				${lis}
			</ul>
				${time}
	  </body>
		</html>`;
	res.send(output);
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
