const express=require('express');

const router=express.Router();
const {edittiltleController}=require('../controllers/edit')


  router.route('/:filename').get(edittiltleController);


module.exports=router;