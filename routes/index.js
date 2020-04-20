const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController')
const userController = require('../controllers/userController')
const restaurant = require('./restaurant')
const favorites = require('./favorites')

router.get('/anger', categoriesController.findAnger)
router.get('/contempt', categoriesController.findContempt)
router.get('/disgust', categoriesController.findDisgust)
router.get('/fear', categoriesController.findFear)
router.get('/happiness', categoriesController.findHappiness)
router.get('/neutral', categoriesController.findNeutral)
router.get('/sadness', categoriesController.findSadness)
router.get('/surprise', categoriesController.findSurprise)

router.use('/restaurant', restaurant)
router.use('/favorites', favorites)

router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router