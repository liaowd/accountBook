var express = require('express');
var router = express.Router();
var dbs=require('../dbs/db.js')

var userModel=dbs.usersModel;

/* GET users listing. */
router.post('/', function(req, res, next) {
  //创建一个Model的实例，相当于在数据库中创建了一个集合（表）
  userModel.findOne({id:req.body.id},function(err,doc){
    if (err) return handleError(err);
    if(doc!=null){
      res.send({"msg":"此用户已存在"})
    }else{
      if(req.originalUrl == "/signup/"){
        res.send({"msg":"注册操作"})

      }else if(req.originalUrl == "/signup/test"){
        res.send({"msg":"该id可以注册"})
      }
    }
  })

});

module.exports = router;
