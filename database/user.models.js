const moongoose=require('mongoose')

moongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema =  moongoose.Schema({
     name:{
          type:String
      },
     username:{
          type:String
      },
     email:{
         type: String ,
         required: true,
         unique: true
      }
})


module.exports =moongoose.model("user",userSchema);