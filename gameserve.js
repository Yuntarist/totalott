require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const history = require('connect-history-api-fallback') //새로고침후 데이터 유지
const app = express()
app.use(history())
const port = 3000
const _path = path.join(__dirname, './dist')
// const crypto = require('crypto')// crypto 암호화 모듈
//몽고db 
const USER = process.env.mdbid
const PWD = process.env.mdbpwd
const HOST = process.env.mdbhost
const DB = 'mdb'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
const Photo = require('./photo.js')//몽고db Schema 
const maincrawling = require('./crawlingphoto.js')
mongoose.set('strictQuery', false) // 6.0 이후 권장사항
mongoose
.connect(mongodbURL, { useNewUrlParser: true })
.then(() => console.log('connection successful'))
.catch((err) => console.log(err))
module.exports = Photo
module.exports = maincrawling
    
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//아이디 중복체크
app.get('/about4e1/:ID',(req, res) =>{
  let 아이디 = req.params.ID
  console.log(아이디)
  ;(async()=>{
    const t = await Photo.find({아이디},{id:0,__v:0})
    .lean().then((t)=>{
      console.log(t)
      if(t[0] === undefined ){
        res.json({result: 1});
      }else if(t[0].아이디 === 아이디 ){
        res.json({result:0})
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
app.get('/about3/:loginid/:loginpwd',(req,res)=>{
  let 아이디 = req.params.loginid
  let 비밀번호 = req.params.loginpwd
  ;(async()=>{
    const t = await Photo.find({아이디},{id:0,__v:0})
    .lean().then((t)=>{
      console.log(t)
      if(t[0] === undefined ){
        res.json({result: 0});
      }else if(t[0].비밀번호 !==비밀번호 ){
        res.json({result:2})
        }
        else {
          res.cookie('user_id', t[0].아이디);
          res.json({result:1})
        }
  })
})()
  })

  //아이디 찾기
  app.post('/about5/:emailfind',(req,res)=>{
  let 이메일 = req.params.emailfind
  console.log(이메일)
  ;(async()=>{
    const t = await Photo.find({이메일},{id:0,__v:0})
    .lean().then((t)=>{
      console.log(t)
      if(t[0] === undefined ){
        res.json({result: 1});
      }else if(t[0].이메일 === 이메일 ){
        res.send(t[0].아이디)  
        }
  })
})()
  })

   //비밀번호 찾기
   app.post('/about5up',(req,res)=>{
    let 이메일 = req.body.emailfind2
    let 아이디 = req.body.ididfind
    console.log(이메일)
    console.log(아이디)
    ;(async()=>{
      let t = await Photo.find({이메일},{})
      .lean().then((t)=>{
        console.log(t)
       if(t[0] === undefined){
        res.json({result: 0});
       }else if(t[0].아이디 !== 아이디){
        res.json({result: 2});
       }else if(t[0].이메일||이메일 === t[0].아아디||아이디){
          res.send(t[0].비밀번호)
      }
    })
  })()
    })


// 몽고디비에서 읽어오는형식
// 엑시오스를 이용해 받고 보내고를 할 수 있도록 만들기
app.get('/about2', (req, res) => {
  const main2 = async () => {
    const t2 = await maincrawling.find()
    res.send(t2)
  }
  main2()
})
app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})