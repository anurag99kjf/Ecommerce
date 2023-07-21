const db=require('../methods/database')();

module.exports=function(req,res){
    let value=req.body.Id;
   let code=`DELETE FROM usercart WHERE productid=${req.body.Id} AND userid='${req.body.email}';`
   db.deleteCartitem(code,function(error,results)
   {
    if(error)
    {
        console.log('Error in deleting the item from the cart');
        
        res.send('Error in deleting the item from the cart');
    }
    else{
        console.log('Successfully deleted the item from the cart');
        res.send('Successfully deleted the item from the cart');
    }
   })
}