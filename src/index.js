const express=require('express');

const app=express();



app.use((req,res,next)=>{

     console.log("started Node server");
     next();

})

app.get("/",(req,res)=>{

      res.send("working i am ")
    
})





app.listen(3000);