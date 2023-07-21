const db=require('../methods/database')();

module.exports.getAdminpage=function(req,res){
    if(req.session.isAdmin==undefined){
    res.redirect('/adminlogin');
    }
    else{
        next();
    }


}

module.exports.postAdminpage=function(req,res,next){
    console.log('Consoling the data of adminpage:',req.body);
    let code=`SELECT * FROM userdb WHERE isAdmin='true' AND email='${req.body.email}';`
    db.checkForadmin(code,function(error,results){
        if(error)
        {
            console.log('error in finding the admin ',error);
            res.send('Error in finding the admin from main.js');
        }
        else if(results)
        {
            if(results.length>0)
            {
            console.log(results);
            console.log('Successfully found the admin');
            req.session.isAdmin=true;
            next();
            }
            else{
                res.render('adminlogin',{error:'No Such admin is present'});
                return;
            }
        }
    })
    
}