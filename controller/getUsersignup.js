const db=require('../methods/database')();
const sendEmail=require('../methods/sendingmail');
module.exports.getSignup=function(req,res,next){
    if(req.session.isAdmin==true)
    {
        next();
    } 
    else if(req.session.is_logged_in || req.session.is_logged_inn)
    {
        res.redirect('/home');
        return;
        
        
    }
    else{
        res.render("signup",{error:''});
        return;
    }
}

module.exports.postSignup=function(req,res){
    let {name,username,email,password,mobile}=req.body;

    let user={
        name:name,
        username:username,
        email:email,
        password:password,
        mobile:mobile,
        isVarified:false,
        mailToken:Date.now()

    }

    // Sending the data to the database
    let code=`INSERT INTO userdb (name, username, email, password, mobile, isVarified, mailToken) VALUES('${user.name}','${user.username}','${user.email}','${user.password}','${user.mobile}','${user.isVarified}','${user.mailToken}')`;
       db.signup(code,function(err){
        if(err)
        {
            // console.log('1here');
            return res.render('signup',{error:"User already exists"});
        }
        else{
            // creating session for the User
       sendEmail(email,user.mailToken,function(err,data){
        req.session.is_logged_in=true;
        
        req.session.user=user;
        console.log(req.session.user);
        // req.session.product=product;
        console.log("db inserted");
        return res.redirect('/home');
        
        })
    }
    })
   
}