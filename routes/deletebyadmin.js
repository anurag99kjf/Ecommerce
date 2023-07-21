const express=require('express');
const router=express.Router();

router.post('/',require('../controller/deletebyadmin'));

module.exports=router;