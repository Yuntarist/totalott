const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QnA = new Schema({
  문의: (Number, String),
});

module.exports = mongoose.model("QnA", QnA, "QnA");
