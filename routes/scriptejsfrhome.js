const express=require('express');
const router=express.Router();

router.get('/',require('../controller/scriptejsfrhome'));

module.exports=router;