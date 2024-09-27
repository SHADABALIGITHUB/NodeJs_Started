const express=require('express');

const router=express.Router();
const {realedittiltleController}=require('../controllers/realedit')


router.route('/realfilesedit').post(realedittiltleController);




module.exports=router;