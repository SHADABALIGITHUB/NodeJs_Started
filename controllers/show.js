const fs=require('fs');
const path=require('path')


const show=async(req,res)=>{


       fs.readdir(path.join(__dirname,'../files'),(err,file)=>{

          if(err){
            console.log("no such file is there");
          }

         
        res.render('index', {files:file});
           

       })



}

module.exports={show};