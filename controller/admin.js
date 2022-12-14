const express = require('express')
const hbs = require('hbs')
const session = require('express-session')
const app = express()
const router=express.Router()
// const abhi=abhishek
const path=require('path')
app.set('view engine', 'hbs')

const adminpartialspath=path.join(__dirname,"..views/paritials/admin")
console.log(adminpartialspath);
hbs.registerPartials(adminpartialspath);




const dashboard=(req,res)=>{
    
console.log(req.session.user_id);

    res.render('template/admin/index',{
        message:" abhishek"
      });  


}

// router.get('/admin/dashboard',(req,res)=>{
//   res.render('template/admin/index',{
//     message:" abhishek"
//   });  
// })




module.exports = {dashboard};
