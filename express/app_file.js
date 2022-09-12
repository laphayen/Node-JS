var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'jade');
app.get('/topic/new', function(req, res){
  res.render('new');
});
app.post('/topic', function(req, res){
  res.send('HI, port, '+req.body.title);
});
app.listen(3000, function(){
  console.log('Conneted, 3000 port');
});
