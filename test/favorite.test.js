require("dotenv").config();
const request = require('supertest')
const app = require('../app_test')
const Restaurant = require('../models/restaurant')
const User = require('../models/user')
const Jwt = require('../helpers/jwt')

let access_token;
let idRestaurant;
let _idRestaurant;

describe('Favorite routing', () => {
  
  beforeAll((done) => {
    Restaurant.deleteMany()
      .then(_ => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  beforeAll(function(done) {
    Restaurant.create({
      idRestaurant: "18294955",
      name: "Seblak Jeletet Murni",
      url: 'https://www.zomato.com/jakarta/bakso-lapangan-tembak-senayan-pondok-gede?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
      location: {
        "address": "Jl. Pademangan 4, Gang 4, Gunung Sahari, Jakarta",
        "locality": "Gunung Sahari",
        "city": "Jakarta",
        "city_id": 74,
        "latitude": "-6.1409038024",
        "longitude": "106.8395257741",
        "zipcode": "",
        "country_id": 94,
        "locality_verbose": "Gunung Sahari, Jakarta"
      },
      photo_url: "https://b.zmtcdn.com/data/reviews_photos/704/5aaf4097afbf96c586cd1669ab89c704_1551325975.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
    })
      .then(result=> {
        console.log(result)
        idRestaurant = result.idRestaurant
        _idRestaurant = result._id
        return User.create({
          name: 'kakak',
          email: 'k@mail.com',
          password: '12345678'
        })
      })
      .then(result => {
        access_token = Jwt.generateToken({
          id: result._id,
          email: result.email
        }, process.env.PRIVATE_KEY)
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  afterAll((done) => {
    Restaurant.deleteMany()
      .then(_ => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  describe('POST /favorite', () => {
    describe('Success process', () => {
      it('It should return data object containing RestaurantId and return status 201', (done) => {
        request(app)
          .post('/favorites')
          .set({
            token: access_token
          })
          .send({
            restaurantId: idRestaurant
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('idRestaurant')
            expect(response.body).toHaveProperty('name')
            expect(response.body).toHaveProperty('url')
            expect(response.body).toHaveProperty('location')
            expect(response.body).toHaveProperty('photo_url')
            expect(response.status).toBe(201)
            done()
          })
      })
    })

    describe('Failed process', () => {
      it('It should return 404', (done) => {
        request(app)
          .post('/favorites')
          .set({
            token: 'skjakdshkagsu'
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('message')
            expect(response.status).toBe(404)
            done()
          })
      })
      it('It should return 404', (done) => {
        request(app)
          .post('/favorites')
          .send({
            idRestaurant: '1267127628'
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('message')
            expect(response.status).toBe(404)
            done()
          })
      })
      it('It should return status 400', (done) => {
        request(app)
          .post('/favorites')
          .set({
            token: access_token
          })
          .send({
            restaurantId: 1
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.status).toBe(400)
            done()
          })
      })
      it('It should return status 400', (done) => {
        request(app)
          .post('/favorites')
          .set({
            token: access_token
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.status).toBe(400)
            done()
          })
      })
    })
  })

  describe('GET /favorites', () => {
    describe('Success Process', () => {
      it('It should return data array of object and return status 200', (done) => {
        request(app)
          .get('/favorites')
          .set({
            token: access_token
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })
 
  describe('DELETE /favorites/:id', () => {
    describe('Success process', () => {
      it('It should return object containing message and status 200', (done) => {
        request(app)
          .delete(`/favorites/${_idRestaurant}`)
          .set({
            token: access_token
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('message')
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })

  describe('Failed message', () => {
    it('It should return 500 because id too long and more than 12 string', (done) => {
      request(app)
        .delete(`/favorites/${idRestaurant + 1}`)
        .set({
          token: access_token
        })
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.body).toHaveProperty('message')
          expect(response.status).toBe(500)
          done()
        })
    })
    it('It should return 500 because id too short and less than 12 string', (done) => {
      request(app)
        .delete(`/favorites/${idRestaurant - 1 }`)
        .set({
          token: access_token
        })
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.body).toHaveProperty('message')
          expect(response.status).toBe(500)
          done()
        })
    })
    it('It should return 500 because id too short and less than 12 string', (done) => {
      request(app)
        .delete(`/favorites/${idRestaurant - 1 }`)
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.body).toHaveProperty('message')
          expect(response.status).toBe(404)
          done()
        })
    })
    it('It should return 500 because id too short and less than 12 string', (done) => {
      request(app)
        .delete(`/favorites/${'5e9d7555dd12384ad8e8a473'}`)
        .set({
          token: access_token
        })
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.body).toHaveProperty('message')
          expect(response.status).toBe(404)
          done()
        })
    })
  })
})