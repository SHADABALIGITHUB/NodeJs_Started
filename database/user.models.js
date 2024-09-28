const moongoose=require('mongoose')

moongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema =  moongoose.Schema({
     name:String,
     username:String,
     email:String
})


module.exports =moongoose.model("user",userSchema);