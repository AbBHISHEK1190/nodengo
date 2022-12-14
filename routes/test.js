const express = require('express')
const app = express()
const routers=express.Router()

routers.get('/',(req,res)=>{
  res.send('wndjhejh');  
})
routers.get('/blog_new',(req,res)=>{
  res.send('blog_new');
    // res.render('template/blog',{
    //   directory:directory
    // });  
  })

  routers.get('/hdhdhdh',(req,res)=>{
    res.send('hdhdhdh');  
  })
  module.exports=routers