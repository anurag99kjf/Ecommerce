
module.exports=function(req,res){
    req.session.destroy();
    return res.render('login',{error:""});
}

