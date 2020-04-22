// const request = require('supertest')
// const app = require('../app') 
// const {MongoClient} = require('mongodb');
// const dbName = 'MoodEatTest';
// const uri = 'mongodb://localhost:27017'

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(uri, {
//       useNewUrlParser: true,
//     });
//     db = await connection.db(dbName);
//   });

//   afterAll(async () => {
//     await db.dropDatabase(dbName)
//     await connection.close();
//     await db.close();
//   });

//   describe('GET /anger', () => {
//     describe('Success Process', () => {
//       it('It should return data of food categories of anger and return status 200', (done) => {
//         request(app)
//           .get('/anger')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.body).toEqual(expect.any(Array))
//             expect(response.status).toBe(200)
//             done()
//           })
//       })
//     })

//     describe('Failed Process', () => {
//       it('It should return error and return status 404', (done) => {
//         request(app)
//           .post('/anger')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(404)
//             done()
//           })
//       })

//       it('It should return error and return status 404', (done) => {
//         request(app)
//           .post('/anger')
//           .send({
//             lat: -6.97755
//           })
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(404)
//             done()
//           })
//       })
//     })
//   })

//   describe('GET /contempt', () => {
//     describe('Success Process', () => {
//       it('It should return data of food categories of contempt and return status 200', (done) => {
//         request(app)
//           .get('/contempt')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.body).toEqual(expect.any(Array))
//             expect(response.status).toBe(200)
//             done()
//           })
//       })
//     })

//     describe('Failed Process', () => {
//       it('It should return error and return status 404', (done) => {
//         request(app)
//           .post('/contempt')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(404)
//             done()
//           })
//       })
//     })
    
//   })

//   describe('GET /disgust', () => {
//     describe('Success Process', () => {
//       it('It should return data of food categories of disgust and return status 200', (done) => {
//         request(app)
//           .get('/disgust')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.body).toEqual(expect.any(Array))
//             expect(response.status).toBe(200)
//             done()
//           })
//       })
//     })

//     describe('Failed Process', () => {
//       it('It should return error and return status 404', (done) => {
//         request(app)
//           .post('/disgust')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(404)
//             done()
//           })
//       })
//     })
    
//   })

//   describe('GET /fear', () => {
//     describe('Success Process', () => {
//       it('It should return data of food categories of fear and return status 200', (done) => {
//         request(app)
//           .get('/fear')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.body).toEqual(expect.any(Array))
//             expect(response.status).toBe(200)
//             done()
//           })
//       })
//     })

//     describe('Failed Process', () => {
//       it('It should return error and return status 404', (done) => {
//         request(app)
//           .post('/fear')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(404)
//             done()
//           })
//       })
//     })
    
//   })

//   describe('GET /happiness', () => {
//     describe('Success Process', () => {
//       it('It should return data of food categories of happiness and return status 200', (done) => {
//         request(app)
//           .get('/happiness')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.body).toEqual(expect.any(Array))
//             expect(response.status).toBe(200)
//             done()
//           })
//       })
//     })

//     describe('Failed Process', () => {
//       it('It should return error and return status 404', (done) => {
//         request(app)
//           .post('/happiness')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(404)
//             done()
//           })
//       })
//     })
    
//   })

//   describe('GET /neutral', () => {
//     describe('Success Process', () => {
//       it('It should return data of food categories of neutral and return status 200', (done) => {
//         request(app)
//           .get('/neutral')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.body).toEqual(expect.any(Array))
//             expect(response.status).toBe(200)
//             done()
//           })
//       })
//     })
//     describe('Failed Process', () => {
//       it('It should return error and return status 404', (done) => {
//         request(app)
//           .post('/neutral')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(404)
//             done()
//           })
//       })
//     })
   
//   })

//   describe('GET /sadness', () => {
//     describe('Success Process', () => {
//       it('It should return data of food categories of sadness and return status 200', (done) => {
//         request(app)
//           .get('/sadness')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.body).toEqual(expect.any(Array))
//             expect(response.status).toBe(200)
//             done()
//           })
//       })
//     })

//     describe('Failed Process', () => {
//       it('It should return error and return status 404', (done) => {
//         request(app)
//           .post('/sadness')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(404)
//             done()
//           })
//       })
//     })
    
//   })

//   describe('GET /surprise', () => {
//     describe('Success Process', () => {
//       it('It should return data of food categories of surprise and return status 200', (done) => {
//         request(app)
//           .get('/surprise')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.body).toEqual(expect.any(Array))
//             expect(response.status).toBe(200)
//             done()
//           })
//       })
//     })

//     describe('Failed Process', () => {
//       it('It should return error and return status 404', (done) => {
//         request(app)
//           .post('/surprise')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(404)
//             done()
//           })
//       })
//     })
    
//   })

//   describe('GET /restaurant/:food', () => {
//     describe('Success Process', () => {
//       it('It should return data array and return status 200', (done) => {
//         request(app)
//           .get('/restaurant/hotdog')
//           .set({
//               lat: -6.162305,
//               longitude: 106.905851
//           })
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.body).toEqual(expect.any(Array))
//             expect(response.status).toBe(200)
//             done()
//           })
//       })
//     })

//     describe('Failed Process', () => {
//       it('It should return status 500', (done) => {
//         request(app)
//           .get('/restaurant/hotdog')
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(500)
//             done()
//           })
//       })

//       it('It should return status 500', (done) => {
//         request(app)
//           .get('/restaurant/hotdog')
//           .set({
//             params: {
//               lat: -6.162305,
//               longitude: 106.905851
//             }
//           })
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(500)
//             done()
//           })
//       })

//       it('It should return status 500', (done) => {
//         request(app)
//           .get('/restaurant/hotdog')
//           .send({
//             params: {
//               lat: -6.162305,
//               longitude: 106.905851
//             }
//           })
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(500)
//             done()
//           })
//       })

//       it('It should return status 500', (done) => {
//         request(app)
//           .get('/restaurant/hotdog')
//           .send({
//             latitude: -6.162305,
//           })
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(500)
//             done()
//           })
//       })

//       it('It should return status 500', (done) => {
//         request(app)
//           .get('/restaurant/hotdog')
//           .send({
//             lon: 10.9873742,
//           })
//           .end((err, response) => {
//             expect(err).toBe(null)
//             expect(response.status).toBe(500)
//             done()
//           })
//       })
//     })
//   })

//   describe('Favorite', () => {
//     let collection
//     let result
//     let idRestaurant
//     beforeAll(async () => {
//       collection = db.collection('Restaurant')
//       result = await collection.insertOne({
//         idRestaurant: "18294955",
//         name: "Seblak Jeletet Murni",
//         url: 'https://www.zomato.com/jakarta/bakso-lapangan-tembak-senayan-pondok-gede?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
//         location: {
//           "address": "Jl. Pademangan 4, Gang 4, Gunung Sahari, Jakarta",
//           "locality": "Gunung Sahari",
//           "city": "Jakarta",
//           "city_id": 74,
//           "latitude": "-6.1409038024",
//           "longitude": "106.8395257741",
//           "zipcode": "",
//           "country_id": 94,
//           "locality_verbose": "Gunung Sahari, Jakarta"
//       },
//       photo_url: "https://b.zmtcdn.com/data/reviews_photos/704/5aaf4097afbf96c586cd1669ab89c704_1551325975.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
//       })
//       idRestaurant = result.ops[0]._id
//     });

//     afterAll(async () => {
//       db.Restaurant.dropAll()
//     })

//     describe('POST /favorite', () => {
//       describe('Success process', () => {
//         it('It should return data object containing RestaurantId and return status 201', (done) => {
//           request(app)
//             .post('/favorites')
//             .send({
//               restaurantId: '18654033'
//             })
//             .end((err, response) => {
//               expect(err).toBe(null)
//               expect(response.body).toHaveProperty('idRestaurant')
//               expect(response.body).toHaveProperty('name')
//               expect(response.body).toHaveProperty('url')
//               expect(response.body).toHaveProperty('location')
//               expect(response.body).toHaveProperty('photo_url')
//               expect(response.status).toBe(201)
//               done()
//             })
//         })
//       })

//       describe('Failed process', () => {
//         it('It should return 500', (done) => {
//           request(app)
//             .post('/favorites')
//             .end((err, response) => {
//               expect(err).toBe(null)
//               expect(response.body).toHaveProperty('message')
//               expect(response.status).toBe(500)
//               done()
//             })
//         })
//         it('It should return 500', (done) => {
//           request(app)
//             .post('/favorites')
//             .set({
//               restaurantId: '18654033'
//             })
//             .end((err, response) => {
//               expect(err).toBe(null)
//               expect(response.body).toHaveProperty('message')
//               expect(response.status).toBe(500)
//               done()
//             })
//         })
//       })
//     })

//     describe('GET /favorites', () => {
//       describe('Success process', () => {
//         it('It should return data array of object and return status 200', (done) => {
//           request(app)
//             .get('/favorites')
//             .end((err, response) => {
//               expect(err).toBe(null)
//               expect(response.body).toEqual(expect.any(Array))
//               expect(response.status).toBe(200)
//               done()
//             })
//         })
//       })
//     })

//     describe('DELETE /favorites/:id', () => {
//       describe('Success process', () => {
//         it('It should return object containing message and status 200', (done) => {
//           request(app)
//             .delete(`/favorites/${idRestaurant}`)
//             .end((err, response) => {
//               expect(err).toBe(null)
//               expect(response.body).toHaveProperty('message')
//               expect(response.status).toBe(200)
//               done()
//             })
//         })
//       })
      
//       describe('Failed message', () => {
//         it('It should return 500 because id too long and more than 12 string', (done) => {
//           request(app)
//             .delete(`/favorites/${idRestaurant + 1}`)
//             .end((err, response) => {
//               expect(err).toBe(null)
//               expect(response.body).toHaveProperty('message')
//               expect(response.status).toBe(500)
//               done()
//             })
//         })
//         it('It should return 500 because id too short and less than 12 string', (done) => {
//           request(app)
//             .delete(`/favorites/${idRestaurant - 1 }`)
//             .end((err, response) => {
//               expect(err).toBe(null)
//               expect(response.body).toHaveProperty('message')
//               expect(response.status).toBe(500)
//               done()
//             })
//         })
//       })
//     })
//   })
// });