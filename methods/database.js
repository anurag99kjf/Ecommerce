const mysql = require('mysql2');

// Create a connection

module.exports=function(){const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'awxi1686',
  database: 'Ecom'
})

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }

  // console.log('Connected to the database.');

   
})
  
  function signup(code,callback){
    
  connection.query(code,  function(error, results){
    if (error) {
      // console.log("1here");
      // console.log(results);
      console.error('Error inserting values:', error);
      callback(error);
    }else{
      // console.log('Values inserted successfully.');
      console.log("inside the database js");
      console.log(results);
        callback()
      
    }
    })
  }

   function verifyMail(code,callback)
   {
     
      connection.query(code,function(error,results){
        if(error)
        {
          console.error('Error in verifyingMail:',error);
          callback(error,results);
        }
        else{
          console.log('Mail is verified successfully.');
          console.log(results);
          callback(error,results)
        }
      })
   }

   function changemailToken(code,callback)
   {
      connection.query(code,function(error,results){
        if(error)
        {
          console.log("Error in changing the mailToken from server side:",error);
          callback(error,results);
        }
        else{
            console.log("Updaed the isVarified");
            callback(error,results);
        }
      })
   }

  //  function for sendig the first five product to the home page
  function firstFive(code,callback)
  {
    connection.query(code,function(error,results){
      if(error){
        console.log('Error in fetching the product from server',error);
        callback(error);
      }
      else if(results)
      {
        console.log("found the first five products for home page");
        // console.log(results);
        callback(results);
      }
    })
  }

  // function for login
  function login(code,callback)
  {
    connection.query(code,function(error,results){
       if(error){
        console.log('User not Exist',error);
        callback(error,results);
       }
       else{
        console.log('User is present in the database',results);
        callback(error,results);
       }
    })
  }
  function nextFive(code,callback)
  {
    connection.query(code,function(error,results){
      if(error){
        console.log('Error in sending the next 5 products, inside the database.js',error);
        callback(error,results);
      }
      else if(results)
      {
        console.log('Sent the next 5 products successFully, currently inside the databse.js');

        callback(error,results);
      }
    })
  }

  function forgotPassword(code,callback)
  {
    connection.query(code,function(error,results){
      if(error)
      {
        console.log('Error in fetching the data from database for the forgot password');
        callback(error,results);
      }
      else if(results)
      {
        console.log('Fetch the data from the data base it may or may not be empty');
        callback(error,results);

      }
    })
  }

  // function for the updateion of password after forgotpassword
  function forgotpqasswordUpdate(code,callback)
  {
    connection.query(code,function(error,results){
      if(error)
      {
        console.log('Error in updating the forgotpassword currently inside db.js',error);
        callback(error,results);
        return;
      }
      else{
           console.log('Updated the password for the forgotten password');
          callback(error,results);
          return;
      }
    })
  }

  // function for changingb the password

  function changepassword(code,callback)
  {
    connection.query(code,function(error,results){
      if(error)
      {
        console.log('Error in changing the password for change password',error);
        callback(error,results);
      }
      else{
        console.log('Password is succesfully changed in the database');
        callback(error,results);
      }
    })
  }
  
  // checking for the item is already present in the usercart table
  function checkCart(code,callback)
  {
    connection.query(code,function(error,results)
    {
      if(error)
      {
        console.log('Error in checking the usercart db for the duplicate products',error);
        callback(error,results);
      }
      else{
        console.log('usercart is successfully checked for the duplicate product');
        callback(error,results);
      }
    })
  }


  // function for adding the item to the usercart table of the database

  function addtoCart(code,callback)
  {
    connection.query(code,function(error,results){
      if(error)
      {
        console.log('Error in adding the item to the usercart table');
        callback(error,results);
      }
      else{
        console.log('Successfully added the item to the user cart');
        callback(error,results);
      }
    })
  }

  // function for the view cart first part

  function gotoCartfirst(code,callback)
  {
    connection.query(code,function(error,results){
      if(error)
      {
        console.log("error in the gotoCartfirst inside the db",error);
        callback(error,results);
        return;
      }
      else{
        console.log('Successfully completed the first part of the gotocart first part');
        callback(error,results);
      }
    })
  }
 
  // function for the view cart second part
 function gotoCartSecond(code,callback)
 {
  connection.query(code,function(error,results){
    if(error)
    {
      console.log('Error in the second part of the view cart in database',error);
      callback(error,results);
      return;
    }
    else{
      console.log('Succesfully fetch the data for the view cart from the database.js');
      callback(error,results);
      return;
    }
  })
 }

