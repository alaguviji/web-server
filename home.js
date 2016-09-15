var express = require('express');
var app = express ();

var middleware = {
  requireAuthentication: function(req, res, next){
    console.log('Successfully Authenticated');
    next();
  },
  logger: function(req, res, next){
    console.log(req.method +" "+ req.originalUrl+" " + new Date());
    next();
  }
};


app.listen(3000);

app.use(middleware.logger);
app.use(express.static(__dirname+'/public'));

app.get('/about', middleware.requireAuthentication, function(req, res){
  res.send('About us!!');
})
