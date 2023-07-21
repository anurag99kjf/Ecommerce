const express=require('express');
const router=express.Router();

router.post('/',require('../controller/increaseitem'));

module.exports=router;