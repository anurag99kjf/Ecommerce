const db=require('../methods/database')();

module.exports=function(req,res){
    // console.log(req.session)
    return res.redirect('/login');
    
}