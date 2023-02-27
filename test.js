require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const cw = require('./public/allgame(test)') //크롤링 js데이터 가져오기
const history = require('connect-history-api-fallback') //새로고침후 데이터 유지
// const Photo = require("./DB/ori.js");
const app = express()
const port = 3000
const _path = path.join(__dirname, './dist')
// crypto 암호화 모듈
const crypto = require('crypto')

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
module.exports = Photo

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
    // 암호화 하다가 맘
    crypto.createHash('sha512').update(B).digest('base64')
    crypto.createHash('sha512').update(B).digest('hax')

    crypto.randomBytes(64, (err, salt) => {
      crypto.pbkdf2(
        B,
        salt.toString('base64'),
        100000,
        64,
        'sha512',
        (err, key) => {
          console.log(key.toString('base64'))
        }
      )
    })

    const _data = {
      아이디: A,
      비밀번호: B,
      비밀번호확인: C,
      이메일: D
    }
    // console.log(_data.A, _data.B);
    const new_photo = new Photo(_data)
    const t = await new_photo.save()
    console.log(t)
  }
  main()
})
// const Photo1 = require('./DB/maincrawling.js')
// module.exports = Photo1

// app.post('/read', (req, res) => {
//   const A = cw.ax().then((v) => {
//     res.send(v)
//   })

//   const main2 = async () => {
//     const _data = {
//       메인컨텐츠: A
//     }
//     // console.log(_data.A, _data.B);
//     const new_photo = new Photo1(_data)
//     const t = await new_photo.save()
//     console.log(t)
//   }
//   main2()
// })

// app.get('/dbr/:date', (req, res) => {
//   const date = req.params.date
//   const read = async () => {
//     const t = await VSchema.find({ date }, { _id: 0, __v: 0 })
//       .lean()
//       .then((t) => {
//         res.send(t)
//         console.log(t)
//       })
//   }
//   read()
// })

console.log(_path)
app.use(history())
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
