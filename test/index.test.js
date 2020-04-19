require("dotenv").config();
const request = require('supertest')
const app = require('../app') 
const {MongoClient} = require('mongodb');
const dbName = 'MoodEatTest';
const uri = 'mongodb://localhost:27017'

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
    });
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    // await db.dropDatabase(dbName)
    await connection.close();
    await db.close();
  });

  describe('GET /anger', () => {
    describe('Success Process', () => {
      it('It should return data of food categories of anger and return status 200', (done) => {
        request(app)
          .get('/anger')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })

  })

  describe('GET /contempt', () => {
    describe('Success Process', () => {
      it('It should return data of food categories of anger and return status 200', (done) => {
        request(app)
          .get('/contempt')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })

  describe('GET /disgust', () => {
    describe('Success Process', () => {
      it('It should return data of food categories of anger and return status 200', (done) => {
        request(app)
          .get('/disgust')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })

  describe('GET /fear', () => {
    describe('Success Process', () => {
      it('It should return data of food categories of anger and return status 200', (done) => {
        request(app)
          .get('/fear')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })

  describe('GET /happiness', () => {
    describe('Success Process', () => {
      it('It should return data of food categories of anger and return status 200', (done) => {
        request(app)
          .get('/happiness')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })

  describe('GET /neutral', () => {
    describe('Success Process', () => {
      it('It should return data of food categories of anger and return status 200', (done) => {
        request(app)
          .get('/neutral')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })

  describe('GET /sadness', () => {
    describe('Success Process', () => {
      it('It should return data of food categories of anger and return status 200', (done) => {
        request(app)
          .get('/sadness')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })

  describe('GET /surprise', () => {
    describe('Success Process', () => {
      it('It should return data of food categories of anger and return status 200', (done) => {
        request(app)
          .get('/surprise')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })

  describe('GET /restaurant/:food', () => {
    describe('Success Process', () => {
      it('It should return data array and return status 200', (done) => {
        request(app)
          .get('/restaurant/hotdog')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toEqual(expect.any(Array))
            expect(response.status).toBe(200)
            done()
          })
      })
    })
  })

  describe('Favorite', () => {
    let collection
    let result
    let idRestaurant
    beforeAll(async () => {
      collection = db.collection('Restaurant')
      result = await collection.insertOne({
        id: "18294955",
        name: "Seblak Jeletet Murni",
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
      console.log(result.ops[0].id, '>>>>>>>>>>>>>>>>>>>>>')
      idRestaurant = result.ops[0]._id
    });

    afterAll(async () => {
      db.Restaurant.dropAll()
    })

    describe('POST /favorite', () => {
      describe('Success process', () => {
        it('It should return data object containing RestaurantId and return status 201', (done) => {
          request(app)
            .post('/favorites')
            .send({
              restaurantId: '18654033'
            })
            .end((err, response) => {
              expect(err).toBe(null)
              expect(response.body).toHaveProperty('id')
              expect(response.body).toHaveProperty('name')
              expect(response.body).toHaveProperty('location')
              expect(response.body).toHaveProperty('photo_url')
              expect(response.status).toBe(201)
              done()
            })
        })
      })
    })

    describe('GET /favorites', () => {
      describe('Success process', () => {
        it('It should return data array of object and return status 200', (done) => {
          request(app)
            .get('/favorites')
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
            .delete(`/favorites/${idRestaurant}`)
            .end((err, response) => {
              expect(err).toBe(null)
              expect(response.body).toHaveProperty('message')
              expect(response.status).toBe(200)
              done()
            })
        })
      })
    })
  })
});