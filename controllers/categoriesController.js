const Anger = require('../models/anger');
const Contempt = require('../models/contempt');
const Disgust = require('../models/disgust');
const Fear = require('../models/fear');
const Happiness = require('../models/happiness');
const Neutral = require('../models/neutral');
const Sadness = require('../models/sadness');
const Surprise = require('../models/surprise');

class categoriesController {
  static async findAnger (req, res, next) {        
      try {
        const data = await Anger.find({}); 
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findContempt (req, res) {        
      try {
        const data = await Contempt.find({}); 
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findDisgust (req, res) {        
      try {
        const data = await Disgust.find({}); 
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findFear (req, res) {        
      try {
        const data = await Fear.find({}); 
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findHappiness (req, res) {        
      try {
        const data = await Happiness.find({}); 
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findNeutral (req, res) {        
      try {
        const data = await Neutral.find({}); 
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findSadness (req, res) {        
      try {
        const data = await Sadness.find({}); 
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }

  static async findSurprise (req, res) {        
      try {
        const data = await Surprise.find({}); 
        res.status(200).json(data)
      } catch (error) {
          next(error)
      } 
  }
}

module.exports = categoriesController