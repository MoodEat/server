const { ObjectId } = require('mongodb')
const Redis = require('ioredis')
const redis = new Redis()
const axios = require('axios')

class Controller {
    static async findAngry (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('anger')
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

    static async findSad (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('sad')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findHappy (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('happy')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findCalm (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('calm')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findSurprised (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('surprised')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findConfused (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('confused')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findDisgusted (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('disgusted')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findFavorites (req, res) {        
        try {
            const db = req.db
            const collection = db.collection('Favorites')
            const result = await collection.find({}).toArray();            
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        } 
    }

    static async findRestaurant (req, res) {
        try {
            const collection = req.collection
            const result = await collection.findOne({
                _id: ObjectId(req.params.id)
            })
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async createFavorites (req, res) {
        try {
            const collection = req.collection
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
            const collection = req.collection
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