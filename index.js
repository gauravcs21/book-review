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