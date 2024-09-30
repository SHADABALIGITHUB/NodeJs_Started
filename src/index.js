const express=require('express');
const path=require('path')
const app=express();
const env=require('dotenv').config();
const fs =require('fs')
const cors=require('cors');
const expressLayoutEjs=require('express-ejs-layouts');

port=process.env.PORT || 3000;

app.use(cors('*'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const home_Routes=require('../routes/home.routes');
const create_Routes=require('../routes/create.routes');
const textfile_Route=require('../routes/textfile.routes');
const EditTitle_Route=require('../routes/edittitle.routes')
const realFileEdit_Route=require('../routes/realedit.routes')




const userModel=require('../database/user.models')

app.use(express.static(path.join(__dirname,'..','Client')));
app.use(expressLayoutEjs);

app.set('views', path.join(__dirname,'..','views')); 

app.set('view engine','ejs');

app.use((req,res,next)=>{

     console.log("started Node server");
     next();

})


app.post('/createuser',async(req,res)=>{

       try{

              if(req.body.email==''){
                     res.status(409).send({message:'email already exist',success:false});
              }

      const created= await userModel.create({
          name:req.body.name,
          email:req.body.email,
          username:req.body.username,
       }) 
       res.status(200).send({data:created,message:'sucessfully ',success:false});
} catch(err){
        
         
         res.redirect('/');

 }

       
      
})
app.get('/login',async(req,res)=>{

      

     res.render('userindex');
 
       
 })



app.use("/",home_Routes);
app.use("/",create_Routes);
app.use('/',textfile_Route);
app.use('/',EditTitle_Route);
app.use('/',realFileEdit_Route);




app.listen(port,()=>{
       console.log(`Started Backend ${port}` )
});