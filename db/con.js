const mongoose = require("mongoose");
const path = require("path");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });

const dotenv = require("dotenv");
dotenv.config();

const Db = process.env.DATABASE;
mongoose
  .connect(Db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("connectin suceesfull");
  })
  .catch((err) => {
    console.log("data base is not connected", err);
  });
