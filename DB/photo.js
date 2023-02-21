const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PhotoSchema = new Schema({
  아이디: String,
  비밀번호: Number,
  비밀번호확인: Number,
  이메일: String
})

module.exports = mongoose.model('trif', PhotoSchema, 'trif')
