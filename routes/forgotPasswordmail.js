const express=require('express');
const router=express.Router();

router.get('/',require('../controller/forgotPasswordmail').getforgotPasswordmail);
router.post('/',require('../controller/forgotPasswordmail').postforgotPasswordmail);

module.exports=router;