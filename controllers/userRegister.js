const UserModel=require('../database/user.models');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userRegister=async(req,res)=>{

    try{
       
        const {username,email,password}=req.body;
        
        
        const hashpassword=await bcrypt.hash(password,12);
        

        const user=await UserModel.create({username:username,email:email,password:hashpassword});
        
        res.status(200).json({message:'user register Succesfully',status:true})
       
      }
      catch(err){
        res.status(500).json({ error:err,status:false });
        
      }

}

module.exports={userRegister};