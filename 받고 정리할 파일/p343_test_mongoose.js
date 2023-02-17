require
const mongoose = require('mongoose')
const Photo = require('./p343/photo.js')
const fs = require('fs')
const path = require('path')
const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err))
const _path = path.join(__dirname, './p343/photo.json')
const main = async () => {
  const t = JSON.parse(fs.readFileSync(_path).toString())
  console.time('5000건의 데이터 삽입')
  Photo.insertMany(t, function (error, docs) {
    // insertMany 데이터 집어넣는 역할
    console.timeEnd('5000건의 데이터 삽입')
  })
}
main()
