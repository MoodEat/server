const express = require('express')
const router = express.Router()
const favoriteController = require('../controllers/favoriteController')
const authentication = require('../middlewares/authentication');

router.use(authentication)

router.post('/', favoriteController.createFavorites )
router.delete('/:id', favoriteController.deleteFavorites )
router.get('/', favoriteController.findFavorites )

module.exports = router