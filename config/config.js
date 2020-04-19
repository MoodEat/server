const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'MoodEat';
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = {
  dbName,
  client
}