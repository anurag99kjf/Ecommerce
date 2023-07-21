const express=require('express');
const adminAuth = require('../middlewares/adminAuth');
const router=express.Router();

router.get('/',require('../controller/adminpage').getAdminpage,adminAuth);

router.post('/',require('../controller/adminpage').postAdminpage,adminAuth);

module.exports=router;