const express=require('express');
const router=express.Router();

router.get('/',require('../controller/changepasswordUI'));

module.exports=router;