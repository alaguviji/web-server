var express = require('express');
var app =express();
app.listen(3000);
var _ = require('underscore');
var bodyparser = require('body-parser');
var customerinit = 1;
app.use(bodyparser.json());
var customers =[];

console.log(customers);

app.get('/customers', function(req,res){
  console.log(customers);
  res.send(JSON.stringify(customers));
});


app.post('/customers', function(req,res){

  if(!(_.isEmpty(req.body))){
    var customer = req.body;
    customer.customerid = customerinit++;
    customers.push(customer);
    console.log('Customer information :' + customer.firstname);
    res.status(201).send(customer);
    // res.send(customer);
  }
  else{
    res.status(400).send(customer);
  }

});

app.put('/customers/:customerid', function(req,res){
  var id = parseInt(req.params.customerid,10);
  var matchedCustomer = _.findWhere(customers,{customerid: id});
  if (!matchedCustomer)
  {
      res.status(404).send();
    //res.send(matchedCustomer);
  }
  if(!(_.isEmpty(req.body))){
    var customer = req.body;
    matchedCustomer = customer;
    //customers.push(customer);
//    console.log('Customer information :' + customer.firstname);
    res.status(200).send(customer);
    // res.send(customer);
  }
  else{
    res.status(400).send(customer);
  }
})

app.delete('/customers/:customerid', function(req,res)
{
  var id = parseInt(req.params.customerid,10);
  var matchedCustomer = _.findWhere(customers,{customerid: id});
  if (!matchedCustomer)
  {
      res.status(404).send("Customer not found");
    //res.send(matchedCustomer);
  }
  else{
    deletedCustomer  = _.without(customers, matchedCustomer);
    customers = deletedCustomer;
    res.status(200).send("Deleted Successfully");
  }
})

app.get('/customers/:customerid', function(req,res){
  try{
  console.log(customers);
  console.log("requested search " + req.params.customerid);
  var id = parseInt(req.params.customerid,10);
  var matchedCustomer = _.findWhere(customers,{customerid: id});
  if (matchedCustomer)
  {
    res.send(matchedCustomer);
  }
  else {
    res.status(404).send();
  }

  }
  catch(error){
    console.error(error);
  }
  finally{

  }
});
