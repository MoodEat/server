const express = require('express');
const app = express();
const routes = require('./routes')
const {dbName, client} = require('./config/config')
const morgan = require('morgan')
const errorHandler = require('./middlewares/errorhandler')
const cors = require('cors')


app.use(cors())
app.use(morgan('tiny'))
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

  app.use(routes)
  app.use(errorHandler)
})

module.exports = app



