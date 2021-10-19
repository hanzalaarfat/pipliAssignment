const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const policyRoutes = "./router/policyController";
const userRoutes = require("./router/userRouter");

global.__basedir = __dirname + "/..";

dotenv.config();
require("./db/con");
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log(req.user);
  res.send("Pipli Api");
});

app.use(userRoutes);
// app.use(policyRoutes);

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`sarver started at port ${process.env.PORT} `);
});
