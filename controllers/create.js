const fs=require('fs');
const path=require('path')


const create=async(req,res)=>{



       fs.writeFile(path.join(__dirname,`../files/${req.body.title.split(' ').join('')}.txt`),JSON.stringify(req.body),(err)=>{
           if(err){
            res.send("not a correct file you are accesssing here");
           }

           res.redirect('/');
       })





}

module.exports={create};