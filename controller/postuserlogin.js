const db=require('../methods/database')();

module.exports=function(req, res) {
    let { name, username, email, password, mobile } = req.body;
    let code = `SELECT * FROM userdb WHERE email='${req.body.email}' AND password='${req.body.password}'`;
    db.login(code, function(err, results) {
      if (err) {
        console.log('User is not present', err);
        res.render('login', { error: 'Please check your email or password' });
        return;
      } else if (results) {
        console.log(results);
        if(results.length==0)
        {
            console.log('User is not present', err);
            res.render('login', { error: 'Please check your email or password' });
            return;
        }
        
        req.session.user=req.body;
        req.session.user.isVarified=true;
        req.session.is_logged_inn = true;
        req.session.user.mailToken=results[0].mailToken;
        console.log('Below is the user from the login');
        console.log(req.session.user);
        res.redirect('/home');
        return;
      }
    });
  }