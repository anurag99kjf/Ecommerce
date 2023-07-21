const express=require('express');
const router=express.Router();

router.post('/',require('../controller/quantityinCart'));

module.exports=router;