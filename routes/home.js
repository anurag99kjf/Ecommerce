const express=require('express');
const router=express.Router();
const checkAuth=require('../middlewares/checkAuth');

router.get('/',checkAuth,require('../controller/home'));

module.exports=router;