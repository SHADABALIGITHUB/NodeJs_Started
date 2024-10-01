const UserModel=require('../database/user.models');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

const userLogin=async(req,res)=>{


    try{
    console.log(req.body.email);
    const email=req.body.email;

    const user=await UserModel.findOne({email});
    console.log(user);

    if(!user){

        return res.status(401).json({ error: 'Authentication fail no user' });
    }
   
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
   

    if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed in password' });
     }

   
     const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h',
        });

        res.status(200).json({ token });
 } catch (error) {
 res.status(500).json({ error: 'Login failed' });
 }

    
}

module.exports={userLogin};