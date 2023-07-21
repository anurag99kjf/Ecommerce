const express=require('express');
const router=express.Router();
const path=require('path');
const multer = require('multer');
const filenme=path.join(__dirname,'../public/productimgs')
const upload = multer({ dest: filenme});


router.post('/',upload.single('productimage'),require('../controller/saveadminform'));

module.exports=router;