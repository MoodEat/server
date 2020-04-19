const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()
const _ = require('lodash')

class restaurantController {
  static async findRestaurant (req, res, next) {
    try {
        const restaurant = await redis.get(`/restaurant/${req.params.food}`)
        if (restaurant) {
          res.json(JSON.parse(restaurant))
        } else {
          let payload = {
            lat : req.body.lat,
            lon : req.body.longtitude
          }
          const { data } = await axios ({
              url: `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=${req.params.food}&lat=${payload.lat}&lon=${payload.lon}&radius=2000&sort=real_distance`,
              method: "GET",
              headers: {
                  'user-key': "a4d87ea089e4302deea73b2dd99574b1"
              }
          })
          let result = data.restaurants.map( el => {
              return {
                  idRestaurant: el.restaurant.id,
                  name: el.restaurant.name,
                  url: el.restaurant.url,
                  location: el.restaurant.location,
                  photo_url: el.restaurant.thumb
              }
          })
          result = result.filter(el => {
            return el.name.includes(_.startCase(req.params.food))
          })
          await redis.set(`/restaurant/${req.params.food}`, JSON.stringify(result))
          result = await redis.get(`/restaurant/${req.params.food}`)    
          res.status(200).json(JSON.parse(result))
        }
    } catch (error) {
        next(error)
    }
  }
}

module.exports = restaurantController