const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require("cookie-parser");
const usermodel=require('../models/user')
const bcrypt=require('bcrypt');
const jsonwebtoken=require('jsonwebtoken');
const dotenv=require('dotenv');
const { createtoken } = require('../helper/jwt');
const user = require('../models/user');
let RedisStore = require("connect-redis")(session)

// const localStorage=require('localStorage');
// global.localStorage = new localStorage('./scratch');

const user_id='';


// get config vars
dotenv.config();
// access config var
// console.log(process.env.sessionkey);

const SECRET_KEY='NptesApi';

// const oneDay = 10000000000000 * 60 * 60 * 24;
// app.use(session({
//     name:'auth_id',
//     secret: "process.env.sessionkey",
//     saveUninitialized:true,
//     cookie: { maxAge: oneDay },
//     resave: true 
// }));


// app.use(cookieParser());


const register=async (req,res)=>{
    
    // const result = createtoken(4, 5,10);
    // res.send(result);


    res.render('template/admin/signup',{
        directory:" abhishek"
      });  


}

const authregister= async (req,res)=>{
    
   const { username, email, password } = req.body 
// res.send(req.body);
try{
    const existinguser=await usermodel.findOne({email:email});
    if(existinguser)
    {
        // res.send('user already exists');
        res.redirect('register')

    }
    const hashpassword=await bcrypt.hash(password,10)
    // res.send(process.env.TOKEN_SECRET)
   // res.send(hashpassword);
    const result= await usermodel.create({
        email:email,
        password:hashpassword,
        username:username
    })
// res.send(result);
const doc = await Person.create(result);

    // res.status(201).json({user:result,token:token})
 
    res.send(token)
}
catch(error){
    console.log(error);
    res.status(500);
}

}


const login=async (req,res)=>{
    if(req.body.username && req.body.password)
    {
    
        const userdata=await user.find({email:req.body.username})
        
        if(userdata)
        {
            // res.send(userdata);
            const passwordMatch=await bcrypt.compare(req.body.password,userdata[0].password)
               if(passwordMatch==true)
               {
                
                // const localStorage = localStorage.getItem("myObject");             
                req.session.user_id=userdata;
                // localStorage.setItem("myObject", JSON.stringify(req.session))
                // localStorage.setItem('myFirstKey',req.session);
                // res.send(req.session);
                res.redirect('/dashboard');
                // res.send(req.session.user_id);
                // session
               }
               else
               {
                
                res.send('not match');
               }
        }
     
    }
    else
    {
       

        res.render('template/admin/login',{
            directory:" abhishek"
          });  
    }
   
 
    }
    

    const logout=(req,res)=>{
        // res.send(req.session.data);
        req.session.destroy();
        res.redirect('/');
    }

    const checksess=(req,res)=>{
        res.send(req.session);
    }
module.exports={register,login,authregister,logout,checksess};
