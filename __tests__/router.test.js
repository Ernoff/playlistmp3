require('jest');
const request = require('supertest');
const app = require('../app');

describe('requests', () => {
    test('/', async () => {
        await request(app).get('/').expect(200);
    });
    test('/users', async () => {
        await request(app).get('/').expect(200);
    });
});
