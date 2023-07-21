const express=require('express');
const router=express.Router();

const guest=require('../controller/guestuser');


router.get('/',guest);

module.exports=router;