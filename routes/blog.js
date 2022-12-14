const express = require('express')
const hbs = require('hbs')
const app = express()
const router=express.Router()
// const abhi=abhishek


const path=require('path')
app.set('view engine', 'hbs')

// const partialspath=path.join(__dirname,"views/template")
//partialspath using for common headers and footers
const partialspath=path.join(__dirname,"..views/paritials")
const directory=path.join(__dirname,"..views/assets");
app.use(express.static(__dirname+'../views/assets'))
// console.log(directory)
console.log(partialspath);
hbs.registerPartials(partialspath);

router.get('/',(req,res)=>{
  res.render('home',{
    directory:directory
  });  
})

router.get('/about-us',(req,res)=>{
  res.render('template/about_us',{
    directory:directory
  });  
})

router.get('/services',(req,res)=>{
  res.render('template/services',{
    directory:directory
  });  
})
router.get('/gallery',(req,res)=>{
  res.render('template/gallery',{
    directory:directory
  });  
})

router.get('/blog',(req,res)=>{
  res.render('template/blog',{
    directory:directory
  });  
})
router.get('/blog',(req,res)=>{
  res.render('template/blog',{
    directory:directory
  });  
})

router.get('/contact-us',(req,res)=>{
  res.render('template/contact_us');  
})



module.exports = router;
