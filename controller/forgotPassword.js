const db=require('../methods/database')();
const forgotpasswordmain=require('../methods/forgotpasswordmail');

module.exports.getforgotPassword=function(req,res){
    res.render('forgotpasswordmain',{error:''});
}

module.exports.postforgotPassword=function(req,res){
    console.log(req.body.email);
    let code=`SELECT * FROM userdb WHERE email='${req.body.email}';`;

    db.forgotPassword(code,function(error,results)
    {
        if(error)
        {
            console.log('Error is coming');
            return;
        }
        else if(results)
        {
            if(results.length==0)
            {
                console.log('inside the main.js of forgotpasssword');
                return res.render('forgotpasswordmain',{error:"No such email is registered"});
            }
            else{
                forgotpasswordmain(results[0].email,results[0].name,function(err,data){
                    if(data)
                    {
                        return  res.render('forgotpasswordmain',{error:"A mail for setting New password is sent to your registered mail ID"}); 
                    }
                })
            }
        }
        return;
    })
 
}