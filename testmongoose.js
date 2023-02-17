const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newaccountSchema = new Schema({
  ID: String,
  PWD: Number,
  PWDagain: Number,
  email: String,
  Name: String,
  NickName: String,
  PhoneNumber: Number,
  Address: String
})
module.exports = mongoose.model('newaccount', newaccountSchema)