// function for fetching the initial quantity for the cart Item
function correctQuantity(code,callback)
{
  connection.query(code,function(error,results)
  {
    if(error)
    {
      console.log('Error in fetching the intial quantity in database.js',error);
      callback(error,results);
    }
    else{
      console.log('Successfully fetched the intial quantity from the database.js');
      callback(error,results);
    }
  })
}

// function for deletingb the item from the cart
function deleteCartitem(code,callback)
{
  connection.query(code,function(error,results)
  {
    if(error)
    {
      console.log('Error in deleting the item from database.js');
      callback(error,results);
    }
    else{
      console.log('Successfully deleted the item from the database');
      callback(error,results);
    }
  })
}


function quantityCheck(code,callback)
{
  connection.query(code,function(error,results)
  {
    if(error)
    {
      console.log('Error in checking the quantity from database.js');
      callback(error,results);
    }
    else{
      console.log('Successfully fetched the quantity of the product from database.js');
      callback(error,results);
    }
  })
}

// function for increasing the quantity in the database when plus button is clicked
function increaseQuantity(code,callback)
{
  connection.query(code,function(error,results)
  {
    if(error)
    {
      console.log('Error in increasing the quantity from database.js');
      callback(error,results);
    }
    else{
      console.log('Successfully increased the quantity of the product from database.js');
      callback(error,results);
    }
  })
}

// function for decreasing the quantity in the database when minus button is clicked

function decreaseQuantity(code,callback)
{
  connection.query(code,function(error,results)
  {
    if(error)
    {
      console.log('Error in decreasing the quantity from database.js');
      callback(error,results);
    }
    else{
      console.log('Successfully decreased the quantity of the product from database.js');
      callback(error,results);
    }
  })
}

// function for whether the user is admin or not
function checkForadmin(code,callback)
{
  connection.query(code,function(error,results){
    if(error)
    {
      console.log('Error in finding the user as admin from database.js',error);
      callback(error,results);
    }
    else{
      console.log('Successfully authenticate the user as admin from server side');
      callback(error,results);
    }
  })
}


// function for fetching all the products for the admin

function adminProducts(code,callback)
{
  connection.query(code,function(error,results){
    if(error)
    {
      console.log('Error in fetching the products for the admin');
      callback(error,results);
    }
    else{
      console.log('Succeefully fetched the data for the admin');
      callback(error,results);
    }
  })
}

// function for updating the product by admin
function productupdate(code,callback)
{
  connection.query(code,function(error,results){
    if(error)
    {
      console.log('Error in updating the product by the admin at database.js');
      callback(error,results);
    }
    else{
      console.log('Successfully updated the products by the admin in database.js');
      callback(error,results);
    }
  })
}

// function for deleting the product from the product table;
function deleteByadmin(code,callback)
{
  connection.query(code,function(error,results){
    if(error)
    {
      console.log('error in deleting the product by the admin in the database.js',error);
      callback(error,results);
    }
    else{
      console.log('Succesfully deleted the product from the product table by admin');
      callback(error,results);
    }
  })
}


// function for deleting the data from the usercart once deleted by the admin from admin page
function deleteFromcartbyadmin(code,callback)
{
  connection.query(code,function(error,results){
    if(error)
    {
      console.log('Error in deleting the product from the user cart by admin from database.js');
      callback(error,results);
    }
    else{
      console.log('Successfully deleted the data from the user cart by the admin from the database.js');
      callback(error,results);
    }
  })
}

// function handling the new product added by the admin
function newProductbyadmin(code,callback)
{
  connection.query(code,function(error,results){
    if(error)
    {
      console.log('error in uploading the new product by admin at the database.js',error);
      callback(error,results);
    }
    else{
      console.log('Successfully added the product by the admin in the database from database.js');
      callback(error,results);
    }
  })
}

// function for getting the data of currently added product by the admin
function newProductbyadmindetails(code,callback)
{
  connection.query(code,function(error,results){
    if(error)
    {
      console.log('Error in getting the currently uploaded item by the admin from database.js',error);
      callback(error,results);

    }
    else
    {
      console.log("successfully feetched the data of currently uploaded item by the admin");
      callback(error,results);
    }
  })
}

return {signup,verifyMail,changemailToken,firstFive,login,nextFive,forgotPassword,forgotpqasswordUpdate,changepassword,addtoCart,gotoCartfirst,gotoCartSecond,checkCart,correctQuantity,deleteCartitem,quantityCheck,increaseQuantity,decreaseQuantity,checkForadmin,adminProducts,productupdate,deleteByadmin,deleteFromcartbyadmin,newProductbyadmin,newProductbyadmindetails};

    }
