const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PhotoSchema = new Schema({
  albumId: Number,
  아이디: String,
  비밀번호: Number
})

module.exports = mongoose.model('Photo', PhotoSchema)
