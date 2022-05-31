const app = require("./app");
const http = require("http");
const connectDB = require("./config/db");
require("dotenv").config();
require("./config/extend-node-iv");

const PORT = process.env.PORT || 5555;

const server = http.createServer(app);
connectDB(process.env.MONGO_URI);

server.listen(PORT, () => {
  console.log(`Listening To Server On Port: ${PORT}`);
});
