require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const history = require('connect-history-api-fallback')
const app = express()
const port = 3000
const _path = path.join(__dirname, './dist')
const USER = 'MEVN'
const PWD = 5959
const HOST = '127.0.0.1:27017'
const DB = 'mdb'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
let cookieParser = require('cookie-parser')
app.use(cookieParser())
mongoose.set('strictQuery', false)
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
app.use(history())
app.use('/', express.static(_path))
app.use(logger('tiny'))
//아이디 중복체크
app.get('/about4e1/:ID', (req, res) => {
  let 아이디 = req.params.ID
  console.log(아이디)
  ;(async () => {
    const t = await Photo.find({ 아이디 }, { id: 0, __v: 0 })
      .lean()
      .then((t) => {
        console.log(t)
        if (t[0] === undefined) {
          res.json({ result: 1 })
        } else if (t[0].아이디 === 아이디) {
          res.json({ result: 0 })
        }
      })
  })()
})
//회원가입
app.post('/about4', function (req, res) {
  const A = req.body.userID
  const B = req.body.userPW
  const C = req.body.userPW2
  const D = req.body.userEM
  console.log(A)
  ;(async () => {
    const _data = {
      아이디: A,
      비밀번호: B,
      비밀번호확인: C,
      이메일: D
    }
    const new_photo = new Photo(_data)
    const t = await new_photo.save()
    // console.log(t)
  })()
})
//로그인
app.post('/about3', (req, res) => {
  let 아이디 = req.body.logininid
  let 비밀번호 = req.body.logininpwd
  console.log(아이디)
  console.log(비밀번호)
  ;(async () => {
    const t = await Photo.find({ 아이디 }, { id: 0, __v: 0 })
      .lean()
      .then((t) => {
        console.log(t)
        if (t[0] === undefined) {
          res.json({ result: 0 })
        } else if (t[0].비밀번호 !== 비밀번호) {
          res.json({ result: 2 })
        } else {
          res.cookie('user_id', t[0].아이디)
          res.json({ result: 1 })
        }
      })
  })()
})
//아이디 찾기
app.post('/about5', (req, res) => {
  let 이메일 = req.body.email
  ;(async () => {
    const t = await Photo.find({ 이메일 }, { id: 0, __v: 0 })
      .lean()
      .then((t) => {
        console.log(t)
        if (t[0] === undefined) {
          res.json({ result: 1 })
        } else if (t[0].이메일 === 이메일) {
          res.send(t[0].아이디)
        }
      })
  })()
})
//비밀번호 찾기
app.post('/about5up', (req, res) => {
  let 이메일 = req.body.email
  let 아이디 = req.body.id
  //임시비밀번호
  let ranValue1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let ranValue2 = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  let ranValue3 = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  let ranValue4 = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

  let temp_pw = ''

  for (i = 0; i < 2; i++) {
    let ranPick1 = Math.floor(Math.random() * ranValue1.length)
    let ranPick2 = Math.floor(Math.random() * ranValue2.length)
    let ranPick3 = Math.floor(Math.random() * ranValue3.length)
    let ranPick4 = Math.floor(Math.random() * ranValue4.length)
    temp_pw =
      temp_pw +
      ranValue1[ranPick1] +
      ranValue2[ranPick2] +
      ranValue3[ranPick3] +
      ranValue4[ranPick4]
    console.log(ranValue1[ranPick1])
  }

  console.log(req.body)
  ;(async () => {
    let t = await Photo.updateOne(
      {},
      {
        $set: {
          비밀번호: temp_pw
        }
      },
      { upsert: true }
    )
    console.log(t)
    //비밀번호 변경조회
    t = Photo.find({ 이메일 }, { id: 0, __v: 0 })
      .lean()
      .then((t) => {
        console.log(t)
        if (t[0] === undefined || '') {
          res.json({ result: 0 })
        } else if (t[0].아이디 !== 아이디) {
          res.json({ result: 2 })
        } else if (t[0].이메일 || 이메일 === t[0].아이디 || 아이디) {
          res.send(t[0].비밀번호)
        }
      })
  })()
})
//메인페이지 아이디 쿠키전송
app.get('/main', (req, res) => {
  res.send(req.cookies.user_id)
  console.log(req.cookies)
})
//메인페이지 아이디 쿠키 삭제
app.get('/delete', function (req, res) {
  res.clearCookie('user_id')
  res.redirect('/')
})
// DB에 저장된 데이터를 vue로 전송
app.get('/steam_new_title', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_new_title: 1,
        _id: 0
      }
    )
    console.log(t[0].steam_new_title)
    console.log(typeof t)
    res.send(t[0].steam_new_title)
  }
  main3()
})
app.get('/steam_price', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_price: 1,
        _id: 0
      }
    )
    console.log(t[0].steam_price)
    console.log(typeof t)
    res.send(t[0].steam_price)
  }
  main3()
})
app.get('/steam_discount_percent', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_discount_percent: 1,
        _id: 0
      }
    )
    console.log(t[0].steam_discount_percent)
    console.log(typeof t)
    res.send(t[0].steam_discount_percent)
  }
  main3()
})
app.get('/steam_discount_price', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_discount_price: 1,
        _id: 0
      }
    )
    console.log(t[0].steam_discount_price)
    console.log(typeof t)
    res.send(t[0].steam_discount_price)
  }
  main3()
})
app.get('/gamersgate_new_title', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        gamersgate_new_title: 1,
        _id: 0
      }
    )
    console.log(t[0].gamersgate_new_title)
    console.log(typeof t)
    res.send(t[0].gamersgate_new_title)
  }
  main3()
})
app.get('/gamersgate_price', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        gamersgate_price: 1,
        _id: 0
      }
    )
    console.log(t[0].gamersgate_price)
    console.log(typeof t)
    res.send(t[0].gamersgate_price)
  }
  main3()
})
app.get('/gamersgate_discount_percent', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        gamersgate_discount_percent: 1,
        _id: 0
      }
    )
    console.log(t[0].gamersgate_discount_percent)
    console.log(typeof t)
    res.send(t[0].gamersgate_discount_percent)
  }
  main3()
})
app.get('/gamersgate_discount_price', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        gamersgate_discount_price: 1,
        _id: 0
      }
    )
    console.log(t[0].gamersgate_discount_price)
    console.log(typeof t)
    res.send(t[0].gamersgate_discount_price)
  }
  main3()
})
app.get('/greenmangaming_new_title', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        greenmangaming_new_title: 1,
        _id: 0
      }
    )
    console.log(t[0].greenmangaming_new_title)
    console.log(typeof t)
    res.send(t[0].greenmangaming_new_title)
  }
  main3()
})
app.get('/greenmangaming_price', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        greenmangaming_price: 1,
        _id: 0
      }
    )
    console.log(t[0].greenmangaming_price)
    console.log(typeof t)
    res.send(t[0].greenmangaming_price)
  }
  main3()
})
app.get('/greenmangaming_discount_percent', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        greenmangaming_discount_percent: 1,
        _id: 0
      }
    )
    console.log(t[0].greenmangaming_discount_percent)
    console.log(typeof t)
    res.send(t[0].greenmangaming_discount_percent)
  }
  main3()
})
app.get('/greenmangaming_discount_price', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        greenmangaming_discount_price: 1,
        _id: 0
      }
    )
    console.log(t[0].greenmangaming_discount_price)
    console.log(typeof t)
    res.send(t[0].greenmangaming_discount_price)
  }
  main3()
})
app.get('/dream_new_title', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        dream_new_title: 1,
        _id: 0
      }
    )
    console.log(t[0].dream_new_title)
    console.log(typeof t)
    res.send(t[0].dream_new_title)
  }
  main3()
})
app.get('/dream_price', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        dream_price: 1,
        _id: 0
      }
    )
    console.log(t[0].dream_price)
    console.log(typeof t)
    res.send(t[0].dream_price)
  }
  main3()
})
app.get('/dream_discount_percent', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        dream_discount_percent: 1,
        _id: 0
      }
    )
    console.log(t[0].dream_discount_percent)
    console.log(typeof t)
    res.send(t[0].dream_discount_percent)
  }
  main3()
})
app.get('/dream_discount_price', (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        dream_discount_price: 1,
        _id: 0
      }
    )
    console.log(t[0].dream_discount_price)
    console.log(typeof t)
    res.send(t[0].dream_discount_price)
  }
  main3()
})
// 시간이 넘처난다면 반복문을 이용하여 보낼 수 있도록 해보기
app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
