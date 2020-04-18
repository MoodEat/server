const router = require('express').Router();
const Controller = require('./controller')

router.get('/angry', Controller.findAngry)

router.get('/fear', Controller.findFear)

router.get('/sad', Controller.findSad)

router.get('/happy', Controller.findHappy)

router.get('/calm', Controller.findCalm)

router.get('/surprised', Controller.findSurprised)

router.get('/confused', Controller.findConfused)

router.get('/disgusted', Controller.findDisgusted)

router.get('/restaurant', Controller.findRestaurant )

router.post('/favorites', Controller.createFavorites )

router.get('/favorites', Controller.findFavorites )

router.delete('/favorites/:id', Controller.deleteFavorites )


module.exports = router