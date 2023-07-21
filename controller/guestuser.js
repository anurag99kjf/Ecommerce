const db=require('../methods/database')();
console.log('Inside the controller loginaction');

module.exports=function(req,res){
    if(req.session.is_logged_in==undefined && req.session.is_logged_inn==undefined)
    {
        let code=`SELECT * FROM product ORDER BY productid ASC LIMIT 5;`
            db.firstFive(code,function(results)
            {
                let product=results;
                console.log('inside the check Auth');
                console.log(typeof(product));
                res.render('root',{product:product});
            })
    }
    else{
        res.redirect('/login');
    }
}