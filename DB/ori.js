const mongoose = require('mongoose')
const USER = 'dtd'
const PWD = 123123
const HOST = '127.0.0.1:27017'
const DB = 'trif'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongoose.set('useFindAndModify', false) // 6.0 이후부터는 자동관리
mongoose.set('strictQuery', false) // 6.0 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err))
const Photo = require('./photo.js')
module.exports = Photo

// 현재 env 안됨 230221 10:00
