const express= require('express');
const app=express();
const port=8000;
const fs=require('fs');
const path=require('path');
const session=require('express-session');
const checkAuth=require('./middlewares/checkAuth');
const adminAuth=require('./middlewares/adminAuth')
// const product=require('./middlewares/imgproduct');
const sendEmail=require('./methods/sendingmail');
const passwordchangemail=require('./methods/passwordchangemail');
const forgotpasswordmain=require('./methods/forgotpasswordmail');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: './public/productimgs'});
const db=require('./methods/database')();
const cors=require('cors');

// MIDDLEWARES

// CORS MIDDLEWARE
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// app.use(cors({credentials:"true",host:'*'}))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}))


console.log("inside the server");

// handling route for the guest user
app.use('/',require('./routes/guest'));

// Handling route for the login page
app.use('/login',require('./routes/userlogin'))

// handling route for the signup page
app.use('/signup',require('./routes/usersignup'))

// Handling the verification of the mail
app.use('/verifymail',require('./routes/verifyMail'))

// Handling the route for the home
app.use('/home',require('./routes/home'));

// handling the route for the product Array using AJAX request &&  Handling route for the "Go To Cart" button

app.use('/',require('./routes/nextproductandgotocart'));


// handling route for the logout
app.use('/logout',require('./routes/logout'));

// Handling the route for the script of home.ejs file
app.use('/scriptejs',require('./routes/scriptejsfrhome'));

// Handiling the route for the change password
app.use('/changepassword',require('./routes/changepasswordUI'));
app.use('/changepass',require('./routes/changepass'))
  
// handling the route for the forgot password when the user clicks on the forgotpassword of the login button
app.use('/forgotpassword',require('./routes/forgotPassword')); 

// handling the route for the forgot password mail
app.use('/forgotpass',require('./routes/forgotPasswordmail'));    

// Handling the route for the Add cart button
app.use('/addcart',require('./routes/addcart'))



// route for handling the check wheteher increase the item quantity of the cart or not
app.use('/increaseitemcheck',require('./routes/increaseitemcheck'))

// route for increasing the quantity on click in the cart
app.use('/increaseitem',require('./routes/increaseitem'))

// route for handling the check wheteher decrease the item quantity of the cart or not
app.use('/decreaseitemcheck',require('./routes/decreaseitemcheck'))

// route for decreasing the quantity on click in the cart 
app.use('/decreaseitem',require('./routes/decreaseitem'))

// handling route for clickinhg on "Back to product Page"
app.use('/backtohome',require('./routes/backtohome'));

// ruote for deleting the cart items from the cart
app.use('/deletecartitem',require('./routes/deletecartitem'));

// handling the route for the quantity in the cart
app.use('/quantityinCart',require('./routes/quantityinCart'));

// route for rendering the admin page
app.use('/adminlogin',require('./routes/adminlogin'));

// route for the rendering the admin page
app.use('/adminpage',require('./routes/adminpage'));

// route for updating the data from admin
app.use('/updateproduct',require('./routes/updateproductAdmin'))

// route handling the delete product by the admin
app.use('/deletebyadmin',require('./routes/deletebyadmin'));

// handling the route for the formdata from the admin

app.use('/saveadminform',require('./routes/saveadminform'));



// Logging out the admin

app.use('/logoutadmin',require('./routes/logoutadmin'));









// CREATING THE ROUTES FOR THE REACT END POINTS
// route for the rendering the admin page
app.post('/reactadminpage',function(req,res,next){
    console.log('Consoling the data of adminpage:',req.body);
    let code=`SELECT * FROM userdb WHERE isAdmin='true' AND email='${req.body.email}';`
    db.checkForadmin(code,function(error,results){
        if(error)
        {
            console.log('error in finding the admin ',error);
            res.send('Error in finding the admin from main.js');
        }
        else if(results)
        {
            if(results.length>0)
            {
            console.log(results);
            console.log('Successfully found the admin');
            req.session.isAdmin=true;
            next();
            }
            else{
                res.send('adminlogin',{error:'No Such admin is present'});
                return;
            }
        }
    })
    
},adminAuth);



// server start
app.listen(port,function(err){
    if(err){
        console.log("Error in running the server");
    }
    else{
        console.log("Server is running fine on the port:",port);
    }
})