var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// module.exports = function(app) {
  
//       app.get('/hello', function(req, res) {
//           res.send('look at me!');
//       });
  
//   };
module.exports = router;


// https://scotch.io/tutorials/route-middleware-to-check-if-a-user-is-authenticated-in-node-js
// function isAuthenticated(req, res, next) {
  
//       // do any checks you want to in here

//       // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
//       // you can do this however you want with whatever variables you set up
//       if (req.user.authenticated)
//           return {this.state.users.map(user =>{user.email})
//           // return next();
  
//       // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
//       res.redirect('/');
//   }

  
//   module.exports = router;