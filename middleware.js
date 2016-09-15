
module.exports = {
  requireAuthentication: function(req, res, next){
    console.log('Successfully Authenticated');
    next();
  },
  logger: function(req, res, next){
    console.log(req.method +" "+ req.originalUrl+" " + new Date());
    next();
  }
  }
