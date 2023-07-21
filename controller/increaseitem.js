const db=require('../methods/database')();


module.exports=function(req,res){
    let code=`UPDATE usercart SET quantity=quantity+1 WHERE userid='${req.body.mail1}' AND productid=${req.body.productid1};`;
    db.increaseQuantity(code,function(error,results)
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
            res.send("Successfully incresed item in the database");
        }
    })
}