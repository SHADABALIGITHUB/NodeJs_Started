const fs=require('fs');
const path=require('path');

const realedittiltleController=(req,res)=>{


         console.log(req.body);
         const oldname=req.body.oldtitle;
         const newname=req.body.edit_title;

         fs.rename((path.join(__dirname,`../files/${oldname}`)),(path.join(__dirname,`../files/${newname}`)),(err)=>{
             if(err) throw err;
             console.log("file rename done succesfully");
         })

         res.redirect('/');

         

    

}

module.exports={realedittiltleController};