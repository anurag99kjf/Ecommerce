const express=require('express');
const router=express.Router();

router.use('/',require('../controller/logout'));

module.exports=router;