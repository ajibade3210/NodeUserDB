const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      default: "",
    },
    last_name: {
      type: String,
      default: "",
    },
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

schema.pre("save", function (next) {
  let user = this;
  //Only Hash Password when Password is Changed (or New)
  if (!user.isModified("password")) return next();

  //Generate a Salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    //Hash the Password Using Our New Salt
    bcrypt
      .hash(user.password, salt)
      .then((hash) => {
        //Overide Reguler Password with Hashed Password
        user.password = hash;
        next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  });
});

const User = mongoose.model("User", schema);
module.exports = User;
