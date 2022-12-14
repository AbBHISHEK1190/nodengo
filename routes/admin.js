const express = require('express')
const app = express()
const router=express.Router()

const { dashboard } = require('../controller/admin.js')
const {isLogin,isLogout } =require('../middleware/auth')



router.get('/dashboard',isLogin,dashboard) 





module.exports = router;
