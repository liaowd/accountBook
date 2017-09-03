var mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1/accountBook')
var db=mongoose.connection
db.once('open',callback=>{
    console.log('数据库打开成功')
})

//schema
var userSchema = new mongoose.Schema({
  "nick": String,
  "id":String,
  "pwd": String
});

//model
var usersModel = mongoose.model("users", userSchema);


module.exports={
    db,
    usersModel
}