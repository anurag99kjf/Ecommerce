const express=require('express');
const router=express.Router();

router.get('/',require('../controller/logoutadmin'));

module.exports=router;