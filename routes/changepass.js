const express=require('express');
const router=express.Router();

router.post('/',require('../controller/changepass'));

module.exports=router;