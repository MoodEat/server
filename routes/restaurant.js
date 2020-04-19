const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurantController')

router.get('/:food', restaurantController.findRestaurant )

module.exports = router