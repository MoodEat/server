const Redis = require('ioredis')
const redis = new Redis()

class categoriesController {
  static async findAnger (req, res, next) {        
      try {
        const db = req.db
        const collection = db.collection('anger')
        const data = await collection.find({}).toArray();  
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findContempt (req, res) {        
      try {
        const db = req.db
        const collection = db.collection('contempt')
        const data = await collection.find({}).toArray();    
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findDisgust (req, res) {        
      try {
        const db = req.db
        const collection = db.collection('disgust')
        const data = await collection.find({}).toArray();   
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findFear (req, res) {        
      try {
        const db = req.db
        const collection = db.collection('fear')
        const data = await collection.find({}).toArray();    
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findHappiness (req, res) {        
      try {
            const db = req.db
            const collection = db.collection('happiness')
            const data = await collection.find({}).toArray();    
            res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findNeutral (req, res) {        
      try {
        const db = req.db
        const collection = db.collection('neutral')
        const data = await collection.find({}).toArray(); 
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findSadness (req, res) {        
      try {
          const db = req.db
          const collection = db.collection('sadness')
          const data = await collection.find({}).toArray();    
          res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findSurprise (req, res) {        
      try {
        const db = req.db
        const collection = db.collection('surprise')
        const data = await collection.find({}).toArray();    
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }
}

module.exports = categoriesController