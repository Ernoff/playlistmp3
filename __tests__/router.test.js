require('jest');
const request = require('supertest');
const app = require('../app');

describe('requests', () => {
    test('receives one video in mp4 format', async () => {
        await request(app).get('/download/QVc29bYIvCM').expect(200);
    });
});
