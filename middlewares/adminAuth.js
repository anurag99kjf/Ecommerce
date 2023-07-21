const path=require('path');
const db=require('../methods/database.js')();


module.exports=function(req,res,next){
    if(req.session.isAdmin===undefined)
    {
        next();
    }
    else if(req.session.isAdmin==true){
       let code=`SELECT * FROM product`;
       db.adminProducts(code,function(error,results){
        if(error)
        {
            console.log('error in fetching the products for the admin page',error);
            
        }
        else if(results)
        {
            console.log('Successfully fetched the products for the admin');
            res.render('adminpage',{product:results});
        }
       })
    }
}