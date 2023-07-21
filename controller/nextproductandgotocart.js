const db=require('../methods/database')();
let current=1;


module.exports.nextfive=function(req,res){
    console.log("inside to the button request");
    // sending the next firve data to the home page;
    let code;
    if(req.body.currentvalue1<=current)
    {
          code=`SELECT * FROM product ORDER BY productid ASC LIMIT ${req.body.currentvalue1 * 5}, 5;`;
          current++;
    }
    // let code=`SELECT * FROM product WHERE productid BETWEEN 6 AND 10;`
    else{
     code=`SELECT * FROM product ORDER BY productid ASC LIMIT ${current * 5}, 5;`;
     current++;
    }
    db.nextFive(code,function(error,results){
        if(error)
        {
            console.log('inside the error',error);
            res.send('Sorry didnot get the next products');
            return;
        }
        else if(results)
        {
            
            console.log('inside the results of next five product, next five products are below');
            console.log(results);
            
            res.send(results);

        }
    })
    
  
}

module.exports.gotocart=function(req,res){
    current=1;
    if(req.session.user==undefined)
    {
        res.redirect('/login');
        return;
    }
    let code=`SELECT * FROM usercart WHERE userid='${req.session.user.email}';`;
    db.gotoCartfirst(code,function(error,results){
        if(error){
            console.log("Error in going to the cart in the first part",error);
            return res.status(500).send("Internal Server Error");
        }
        else if(results)
        {
            if(results.length==0)
            {
                return res.render('mycart',{product:results,productquantity:'false'});
        
            }
            else{
                let data=[];
                  for(let i=0;i<results.length;i++)
                  {
                     data.push(results[i].productid);
                  }
                  let code1=`SELECT * from product WHERE productid IN (${data.join(',')});`
                  db.gotoCartSecond(code1,function(error1,results1){
                    if(error1){
                        console.log("error in fetching the products from product table for view cart",error1);
                       
                        return res.status(500).send("Internal Server Error");
                    }
                    else
                    {
                        res.render('mycart',{product:results1,productquantity:results});

                        return;
                    }
                  })
            }
        }
    })

}