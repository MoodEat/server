const router = require('express').Router();
const Controller = require('./controller')

router.get('/anger', Controller.findAnger)

router.get('/contempt', Controller.findContempt)

router.get('/disgust', Controller.findDisgust)

router.get('/fear', Controller.findFear)

router.get('/happiness', Controller.findHappiness)

router.get('/neutral', Controller.findNeutral)

router.get('/sadness', Controller.findSadness)

router.get('/surprise', Controller.findSurprise)

router.get('/restaurant/:food', Controller.findRestaurant )

router.post('/favorites', Controller.createFavorites )

router.get('/favorites', Controller.findFavorites )

router.delete('/favorites/:id', Controller.deleteFavorites )


module.exports = router