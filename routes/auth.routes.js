const authRouter = require("express").Router();
const authController = require("../controllers/auth.controllers");

authRouter.post("/register", authController.register);

module.exports = authRouter;
