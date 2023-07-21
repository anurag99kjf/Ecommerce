const db = require('../methods/database')();

module.exports =function(req,res){
  console.log("inside the mailing system");
  console.log('consoling the query:',req.query)
 const {token}=req.query;
 
//    sending the mailToken to the database for the match of user
 let code=`SELECT * FROM  userdb WHERE mailToken='${token}'`;
 db.verifyMail(code,function(err,results){
     if(err)
     {
         console.log('1here');
         return res.render('signup',{error:"ERROR IN DATABASE SERVER"});
     }
     else if(results){
         // creating session for the User
         console.log('5 here');
         console.log(results);
         req.session.user.isVarified=true;
         let code=`UPDATE userdb
         SET isVarified = '${true}'
         WHERE mailToken='${token}';`
         db.changemailToken(code,function(error,results){
          if(results)
          {
              console.log('8here');
              console.log(results);
              console.log("response user value");
              console.log(req.session.user);
               res.redirect('/home');
              return;
          }
         })
     }
     
     })
 return;
  
 }







// const db=require('../methods/database')();


// module.exports=function(req,res){
//     console.log("inside the mailing system");
//    const {token}=req.query.token;
   
// //    sending the mailToken to the database for the match of user
//    let code=`SELECT * FROM  userdb WHERE mailToken='${token}'`;
//    db.verifyMail(code,function(err,results){
//        if(err)
//        {
//            console.log('1here');
//            return res.render('signup',{error:"ERROR IN DATABASE SERVER"});
//        }
//        else if(results){
//            // creating session for the User
//            console.log('5 here');
//            console.log(results);
//            console.log('Consoling the value of req.session in controller verify mail here',req.session)
//            req.session.user.isVarified=true;
//            let code=`UPDATE userdb
//            SET isVarified = '${true}'
//            WHERE mailToken='${token}';`
//            db.changemailToken(code,function(error,results){
//             if(results)
//             {
//                 console.log('8here');
//                 console.log(results);
//                 console.log("response user value");
//                 console.log(req.session.user);
//                  res.redirect('/home');
//                 return;
//             }
//            })
//        }
       
//        })
//    return;
    
//    }