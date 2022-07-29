import supertest from 'supertest'
const { app } = require('../app');

describe('test', () => {
    it("try this", async () => {
        await supertest(app).get("/")
        expect(true).toBe(true)
    })
})