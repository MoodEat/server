const express = require('express');
const app = express();
// const { MongoClient } = require('mongodb')
const RestaurantRouter = require('./router')
const {dbName, client} = require('./config/config')

app.use(express.urlencoded({ 
    extended: false 
}))

app.use(express.json())

// MongoClient.connect(uri, {
//     useUnifiedTopology: true
//   })
//   .then( client => {
//       console.log('connected to database')
//       const db = client.db(db_name)
//       app.use((req, res, next) => {
//         req.db = db
//         next()
//     })
//     app.use(RestaurantRouter)
//   })
//   .catch(error => {
//       console.error(error, '===========')
//     })

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



