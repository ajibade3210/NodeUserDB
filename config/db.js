const mongoose = require("mongoose");

/**
 * Using localDB
 * "mongodb://localhost:27017/node-rest"
 */
const connectDB = (URI) => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
