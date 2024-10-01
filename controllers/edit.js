const fs=require('fs');
const path=require('path');


const edittiltleController=(req,res)=>{


       res.render("editfiles",{title:req.params.filename}); 


     

}


module.exports={edittiltleController};