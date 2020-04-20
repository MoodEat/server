const axios = require('axios')
const Restaurant = require('../models/restaurant');

class favoriteController {
  static async findFavorites (req, res, next) {        
    try {
        const data = await Restaurant.find({
            UserId: req.decoded.id
        })
        if(data.length > 0) {
            res.status(200).json(data)
        } else {
            res.status(404).json({
                message: "There isn't favorite restaurant"
            })
        }
    } catch (error) {
        next(error)
    } 
  }

  static async createFavorites (req, res, next) {
      let res_id = req.body.restaurantId
      try {
          const { data } = await axios ({
              url: `https://developers.zomato.com/api/v2.1/restaurant`,
              method: "POST",
              headers: {
                  'user-key': "a4d87ea089e4302deea73b2dd99574b1"
              },
              params: {
                  res_id
              }
          })
          const restaurant = new Restaurant(
            {
                idRestaurant: data.id,
                name: data.name,
                url: data.url,
                location: data.location,
                photo_url: data.thumb,
                UserId: req.decoded.id
            }
         )
        await restaurant.save()
        res.status(201).json(restaurant)
      } catch (error) {
        res.status(400).json(error)
      }
  }

  static async deleteFavorites (req, res, next) {
      try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id)
        if (restaurant) { 
            res.status(200).json({
                message: 'Restaurant has been deleted from favorites'
            })
        } else {
            res.status(404).json({ 
                message: "No restaurant found" 
            })
        }
      } catch (error) {
            next(error)
      }
  }
}

module.exports = favoriteController