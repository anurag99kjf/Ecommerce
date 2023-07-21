const db=require('../methods/database')();

module.exports=function(req,res){
    console.log('Consoling the req.session of admin before destroy:',req.session);
    req.session.destroy();
    console.log('Consoling the req.session of admin after destroy:',req.session);
    console.log('Session for the admin is successfully destroyed');
    res.send('admin session is over');
};