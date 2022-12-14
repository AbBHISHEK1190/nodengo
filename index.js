const express = require('express')
const hbs = require('hbs')
const app = express()
const session = require('express-session')
const cookieParser = require("cookie-parser");
const path=require('path')
app.set('view engine', 'hbs')
const dotenv=require('dotenv');
// get config vars
dotenv.config();
// access config var
console.log(process.env.sessionkey);
// var bodyParser = require('body-parser');
app.use(express.urlencoded({extended: 'false'}))

const oneDay = 1000 * 60 * 60 * 24;
app.use(cookieParser());

app.use(session({
    name:'auth_id',
    secret: "process.env.sessionkey",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    // cookie: { secure: true },
    resave: true 
}));




//partialspath using for common headers and footers
const partialspath=path.join(__dirname,"views/paritials")
const adminpartialspath=path.join(__dirname,"views/paritials")

const directory=path.join(__dirname,"views/assets")
app.use(express.static(__dirname+'/views/assets'))
// const blog=require(path.join(__dirname,'/routes/blog'))
const homeroute=require("./routes/blog.js")

const test=require("./routes/test.js")

const admin=require("./routes/admin.js")

// const db=require("./config/database.js")


//  app.use(express.json())

// console.log(blog);
console.log(directory)
// console.log(partialspath);
hbs.registerPartials(partialspath);
hbs.registerPartials(adminpartialspath);


app.use('/',homeroute)

app.use('/',admin)
app.use('/',require("./routes/test"))
app.use('/',require("./routes/login"))



app.listen(3000);