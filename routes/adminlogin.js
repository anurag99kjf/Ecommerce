const express=require('express');
const adminAuth = require('../middlewares/adminAuth');
const router=express.Router();

router.get('/',require('../controller/adminlogin'),adminAuth);

module.exports=router;