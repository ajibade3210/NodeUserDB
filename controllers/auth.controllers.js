const { Validator } = require("node-input-validator");
const user = require("../models/user.models");

/**
 *
 * Using an External Validator dependency
 */
async function register(req, res) {
  const v = new Validator(req.body, {
    first_name: "required|minLength:2|maxLength:100",
    last_name: "required|minLength:2|maxLength:100",
    email: "required|email|unique:User,email",
    password: "required",
  });

  const matched = await v.check();
  if (!matched) {
    return res.status(422).send(v.errors);
  }

  try {
    const newUser = new user({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });

    let userData = await newUser.save();
    console.log("PASSWORD", userData);
    return res.status(200).send({ message: "Reg Success", data: userData });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
}

module.exports = {
  register,
};
