const express=require('express');
const router=express.Router();

router.post('/',require('../controller/decreaseitem'));

module.exports=router;