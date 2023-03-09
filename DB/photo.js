const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PhotoSchema = new Schema({
  아이디: (Number, String),
  비밀번호: (Number, String),
  비밀번호확인: (Number, String),
  이메일: (Number, String),
});

module.exports = mongoose.model("Account", PhotoSchema, "Account");
