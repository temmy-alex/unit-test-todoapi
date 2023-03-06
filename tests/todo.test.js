const app = require('../app')
const request = require('supertest');

test('Get 1 Data From List', (done) => {
    request(app)
        .get('/api/v1/todo')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.message).toBe("Success")
            done()
        })
        .catch(done)
})