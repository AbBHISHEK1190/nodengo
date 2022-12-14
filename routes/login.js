const express = require('express')
const db=require("../config/database.js")
const hbs = require('hbs')
const app = express()
const router=express.Router()

const usermodel=require("../models/user.js")



// const abhi=abhishek
const path=require('path')
const { login, register,authregister,logout,checksess } = require('../controller/user.js')
const {isLogin,isLogout } =require('../middleware/auth')
const { createtoken } = require('../helper/jwt.js')

app.set('view engine', 'hbs')

const adminpartialspath=path.join(__dirname,"..views/paritials/admin")
console.log(adminpartialspath);
hbs.registerPartials(adminpartialspath);



// router.get('/login',isLogin,login)
// router.post('/login',isLogin,login)
router.get('/login',login)
router.post('/login',login)
router.get('/logout',logout)
router.get('/checksess',checksess)



router.get('/register',register) 
router.post('/authregister',authregister)

router.post('/createtoken',createtoken)


module.exports = router;
