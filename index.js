<<<<<<< HEAD
const express = require('express');
const bodyParser=require('body-parser')
const app = express();
const PORT = 3005;
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  
    res.render('home');
  });
  app.get('/home',(req,res)=>{
    res.render('home')

  })
  

  app.get('/login',(req,res)=>{
    
    res.render('login');

  })
  app.get('/signup',(req,res)=>{
    res.render( 'signup' );

  })
  app.post('/signup',(req,res)=>{
    const data={
      name : req.body.name ,
      email: req.body.email,
      password: req.body.password
    }
    
    res.render('login',{ data });
    
  })
  app.post('/login',(req,res)=>{
    
       
     const logindata={
      newname:req.body.name,
      newemail:req.body.email,
      newpassword : req.body.password
     }
     
    
    
     
      console.log("log in data is y" +logindata.newname)
      
      res.render('loginedhome',{logindata})
     } )
     
   
 
    
    
    
  
 
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });
=======
const express = require("express");
const dbConnect = require("./db/db.js");
const app = express();
const path = require("path");
const Product = require("./model/productModel.js");
const User = require('./model/userModel.js');
const methodOverride = require('method-override');
const productRouter = require('./routes/productRoutes.js')
const reviewRouter = require('./routes/reviewRoutes.js')
const userRouter = require('./routes/userRoutes.js')
const cartRouter = require('./routes/cartRoutes.js');
const session = require('express-session') 
const passport = require('passport');
const LocalStrategy = require('passport-local');
const ejsmate = require('ejs-mate');
const flash = require('connect-flash');
const port = 5000;

app.engine('ejs', ejsmate);
app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

dbConnect();
const sessionConfig = {
    secret: 'keyboard-cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        // httpOnly:true,
        maxAge: 60 * 60 * 24 * 7 * 1000 * 1,
    }
  }

app.use(session(sessionConfig));
app.use(flash());

// passport.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user;
    // console.log(req.user);
    next()
})


app.use(productRouter);
app.use(reviewRouter);
app.use(userRouter);
app.use(cartRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});
>>>>>>> new
