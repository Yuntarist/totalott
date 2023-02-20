require("dotenv").config();
const mongoose = require("mongoose");
const USER = "ljm";
const PWD = "12345";
const HOST = "127.0.0.1:27017";
const DB = "ljm";
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;
// mongoose.set('useFindAndModify', false) // 6.0 이후부터는 자동관리
mongoose.set("strictQuery", false); // 6.0 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
const Photo = require("./photo.js");
module.exports = Photo;
