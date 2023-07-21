const express=require('express');
const router=express.Router();

router.post('/',require('../controller/increaseitemcheck'));

module.exports=router;