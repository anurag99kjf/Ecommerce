const db=require('../methods/database')();

module.exports.getforgotPasswordmail=function(req,res){
    console.log('Consoling the querry at the time of mail link click: ',req.query);
    console.log(typeof(req.query));
    res.render('forgotpassword',{mail:req.query.mail,error:"Error is there"});
    console.log("here is the mail id see below");
    console.log(req.query.mail);
};

module.exports.postforgotPasswordmail=function(req,res){
    let{mail}=req.query;
    console.log("inside the forgotpassword below is the required mail")
    console.log(req.query.mail);
    
   console.log(req.body);
   let newpassword=req.body.newpassword.trim();
   let confirmpassword=req.body.confirmpassword.trim();
   if(newpassword.length<8 || confirmpassword.length<8)
   {
    res.render('forgotpassword',{mail:req.query.mail,error:"Length of password should be greater or equal to 8"}) 
   }
   else if(newpassword!==confirmpassword)
    {
        res.render('forgotpassword',{mail:req.query.mail,error:"Passwords do not match"})
    }
    else{
        let code=`UPDATE userdb SET password='${req.body.confirmpassword}' WHERE email='${mail}';`;
        db.forgotpqasswordUpdate(code,function(error,results)
        {
            if(error)
            {
                console.log('Inside the error of main.js in forgotpasswordUpdate');

            }
            else if(results)
            {
                console.log('Successfully Updated the password in the database');
                return res.redirect('/login');
            }
        })
    }
   
}