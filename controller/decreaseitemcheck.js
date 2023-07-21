const db=require('../methods/database')();


module.exports=function(req,res){
    let code=`SELECT * FROM usercart WHERE userid='${req.body.mail1}' AND productid=${req.body.productid1};`
    db.quantityCheck(code,function(error,results)
    {
     if(error)
     {
         console.log('Error in checking the product quantity',error);
         res.send('Error');
         return;
     }
     else if(results)
     {
         console.log('Successfully fetched the product quantity');
         res.send(results);
     }
    })
 
 }