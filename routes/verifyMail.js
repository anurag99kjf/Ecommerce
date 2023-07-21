const express=require('express');
const router=express.Router();

router.get('/',require('../controller/verifyMail'));

module.exports=router;