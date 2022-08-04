import supertest from 'supertest';
import app from '../app';

describe('Twitter Clone Services', () => {
    describe('when /posts is successful', () => {
        describe('GET /posts', () => {
            it("confirm default GET request", async () => {
                const response = await supertest(app).get("/");
                expect(response.status).toBe(200);
                expect(response.body.message).toBe("Welcome to Twitter Clone API - built by Ramsey Gavin");
            })

            it("confirm response returns json", async () => {
                const response = await supertest(app).get("/posts");
                expect(response.header['content-type']).toEqual(expect.stringContaining("json"))
            })

            it("GET all /posts", async () => {
                const response = await supertest(app).get("/posts");
                expect(response.body.data).toBeTruthy();
            })
        })

        describe('POST /posts', () => {
            it("successfully creates message", async () => {
                // arrange
                const givenPost = {
                    userid: 'ef6c487d-61d3-4a2c-b268-dd59834d1e7b',
                    username: 'Ramsey',
                    handle: '@Ramseyu90wr0fw2h',
                    isCertified: true,
                    post: 'Testing, testing...1,2,3',
                    retweets: 0,
                    likes: 0,
                    comments: 0,
                    media: 'video',
                    image: 'image',
                    timestamp: 1659586903638,
                    id: '22b8ba43-66b1-4dcf-b9ca-69476694fc07'
                }
                // act
                const response = await supertest(app).post("/posts").send(givenPost);
                // assert
                expect(response.statusCode).toBe(201);
            })

        })
    })
    describe('Unhappy path', () => {
        it.todo("Return all bad requests")
    })
})