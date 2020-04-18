const express = require('express');
const app = express();
const { MongoClient } = require('mongodb')
const RestaurantRouter = require('./router')
const db_name = process.env.DB_NAME
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const uri = `mongodb+srv://${user}:${password}@cluster0-gjr7b.mongodb.net/${db_name}?retryWrites=true&w=majority`

app.use(express.urlencoded({ 
    extended: false 
}))

app.use(express.json())

MongoClient.connect(uri, {
    useUnifiedTopology: true
  })
  .then( client => {
      console.log('connected to database')
      const db = client.db(db_name)
      app.use((req, res, next) => {
        req.db = db
        next()
    })
    app.use(RestaurantRouter)
  })
  .catch(error => {
      console.error(error)
    })


module.exports = app



