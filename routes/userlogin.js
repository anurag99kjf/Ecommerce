const express=require('express');
const router=express.Router();
const adminAuth=require('../middlewares/adminAuth')
const userlogin=require('../controller/userlogin');
const userloginpost=require('../controller/postuserlogin');
router.get('/',userlogin,adminAuth);
router.post('/',userloginpost);

module.exports=router;