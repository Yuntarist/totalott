require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const history = require('connect-history-api-fallback') //새로고침후 데이터 유지
const app = express()
const port = 3000
const _path = path.join(__dirname, './dist')
// crypto 암호화 모듈
// const crypto = require("crypto");

const USER = 'dtd'
const PWD = 123123
const HOST = '127.0.0.1:27017'
const DB = 'trif'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

mongoose.set('strictQuery', false) // 6.0 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err))
const Photo = require('./DB/photo.js')
const maincrawling = require('./DB/maincrawling.js')
module.exports = Photo
module.exports = maincrawling

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/about4', function (req, res) {
  // front 서버에서 post 방식으로 전송받음
  // console.log(req.body.resultgood);
  const A = req.body.userID
  const B = req.body.userPW
  const C = req.body.userPW2
  const D = req.body.userEM

  const main = async () => {
    const _data = {
      아이디: A,
      비밀번호: B,
      비밀번호확인: C,
      이메일: D
    }

    const new_photo = new Photo(_data)
    const t = await new_photo.save()
    console.log(t)
  }
  main()
})

console.log(_path)
app.use(history())
app.use('/', express.static(_path))
app.use(logger('tiny'))

// 몽고디비에서 읽어오는형식
// 엑시오스를 이용해 받고 보내고를 할 수 있도록 만들기
app.get('/about2', (req, res) => {
  const main2 = async () => {
    const t2 = await maincrawling.find()
    console.log(t2)
    res.send(t2)
  }
  main2()
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
