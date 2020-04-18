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

  // it('should insert a doc into collection', async () => {
  //   const users = db.collection('users');

  //   const mockUser = {_id: 'some-user-id', name: 'John'};
  //   await users.insertOne(mockUser);

  //   const insertedUser = await users.findOne({_id: 'some-user-id'});
  //   expect(insertedUser).toEqual(mockUser);
  // });

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

});