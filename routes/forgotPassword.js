const express=require('express');
const router=express.Router();

router.get('/',require('../controller/forgotPassword').getforgotPassword);
router.post('/',require('../controller/forgotPassword').postforgotPassword);

module.exports=router;