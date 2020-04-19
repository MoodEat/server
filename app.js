const express = require('express');
const app = express();
const routes = require('./routes')
// const {dbName, client} = require('./config/config')
const morgan = require('morgan')
const errorHandler = require('./middlewares/errorhandler')
const cors = require('cors')


const { MongoClient } = require('mongodb')
const db_name = process.env.DB_NAME
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const uri = `mongodb+srv://${user}:${password}@cluster0-gjr7b.mongodb.net/${db_name}?retryWrites=true&w=majority`


app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ 
    extended: false 
}))
app.use(express.json())


// client.connect(err => {
//   if (err) console.log(err)
//   else console.log('connct mongodb successfully')

//   const db = client.db(dbName)

//   app.use((req, res, next) => {
//     req.db = db
//     next()
//   })

//   app.use(routes)
//   app.use(errorHandler)
// })


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
  app.use(routes)
  app.use(errorHandler)
})
.catch(error => {
    console.error(error)
  })

module.exports = app



