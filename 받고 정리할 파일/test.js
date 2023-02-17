const express = require('express')
require('dotenv').config()
const path = require('path')
const logger = require('morgan')
const cw = require('./public/steamcrawling0') //크롤링 js데이터 가져오기
const history = require('connect-history-api-fallback') //새로고침후 데이터 유지

const app = express()
const port = 3000
const _path = path.join(__dirname, './dist')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newaccoutSchema = new Schema({
  ID: String,
  PWD: Number,
  PWDagain: Number,
  email: String,
  Name: String,
  NickName: String,
  PhoneNumber: Number,
  Address: String
})
module.exports = mongoose.model('ori_mongoose', newaccoutSchema)

console.log(_path)
app.use(history())
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/about1', (req, res) => {
  console.log('준비')
  cw.ax().then((v) => {
    res.send(v)
  })
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
