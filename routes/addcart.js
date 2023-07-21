const express=require('express');
const router=express.Router();

router.post('/',require('../controller/addcart'));

module.exports=router;