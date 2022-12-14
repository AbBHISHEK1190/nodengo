const usermodel=require('../models/user')
const bcrypt=require('bcrypt');
const jsonwebtoken=require('jsonwebtoken');
const dotenv=require('dotenv');
const { createtoken } = require('../helper/jwt')

// get config vars
dotenv.config();
// access config var


const SECRET_KEY='NptesApi';


const register=async (req,res)=>{
    
    const result = createtoken(4, 5,10);
    res.send(result);


    // res.render('template/admin/signup',{
    //     directory:" abhishek"
    //   });  


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
    const token=jsonwebtoken.sign({email:result,id:result._id},process.env.key, {
        expiresIn: "120s"
       
 });
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
        res.send(req.body);
    }
    else
    {
        res.render('template/admin/login',{
            directory:" abhishek"
          });  
    }
    // var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJ1c2VybmFtZSI6InFqa2R3ZHd1aWR5dSIsImVtYWlsIjoicWprZHdkd3VpZHl1cWprZHdkd3VpZHl1QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEx0RWxMSXR0VUR1NGxwNVFFazZDQS4wb2h4QzE5N3pXaFB4T2FDYm1lS1Vwai5PWWdiQXJhIiwiX2lkIjoiNjM2YTc2MDcyN2JkOGVmODliNDA3OTkzIiwiX192IjowfSwiaWQiOiI2MzZhNzYwNzI3YmQ4ZWY4OWI0MDc5OTMiLCJpYXQiOjE2Njc5MjE0MTUsImV4cCI6MTY2NzkyMTUzNX0.tJvqND0lQflmUQ60KfSu-mVaD2ZcTp4ZdS2gcQi4NOs";
    // res.send('sjsjs');
   
    //    var abc=await jsonwebtoken.verify(token,process.env.key,)
    //    res.send('abc');
 
    }
    

module.exports={register,login,authregister};
