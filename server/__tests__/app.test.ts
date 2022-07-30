import supertest from 'supertest';
import app from '../app';

describe('testing the endpoints', () => {
    describe('Happy path', () => {
        it("confirm default GET request", async () => {
            const response = await supertest(app).get("/");
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("Welcome to Twitter Clone API - built by Ramsey Gavin");
        })

        it("GET all /posts", async () => {
            const response = await supertest(app).get("/posts");
            expect(response.body.data).toBeTruthy();
        })
    })
})