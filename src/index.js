const express=require('express');
const path=require('path')
const app=express();
const env=require('dotenv').config();
const fs =require('fs')
const cors=require('cors');

port=process.env.PORT || 3000;

app.use(cors('*'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const home_Routes=require('../routes/home.routes');
const create_Routes=require('../routes/create.routes');
const textfile_Route=require('../routes/textfile.routes');
const EditTitle_Route=require('../routes/edittitle.routes')
const realFileEdit_Route=require('../routes/realedit.routes')

app.use(express.static(path.join(__dirname,'..','Client')));


app.set('view engine','ejs');

app.use((req,res,next)=>{

     console.log("started Node server");
     next();

})


app.use("/",home_Routes);
app.use("/",create_Routes);
app.use('/',textfile_Route);
app.use('/',EditTitle_Route);
app.use('/',realFileEdit_Route);


// app.get('/files/:filename',(req,res)=>{


        
        
  
// })





app.listen(port,()=>{
       console.log('Started Backend')
});