require("dotenv").config();
const request = require('supertest')
const app = require('../app_test')
const Restaurant = require('../models/restaurant')

describe('Restaurant routing', () => {

  beforeEach((done) => {
    Restaurant.deleteMany()
      .then(_ => {
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  

  describe('Success Process', () => {
    it('It should return data array and return status 200', (done) => {
      request(app)
        .get('/restaurant/bakso')
        .set({
            lat: -6.162305,
            longitude: 106.905851
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