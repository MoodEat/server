const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const morgan = require('morgan')
const errorHandler = require('./middlewares/errorHandler')

const uri = 'mongodb://localhost:27017/MoodEatTest';
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)


app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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