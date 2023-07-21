const db=require('../methods/database')();
const passwordchangemail=require('../methods/passwordchangemail');
module.exports=function(req,res){
    // code for changing the password
    let code=`UPDATE userdb SET password='${req.body.Newpassword}' WHERE email='${req.session.user.email}';`
    db.changepassword(code,function(error,results){
        if(error)
        {
            console.log('Inside the password change main.js:',error);
            res.send(error);
            return;

        }
        else if(results)
        {
            passwordchangemail(req.session.user.email,req.session.user.name,function(err,data){
                if(err)
                {
                    console.log('Not able to send the mail for passwordchange',err);
                    res.send('Error');
                    return;
                }
                else{
                    console.log('Mail for changing the password is sent');
                    res.send(results);
                    return;
                }
            })
        }
    })

        
   }