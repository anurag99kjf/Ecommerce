const express=require('express');
const router=express.Router();

router.post('/',require('../controller/deletecartitem'));

module.exports=router;