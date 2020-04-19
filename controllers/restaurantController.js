const axios = require('axios')

class restaurantController {
  static async findRestaurant (req, res, next) {
    try {
        const { data } = await axios ({
            url: `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=${req.params.food}`,
            method: "GET",
            headers: {
                'user-key': "a4d87ea089e4302deea73b2dd99574b1"
            }
        })
        let result = data.restaurants.map( el => {
            return {
                id: el.restaurant.id,
                name: el.restaurant.name,
                location: el.restaurant.location,
                photo_url: el.restaurant.thumb
            }
        })
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
  }
}

module.exports = restaurantController