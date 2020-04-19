const { ObjectId } = require('mongodb').ObjectID
const axios = require('axios')

class favoriteController {
  static async findFavorites (req, res, next) {        
    try {
      const db = req.db
      const collection = db.collection('Restaurant')
      const data = await collection.find({}).toArray();   
      res.status(200).json(data)
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
          res.status(200).json({message: 'Deleted data is successfully'})
      } catch (error) {
        next(error)
      }
  }
}

module.exports = favoriteController