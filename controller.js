const { ObjectId } = require('mongodb')
const Redis = require('ioredis')
const redis = new Redis()
const axios = require('axios')

class Controller {
    static async findAnger (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('anger')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findContempt (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('contempt')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findDisgust (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('disgust')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findFear (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('fear')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findHappiness (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('happiness')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findNeutral (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('neutral')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findSadness (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('sadness')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findSurprise (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('surprise')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findRestaurant (req, res) {
        try {
            const { data } = await axios ({
                url: `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=${req.params.food}`,
                method: "GET",
                headers: {
                    'user-key': "a4d87ea089e4302deea73b2dd99574b1"
                }
            })
            const result = data.restaurants.map( el => {
                return {
                    name: el.restaurant.name,
                    location: el.restaurant.location,
                    photo_url: el.restaurant.photos[0].photo.url
                }
            })
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async findFavorites (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('Restaurant')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async createFavorites (req, res) {
        try {
            const db = req.db
            const collection = db.collection('Restaurant')
            const { RestaurantId } = req.body
            const result = await collection.insertOne({
                RestaurantId
            })
            await redis.flushdb()
            res.status(201).json(result)
        } catch (error) {            
            res.status(500).json(error)
        }
    }

    static async deleteFavorites (req, res) {
        try {
            const db = req.db
            const collection = db.collection('Restaurant')
            const result = await collection.deleteOne({
                _id: ObjectId(req.params.id)
            })
            await redis.flushdb()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
}

module.exports = Controller