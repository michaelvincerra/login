var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

res.json([{
  email:"user@21lab.com",
  password:"21lab_123456!"
  }, 
  {
  email:"silvia@21lab.com",
  password:"26Belissima!"
  }]);
});

module.exports = router;
