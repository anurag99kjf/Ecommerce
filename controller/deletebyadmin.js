const db=require('../methods/database')();

module.exports=function(req,res){
    let code=`DELETE FROM product WHERE productid=${req.body.id};`;
    db.deleteByadmin(code,function(error,reults)
    {
        if(error)
        {
            console.log('error in deleting the product by the admin');
            res.send(error);
        }
        else{
            console.log('Successfully deleted the product from the product table');
            let code1=`DELETE FROM usercart WHERE productid=${req.body.id};`
            db.deleteFromcartbyadmin(code1,function(error1,results1){
                if(error1)
                {
                    console.log('Error in deleting the product from the user cart by admin',error1);
                    res.send(error1);
                }
                else{
                    console.log('Successfully deleted the data from the user cart');
                    res.send(results1);
                }
            })
        }
    })
}