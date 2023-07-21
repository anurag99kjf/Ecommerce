const db=require('../methods/database')();


module.exports=function(req,res){
    req.body.productquantity=parseInt(req.body.productquantity);
    req.body.productprice=parseInt(req.body.productprice);
    console.log('Consoling the value of the form data',req.body);
    console.log('Consoling the file part coming from client',req.file);
    let code=`INSERT INTO product (imgurl,productname,price,quantity,productdetails) VALUES('/productimgs/${req.file.filename}','${req.body.productname}','${req.body.productprice}',${req.body.productquantity},'${req.body.productdetails}');`;
    db.newProductbyadmin(code,function(error,results){
        if(error)
        {
            console.log('Error in uploading the new product by admin',error);
            res.send(error);
        }
        else{
            console.log('product is successfully added by admin');
            let code1=`select * from product order by productid DESC LIMIT 1;`;
            db.newProductbyadmindetails(code1,function(error1,results1){
                if(error1)
                {
                    res.send(error);
                }
                else{
                    if(results1.length>0)
                    {
                        let data=results1;
                        res.send(data);
                    }
                }
            })
           
        }
    })
}