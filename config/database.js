
const mongoose = require('mongoose');
// used promise with db connctivity
mongoose.connect("mongodb://localhost:27017/ngo_data",{useNewUrlParser:true}).then(()=>console.log("connection is successfull.")).catch((error)=>console.log(error))



module.exports=mongoose;


