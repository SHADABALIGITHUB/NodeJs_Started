const express=require('express');

const router=express.Router();
const {realedittiltleController}=require('../controllers/realedit')


router.route('/').post(realedittiltleController);




module.exports=router;