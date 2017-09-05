var express = require('express');
var router = express.Router();
var dbs=require('../dbs/db.js')

var userModel=dbs.usersModel;

/* GET users listing. */
router.post('/', function(req, res, next) {
  //创建一个Model的实例，相当于在数据库中创建了一个集合（表）
  var user = new userModel({       
    nick:req.body.nick,
    id:req.body.id,
    pwd:req.body.pwd
  })
  userModel.findOne({id:req.body.id},function(err,doc){
    if (err) return handleError(err);
    if(doc===null){
      // 没找到
    }else{
      
    }
  })
  // user.save(function (err, user) {
  //   if (err) {
  //     console.log("错误")
  //     return console.error(err);
  //   }
  // });
    
  res.send(req.body)
});

module.exports = router;
