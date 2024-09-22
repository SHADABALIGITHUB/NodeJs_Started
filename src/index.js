const express=require('express');
const path=require('path')
const app=express();
const env=require('dotenv').config();
const fs =require('fs')
port=process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'..','Client')));


app.set('view engine','ejs');

app.use((req,res,next)=>{

     console.log("started Node server");
     next();

})

app.get("/",async(req,res)=>{


     fs.readdir('./files', (err, files) => {

          if (err) {
              return res.status(500).send('Error reading directory');
          }

          res.render('index', {files:files});
  
             })


    
})


app.post('/create',(req,res)=>{

      
      fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,JSON.stringify(req.body),(err)=>{
          if(err){
               res.send("Error while doing it abhi nahi hogga ")
          }

          res.redirect('/');


      });




   

    

    


})

app.get('/files/:filename',(req,res)=>{


        fs.readFile(`./files/${req.params.filename}`,'utf-8',(err,body)=>{

            res.render("files",{bodydata:JSON.parse(body)});

           
           
         


        })
        
  
})





app.listen(port,()=>{
       console.log('Started Backend')
});