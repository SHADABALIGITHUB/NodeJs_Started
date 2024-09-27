const fs=require('fs');
const path=require('path')

const textfile=(req,res)=>{

    fs.readFile(path.join(__dirname,`../files/${req.params.filename}`),'utf-8',(err,body)=>{

        res.render("files",{bodydata:JSON.parse(body)});

       
       
     


    })

}

module.exports={textfile}


