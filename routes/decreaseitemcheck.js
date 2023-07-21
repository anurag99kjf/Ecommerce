const express=require('express');
const router=express.Router();

router.post('/',require('../controller/decreaseitemcheck'));

module.exports=router;