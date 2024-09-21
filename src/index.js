const express=require('express');
const path=require('path')
const app=express();
const env=require('dotenv').config();

port=process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'..','Client')));


app.set('view engine','ejs');

app.use((req,res,next)=>{

     console.log("started Node server");
     next();

})

app.get("/",(req,res)=>{
      const MArks = 24;
     res.render("index",{MArks})
    
})

app.get('/profile/:username',(req,res)=>{

       const value=req.params.username;
      

      res.send(`<h2> My name is ${value} </h2>`)
})





app.listen(port,()=>{
       console.log('Started Backend')
});