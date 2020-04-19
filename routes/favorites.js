const express = require('express')
const router = express.Router()
const favoriteController = require('../controllers/favoriteController')

router.post('/', favoriteController.createFavorites )
router.get('/', favoriteController.findFavorites )
router.delete('/:id', favoriteController.deleteFavorites )

module.exports = router