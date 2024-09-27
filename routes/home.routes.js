const express=require('express');

const router=express.Router();

const {show} =require('../controllers/show')


router.route("/").get(show);

module.exports=router;



       
      
       

