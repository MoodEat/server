const Redis = require('ioredis')
const redis = new Redis()

class categoriesController {
  static async findAnger (req, res, next) {        
      try {
          const anger = await redis.get('/anger')
          if (anger) {
              res.json(JSON.parse(anger))
          } else {
              const db = req.db
              const collection = db.collection('anger')
              const data = await collection.find({}).toArray(); 
              await redis.set('/anger', JSON.stringify(data))   
              const result = await redis.get('/anger')    
              res.status(200).json(JSON.parse(result))
          }
      } catch (error) {
          next(error)
      } 
  }

  static async findContempt (req, res) {        
      try {
        const contempt = await redis.get('/contempt')
        if (contempt) {
            res.json(JSON.parse(contempt))
        } else {
            const db = req.db
            const collection = db.collection('contempt')
            const data = await collection.find({}).toArray(); 
            await redis.set('/contempt', JSON.stringify(data))   
            const result = await redis.get('/contempt')    
            res.status(200).json(JSON.parse(result))
        }
      } catch (error) {
          next(error)
      } 
  }

  static async findDisgust (req, res) {        
      try {
        const disgust = await redis.get('/disgust')
        if (disgust) {
            res.json(JSON.parse(disgust))
        } else {
            const db = req.db
            const collection = db.collection('disgust')
            const data = await collection.find({}).toArray(); 
            await redis.set('/disgust', JSON.stringify(data))   
            const result = await redis.get('/disgust')    
            res.status(200).json(JSON.parse(result))
        }
      } catch (error) {
          next(error)
      } 
  }

  static async findFear (req, res) {        
      try {
        const fear = await redis.get('/fear')
        if (fear) {
            res.json(JSON.parse(fear))
        } else {
            const db = req.db
            const collection = db.collection('fear')
            const data = await collection.find({}).toArray(); 
            await redis.set('/fear', JSON.stringify(data))   
            const result = await redis.get('/fear')    
            res.status(200).json(JSON.parse(result))
        }
      } catch (error) {
          next(error)
      } 
  }

  static async findHappiness (req, res) {        
      try {
        const happiness = await redis.get('/happiness')
        if (happiness) {
            res.json(JSON.parse(happiness))
        } else {
            const db = req.db
            const collection = db.collection('happiness')
            const data = await collection.find({}).toArray(); 
            await redis.set('/happiness', JSON.stringify(data))   
            const result = await redis.get('/happiness')    
            res.status(200).json(JSON.parse(result))
        }
      } catch (error) {
          next(error)
      } 
  }

  static async findNeutral (req, res) {        
      try {
        const neutral = await redis.get('/neutral')
        if (neutral) {
            res.json(JSON.parse(neutral))
        } else {
            const db = req.db
            const collection = db.collection('neutral')
            const data = await collection.find({}).toArray(); 
            await redis.set('/neutral', JSON.stringify(data))   
            const result = await redis.get('/neutral')    
            res.status(200).json(JSON.parse(result))
        }
      } catch (error) {
          next(error)
      } 
  }

  static async findSadness (req, res) {        
      try {
        const sadness = await redis.get('/sadness')
        if (sadness) {
            res.json(JSON.parse(sadness))
        } else {
            const db = req.db
            const collection = db.collection('sadness')
            const data = await collection.find({}).toArray(); 
            await redis.set('/sadness', JSON.stringify(data))   
            const result = await redis.get('/sadness')    
            res.status(200).json(JSON.parse(result))
        }
      } catch (error) {
          next(error)
      } 
  }

  static async findSurprise (req, res) {        
      try {
        const surprise = await redis.get('/surprise')
        if (surprise) {
            res.json(JSON.parse(surprise))
        } else {
            const db = req.db
            const collection = db.collection('surprise')
            const data = await collection.find({}).toArray(); 
            await redis.set('/surprise', JSON.stringify(data))   
            const result = await redis.get('/surprise')    
            res.status(200).json(JSON.parse(result))
        }
      } catch (error) {
          next(error)
      } 
  }
}

module.exports = categoriesController