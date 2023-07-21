const db=require('../methods/database')();


module.exports=function(req,res){
    console.log("inside to the add cart route")
    console.log(req.body.Id);
//   code for cecking whether the product is already present in the database if yes then don't add it again.
   let code1=`SELECT * FROM usercart WHERE productid=${req.body.Id} AND userid='${req.session.user.email}';`
   db.checkCart(code1,function(error1,results1){
    if(error1)
    {
        console.log('Error in checking the user cart table in the database',error1);
        res.send('Error');

    }
    else
    {
        if(results1.length>0)
        {
            console.log('Item is already present in the usercart');
            res.send('Item is already present in the cart');
            return;
        }
        else{
              // code for adding the product to the cart
   let code=`INSERT INTO usercart (userid, productid, quantity) VALUES ('${req.session.user.email}',${req.body.Id},0);`;
   db.addtoCart(code,function(error,results){
    if(error)
    {
        console.log('Error in adding the item to the cart',error);
        res.send(error);
        return;
    }
    else if(results)
    {
        console.log('Item is succssfully added to the cart');
        res.send(results);
        return;
    }
   })
        }
    }
   })
  
    
}