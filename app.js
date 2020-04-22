const express = require('express');
const app = express();
const routes = require('./routes')
const morgan = require('morgan')
const errorHandler = require('./middlewares/errorhandler')
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

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

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, () => {
  console.log('connected to database')
  app.use((req, res, next) => {
    next()
  })
  app.use(routes)
  app.use(errorHandler)
})

module.exports = app



