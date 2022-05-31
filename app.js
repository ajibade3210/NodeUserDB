const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth.routes");

const app = express();

app.use(cors());
//Parse application/json
app.use(express.json());
//parse application/x-ww-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use("/auth",authRouter);

app.get("/", (req, res) => {
  res.send({ message: "First Endpoint" });
});

module.exports = app;
