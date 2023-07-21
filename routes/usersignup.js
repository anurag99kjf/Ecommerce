const express=require('express');
const router=express.Router();
const adminAuth=require('../middlewares/adminAuth');
const getSignup=require('../controller/getUsersignup');
const postSignup=require('../controller/getUsersignup')
router.get('/',getSignup.getSignup,adminAuth);
router.post('/',postSignup.postSignup);

module.exports=router;