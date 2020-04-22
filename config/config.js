const url = 'mongodb://localhost:27017';
const dbName = 'MoodEatTest';
const mongoose = require('mongoose')
const client = mongoose(url, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = {
  dbName,
  client
}