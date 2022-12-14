const mongoose = require("mongoose");
const { use } = require("../routes/blog");
// const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});




// // encrypt the password before storing
// userSchema.methods.encryptPassword = (password) => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
// };

// userSchema.methods.validPassword = function (candidatePassword) {
//   if (this.password != null) {
//     return bcrypt.compareSync(candidatePassword, this.password);
//   } else {
//     return false;
//   }
// };


// var userdata= mongoose.model("User", userSchema);

// var user = new user({
//     username: 'abhishek',
//     email: 'test@gmail.com',
//     password: '12345678'
//   });
//   user.save(function (err, results) {
//     console.log(results._id);
//   });

module.exports = mongoose.model("User", userSchema);
// module.exports=userdata;
