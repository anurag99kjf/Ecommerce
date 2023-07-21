const express=require('express');
const router=express.Router();

const nextFive=require('../controller/nextproductandgotocart').nextfive;
const gotocart=require('../controller/nextproductandgotocart').gotocart;

router.post('/datarequired',nextFive);
router.get('/gotocart',gotocart);

module.exports=router;