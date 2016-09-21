var express = require('express');
var app = express();


app.listen(3001);

app.get('/customers', function(req,res){
  customer ={
    firstname: 'Vijay',
    lastname: 'Alagarasan',
    emailaddress: 'Vijay.Alagarasan@asurion.com'
  }
  res.send(JSON.stringify(customer));
});

app.get('/accounts', function(req,res){
  account ={
    name: 'Facebook',
    username: 'alaguviji@gmail.com'
  }

  res.send(JSON.stringify(account));

});


console.log("Webserver Started");
