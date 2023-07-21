const express=require('express');
const router=express.Router();

router.post('/',require('../controller/updateproductAdmin'));

module.exports=router;