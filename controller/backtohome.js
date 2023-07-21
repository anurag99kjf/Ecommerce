const db=require('../methods/database')();

module.exports=function(req,res){
    console.log("inside to the back to home")
    console.log(req.session.is_logged_in);
    console.log(req.session.isVarified);
    console.log(req.session.is_logged_inn);
    return res.redirect('/home');

}