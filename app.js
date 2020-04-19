const express = require('express');
const app = express();
const RestaurantRouter = require('./router')
const {dbName, client} = require('./config/config')

app.use(express.urlencoded({ 
    extended: false 
}))

app.use(express.json())


client.connect(err => {
  if (err) console.log(err)
  else console.log('connct mongodb successfully')

  const db = client.db(dbName)

  app.use((req, res, next) => {
    req.db = db
    next()
  })

  app.use(RestaurantRouter)
  // app.use(errorHandler)
})

module.exports = app



