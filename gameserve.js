require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const cw = require('./public/allgame.js') //크롤링 js데이터
const history = require('connect-history-api-fallback') //새로고침후 데이터 유지
const app = express()
const port = 3000
const _path = path.join(__dirname, './dist')
// const crypto = require('crypto')// crypto 암호화 모듈

const USER = process.env.mdbbid
const PWD = process.env.mdbpwd
const HOST = process.env.mdbhost
const DB = 'mdb'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

mongoose.set('strictQuery', false) // 6.0 이후 권장사항
mongoose
.connect(mongodbURL, { useNewUrlParser: true })
.then(() => console.log('connection successful'))
.catch((err) => console.log(err))
const Photo = require('./photo.js')//몽고db Schema 
module.exports = Photo

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/about4', function (req, res) {
  // front 서버에서 post 방식으로 전송받음
  const A = req.body.userID
  const B = req.body.userPW
  const C = req.body.userPW2
  const D = req.body.userEM

  ;(async () => {
    // // 암호화 하다가 맘
    // crypto.createHash('sha512').update(B).digest('base64')
    // crypto.createHash('sha512').update(B).digest('hax')

    // crypto.randomBytes(64, (err, salt) => {
    //   crypto.pbkdf2(
    //     B,
    //     salt.toString('base64'),
    //     100000,
    //     64,
    //     'sha512',
    //     (err, key) => {
    //       console.log(key.toString('base64'))
    //     }
    //   )
    // })
    const _data = {
      아이디: A,
      비밀번호: B,
      비밀번호확인: C,
      이메일: D
    }
    const new_photo = new Photo(_data)
    const t = await new_photo.save()
    console.log(t)
  })()
})

console.log(_path)
app.use(history())
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/about2', (req, res) => {
  console.log('준비')
  cw.ax().then((v) => {
    res.send(v)
  })
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})