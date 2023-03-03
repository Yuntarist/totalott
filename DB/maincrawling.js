const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PhotoSchema1 = new Schema(
  {
    steam_title: String,
    steam_price: String,
    steam_discount_percent: String,
    steam_discount_price: String,
    steam_all: String,
    gamersgate_title: String,
    gamersgate_price: String,
    gamersgate_discount_percent: String,
    gamersgate_discount_price: String,
    gamersgate_all: String,
    greenmangaming_title: String,
    greenmangaming_price: String,
    greenmangaming_discount_percent: String,
    greenmangaming_discount_price: String,
    greenmangaming_all: String,
    dream_title: String,
    dream_price: String,
    dream_discount_percent: String,
    dream_discount_price: String,
    dream_all: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("trif", PhotoSchema1, "trif");
