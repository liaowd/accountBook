var express = require('express');
var router = express.Router();
var dbs=require('../dbs/db.js')

var userModel=dbs.usersModel;

/* GET users listing. */
router.post('/', function(req, res, next) {  
//   res.send('respond with a resource');

//   var user = new userModel({
//     id:req.body.id,
//     pwd:req.body.pwd
//   })
//   user.save(function (err, user) {
//     if (err) return console.error(err);
//   });
    
  res.send(req.query)
});

module.exports = router;
