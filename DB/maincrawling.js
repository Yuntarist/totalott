const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PhotoSchema1 = new Schema({
  메인컨텐츠: String
})

module.exports = mongoose.model('trif', PhotoSchema1, 'trif')
