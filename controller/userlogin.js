const db=require('../methods/database')();

module.exports=function(req,res,next){
    // if(req.session.user.isVarified==true)
    // {
    //     res.render("login",{error:'Verified User'});
    // }
    if(req.session.isAdmin==true)
    {
        next();
    } 
    else if(req.session.is_logged_inn===undefined || req.session.is_logged_inn==false){
        res.render("login",{error:"Please enter your credentials"});
        console.log('below is session');
        console.log(req.session);
        }
       
    else if(req.session.is_logged_in===true || req.session.is_logged_inn===true)
    {
        return res.redirect('/home');
    }
   
    else{
        return res.redirect('/home');
    }
}