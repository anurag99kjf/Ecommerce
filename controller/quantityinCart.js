const db=require('../methods/database')();

module.exports=function(req,res){
    let id=req.body.idreq;
    let email=req.body.email;
    let code=`SELECT * FROM usercart WHERE productid=${id} AND userid='${email}';`;
    db.correctQuantity(code,function(error,results){
        if(error){
            console.log('Error in fetching the quantity for product in cart',error);
            let arr=[];
            res.send(arr);
        }
        else{
            console.log('Succesfully fetched the quantity from the usercart');
            res.send(results);
        }
    })

}