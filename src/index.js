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
const realFileEdit_Route=require('../routes/realedit.routes');
const Register_Route=require('../routes/register.routes');
const Login_Routes=require('../routes/login.routes');



const userModel=require('../database/user.models')

app.use(express.static(path.join(__dirname,'..','Client')));
app.use(expressLayoutEjs);

app.set('views', path.join(__dirname,'..','views')); 

app.set('view engine','ejs');

app.use((req,res,next)=>{

     console.log("started Node server");
     next();

})



app.get('/register',async(req,res)=>{

      

     res.render('userRegister');
 
       
 })
 app.get('/login',async(req,res)=>{

      

       res.render('userLogin');
   
         
   })

 



app.use("/",home_Routes);
app.use("/create",create_Routes);
app.use('/files/',textfile_Route);
app.use('/filesedit',EditTitle_Route);
app.use('/realfilesedit',realFileEdit_Route);
app.use('/createuser',Register_Route);
app.use('/loginuser',Login_Routes);




app.listen(port,()=>{
       console.log(`Started Backend ${port}` )
});