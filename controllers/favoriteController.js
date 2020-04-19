const { ObjectId } = require('mongodb').ObjectID
const axios = require('axios')
const Redis = require('ioredis')
const redis = new Redis()

class favoriteController {
  static async findFavorites (req, res, next) {        
    try {
        const restaurant = await redis.get('/favorites')
        if (restaurant) {
            res.json(JSON.parse(restaurant))
        } else {
            const db = req.db
            const collection = db.collection('Restaurant')
            const data = await collection.find({}).toArray(); 
            await redis.set('/favorites', JSON.stringify(data))   
            const result = await redis.get('/favorites')    
            res.status(200).json(JSON.parse(result))
        }
    } catch (error) {
        next(error)
    } 
  }

  static async createFavorites (req, res, next) {
      let res_id = req.body.restaurantId
      try {
          const db = req.db
          const collection = db.collection('Restaurant')
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
          const result = await collection.insertOne({
              idRestaurant: data.id,
              name: data.name,
              url: data.url,
              location: data.location,
              photo_url: data.thumb
          })
          await redis.flushdb()
          res.status(201).json(result.ops[0])
      } catch (error) {
        next(error)
      }
  }

  static async deleteFavorites (req, res, next) {
      let id = req.params.id // ini bukan restauran ID tapi _id yg dari mongoDB
      try {
          const db = req.db
          const collection = db.collection('Restaurant')
          const result = await collection.deleteOne({
              _id : ObjectId(id)
          })
          await redis.flushdb()
          res.status(200).json({message: 'Deleted data is successfully'})
      } catch (error) {
        next(error)
      }
  }
}

module.exports = favoriteController