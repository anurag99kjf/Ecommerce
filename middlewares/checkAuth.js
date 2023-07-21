const path=require('path');
const db=require('../methods/database.js')();
checkAuth=function(req,res,next){
    console.log('going to print the value of req.session');
    console.log(req.session)
    if(req.session.user===undefined){
        console.log('3here');
        next();
        }
    else if((req.session.is_logged_in===true || req.session.is_logged_inn===true)&& req.session.user.isVarified==true){
        {
            let code=`SELECT * FROM product ORDER BY productid ASC LIMIT 5;`
            db.firstFive(code,function(results)
            {
                let product=results;
                console.log('inside the check Auth');
                console.log(typeof(product));
                res.render('home',{user:req.session.user,product:product});
            })
        }
        return;
    }

    else if(req.session.user.isVarified===false)
    {
    console.log("1 here");
    res.render("notvarified");
    return;
    }         
   else if(req.session.is_logged_inn===undefined || req.session.is_logged_inn==false)
   {
    console.log('2here')
    return res.redirect('/login');
   }       
  
}

module.exports=checkAuth;