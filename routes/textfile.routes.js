const express=require('express')

const router=express.Router();

const {textfile} =require('../controllers/textfile');

router.route('/files/:filename').get(textfile);


module.exports=router;

