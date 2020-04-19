const { ObjectId } = require('mongodb')
const axios = require('axios')

class Controller {
    static async findAnger (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('anger')
            const result = await collection.find({}).toArray();        
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
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
                id: data.id,
                name: data.name,
                location: data.location,
                photo_url: data.thumb
            })
            res.status(201).json(result.ops[0])
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async deleteFavorites (req, res) {
        let id = req.params.id // ini bukan restauran ID tapi _id yg dari mongoDB
        console.log(id)
        try {
            const db = req.db
            const collection = db.collection('Restaurant')
            const result = await collection.deleteOne({
                _id : ObjectId(id)
            })
            res.status(200).json({message: 'Deleted data is successfully'})
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
}

module.exports = Controller