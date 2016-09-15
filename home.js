var express = require('express');
var app = express ();

var middleware = require('./middleware.js');

app.listen(3000);

app.use(middleware.logger);
app.use(express.static(__dirname+'/public'));

app.get('/about', middleware.requireAuthentication, function(req, res){
  res.send('About us!!');
})
