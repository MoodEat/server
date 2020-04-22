require("dotenv").config();
const request = require('supertest')
const app = require('../app_test')
const Anger = require('../models/anger')
const Contempt = require('../models/contempt')
const Disgust = require('../models/disgust')
const Fear = require('../models/fear')
const Happiness = require('../models/happiness')
const Neutral = require('../models/neutral')
const Sadness = require('../models/sadness')
const Surprise = require('../models/surprise')

describe('categories', () => {
  describe('Anger', () => {

    beforeEach((done) => {
      Anger.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    beforeEach(function(done) {
      Anger.create({
        food: 'hotdog',
        image: 'https://selerasa.com/wp-content/uploads/2018/12/hot-dog-mini-480x259-1200x720.jpg'
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  
    afterEach((done) => {
      Anger.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    test('It should status 200', (done) => {
      request(app)
        .get('/anger')
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(200)
          done()
        })
    })
  })

  describe('Contempt', () => {

    beforeEach((done) => {
      Contempt.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    beforeEach(function(done) {
      Contempt.create({
        food: 'ketoprak',
        image: 'https://selerasa.com/wp-content/uploads/2018/12/hot-dog-mini-480x259-1200x720.jpg'
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  
    afterEach((done) => {
      Contempt.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    test('It should status 200', (done) => {
      request(app)
        .get('/contempt')
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(200)
          done()
        })
    })
  })

  describe('Disgust', () => {

    beforeEach((done) => {
      Disgust.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    beforeEach(function(done) {
      Disgust.create({
        food: 'sushi',
        image: 'https://selerasa.com/wp-content/uploads/2018/12/hot-dog-mini-480x259-1200x720.jpg'
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  
    afterEach((done) => {
      Disgust.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    test('It should status 200', (done) => {
      request(app)
        .get('/disgust')
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(200)
          done()
        })
    })
  })

  describe('Fear', () => {

    beforeEach((done) => {
      Fear.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    beforeEach(function(done) {
      Fear.create({
        food: 'sushi',
        image: 'https://selerasa.com/wp-content/uploads/2018/12/hot-dog-mini-480x259-1200x720.jpg'
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  
    afterEach((done) => {
      Fear.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    test('It should status 200', (done) => {
      request(app)
        .get('/fear')
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(200)
          done()
        })
    })
  })

  describe('Happiness', () => {

    beforeEach((done) => {
      Happiness.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    beforeEach(function(done) {
      Happiness.create({
        food: 'sushi',
        image: 'https://selerasa.com/wp-content/uploads/2018/12/hot-dog-mini-480x259-1200x720.jpg'
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  
    afterEach((done) => {
      Happiness.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    test('It should status 200', (done) => {
      request(app)
        .get('/happiness')
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(200)
          done()
        })
    })
  })

  describe('Neutral', () => {

    beforeEach((done) => {
      Neutral.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    beforeEach(function(done) {
      Neutral.create({
        food: 'sushi',
        image: 'https://selerasa.com/wp-content/uploads/2018/12/hot-dog-mini-480x259-1200x720.jpg'
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  
    afterEach((done) => {
      Neutral.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    test('It should status 200', (done) => {
      request(app)
        .get('/neutral')
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(200)
          done()
        })
    })
  })

  describe('Sadness', () => {

    beforeEach((done) => {
      Sadness.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    beforeEach(function(done) {
      Sadness.create({
        food: 'sushi',
        image: 'https://selerasa.com/wp-content/uploads/2018/12/hot-dog-mini-480x259-1200x720.jpg'
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  
    afterEach((done) => {
      Sadness.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    test('It should status 200', (done) => {
      request(app)
        .get('/sadness')
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(200)
          done()
        })
    })
  })

  describe('Surprise', () => {

    beforeEach((done) => {
      Surprise.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    beforeEach(function(done) {
      Surprise.create({
        food: 'sushi',
        image: 'https://selerasa.com/wp-content/uploads/2018/12/hot-dog-mini-480x259-1200x720.jpg'
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  
    afterEach((done) => {
      Surprise.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    test('It should status 200', (done) => {
      request(app)
        .get('/surprise')
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(200)
          done()
        })
    })
  })
})