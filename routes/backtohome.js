const express=require('express');
const router=express.Router();

router.get('/',require('../controller/backtohome'));

module.exports=router;