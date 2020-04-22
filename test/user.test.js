require("dotenv").config();
const request = require('supertest')
const app = require('../app_test')
const jwt = require('jsonwebtoken')
const {hashPassword, comparePassword} = require('../helpers/hashPassword')
const ObjectID = require('mongoose').Types.ObjectId
const User = require('../models/user')

describe('User routing', () => {

  describe('/register', () => {
    
    beforeEach((done) => {
      User.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    beforeEach(function(done) {
      User.create({
        name: 'master',
        email: 'ipul@mail.com',
        password: '12345678'
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  
    afterEach((done) => {
      User.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    describe('Success Process', () => {
      test('It should return new user object and status 201', (done) => {
        request(app)
          .post('/register')
          .send({
            name: 'master',
            email: 'master@mail.com',
            password: '12345678'
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('token')
            expect(response.status).toBe(201)
            done()
          })
      })
    })
   
    describe('Failed Process', () => {
      test('It should return status 400', (done) => {
        request(app)
        .post('/register')
        .send({
          name: 'master',
          email: 'ipul@mail.com',
          password: '12345678'
        })
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(400)
          done()
        })
      })

      test('It should return status 400', (done) => {
        request(app)
        .post('/register')
        .send({
          name: 'master',
          email: 'master@mail.com'
        })
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(400)
          done()
        })
      })

      test('It should return status 400', (done) => {
        request(app)
        .post('/register')
        .send({
          name: 'master',
        })
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(400)
          done()
        })
      })

      test('It should return status 400', (done) => {
        request(app)
        .post('/register')
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(400)
          done()
        })
      })

      test('It should return status 400', (done) => {
        request(app)
        .post('/register')
        .set({
          token: '12345'
        })
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(400)
          done()
        })
      })

      test('It should return status 400', (done) => {
        request(app)
        .post('/user/register')
        .send({
          name: 'ahahgsjhagdgsjhaadjahjagsjhgajhskjashkjahskjahjashjkasbhagdkjhdkjahkajhjkahskjahjkahskjahsjkahskjakjadbjhkajhjkahjkahjkhakjhajkhajkhjkaskjahskjahskjahskjahsakskajskakshkjahkjahskjhaskhasjkhakjshjkashkjasnkjasbjkasjhdkhuadhkhjakshkashakjhnajshkajhdkajdbkjdbkjahskjahkjahkjadndkjhadkjhakjhakjhajdhakjdhakjakhajkhakjhajdhkajdhkjadbjadbjkadhdhakdkjdnkdhnkjdhakjhdadhlkajakhjlakdladkajjadkladkadkahlkajlkdjnadalajlkdajlkalkahadhakjhakjahkahkjadhudkwkjwkjwhwkhuhwdkjnbxbxjcbwbuwhwkdjhiuwdwkjhdwgbcdakjajkhlajdhljahdjalajdhjakdhlajdhakadkhajdkjadadajdhjahdkadkahjadhakhjdhkajhkajhakhdajkhakjhkajhkdahkajdhjadhkhadkjhadhkjahduadkhajdakdkhadjdakjadkhadkjadkdakhjdakhjdaadjkadkabdajdbkajdhadadkjadjadnjdbkjdabadkjkdbjcncbvbvjjskskaladjdadjaiadjadkadkjadhuadjnadnajkdadajbndknjcbxkjdkdajnkadjladiadjakdjadjadjdahaujanakjdnaduhadjnadkjandadhnjadnkadjdnakjdanadjkdankjadbnadjkmnadkjnkdankjdanadkdankadkjadladjkadladladadjndadmnkadjndakjdabdaauyadjahdladkadadnjndkjadkadjdajdadnakjdndxnkjxjdaadhadlakdjaakakajakajajkjadkjadkjaddhdjhakdwjbwcwkhxnkx',
          email: 'master@mail.com'
        })
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.status).toBe(404)
          done()
        })
      })
    })
  })

  describe('/login', () => {
    let hash = hashPassword('12345678')
    beforeEach(function(done) {
      User.create({
        name: 'master',
        email: 'ipul@mail.com',
        password: hash
      })
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    afterEach(function(done) {
      User.deleteMany()
        .then(_ => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    describe('Success process', () => {
      test('It should return new user object and status 200', (done) => {
        request(app)
          .post('/login')
          .send({
            email: 'ipul@mail.com',
            password: '12345678'
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('token')
            expect(response.status).toBe(200)
            done()
          })
      })
    })

    describe('Failed process', () => {
      test('It should return status 400', (done) => {
        request(app)
          .post('/login')
          .send({
            email: 'ipu@mail.com',
            password: '12345678'
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('message')
            expect(response.status).toBe(400)
            done()
          })
      })

      test('It should return status 400', (done) => {
        request(app)
          .post('/login')
          .send({
            email: 'ipul@mail.com',
            password: '1234567'
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('message')
            expect(response.status).toBe(400)
            done()
          })
      })

      test('It should return status 400', (done) => {
        request(app)
          .post('/login')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('message')
            expect(response.status).toBe(400)
            done()
          })
      })

      test('It should return status 400', (done) => {
        request(app)
          .post('/login')
          .send({
            email: 1,
            password: 1
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('message')
            expect(response.status).toBe(400)
            done()
          })
      })

      test('It should return status 400', (done) => {
        request(app)
          .post('/login')
          .send({
            email: {
              text: 'ipul@mail.com'
            }
          })
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('message')
            expect(response.status).toBe(400)
            done()
          })
      })
    })
  })
})
