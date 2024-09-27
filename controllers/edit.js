const fs=require('fs');
const path=require('path');


const edittiltleController=(req,res)=>{


       res.render("editfiles",{title:req.params.filename}); 

    //    fs.rename(path.join(__dirname,`../files/${req.params.filename}`), 'newFileName.txt', (err) => {
    //     if (err) throw err;
    //     console.log('File renamed successfully!');
    //    });

     

}


module.exports={edittiltleController};