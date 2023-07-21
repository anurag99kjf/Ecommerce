const db=require('../methods/database')();

module.exports=function(req,res){
    let data=req.body;
    let code=`UPDATE product SET productname='${data.productname}',price='${data.productprice}',quantity=${data.productquantity},productdetails='${data.productdetails}' WHERE productid=${data.id};`
    db.productupdate(code,function(error,results)
    {
        if(error)
        {
            console.log('Error in updating the product:',error);
            res.send(error);
        }
        else{
            console.log('Successfully updated the product');
            res.send(results);
        }
    })
}