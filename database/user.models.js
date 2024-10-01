const moongoose=require('mongoose')

moongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema =  moongoose.Schema({
   
     username:{
          type:String
      },
     email:{
         type: String ,
         required: true,
         unique: true
     },
     password:{
          type: String ,
          required :true,
          unique :true
     }
})


module.exports =moongoose.model("user",userSchema);