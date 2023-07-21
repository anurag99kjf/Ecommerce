module.exports=function(req,res){
    if(req.session.is_logged_inn || req.session.is_logged_in){
        return res.render('passwordchange',{user:req.session.user});
    }
}