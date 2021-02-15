process.env.NODE_ENV = "development";
const app = require("../app");
const request = require("supertest");
const connection = require("../database/connect");


describe("Testing /jokes and /jokes/:jokesId endpoints", () => {
    afterAll(() => {
        return connection.destroy();
    });

    test("GET - status 200 - returns an array of joke objects", () => {
        return request(app)
            .get("/jokes")
            .expect(200)
            .then((response) => {
                expect(Array.isArray(response.body.jokes)).toBe(true);
                expect(typeof response.body.jokes[0]).toBe("object")
                expect(Object.keys(response.body.jokes[0])).toEqual([
                    "id",
                    "type",
                    "setup",
                    "punchline"
                ]);
            })
    })
    test("GET - status 200 - returns the joke object for the given joke id", () => {
        return request(app)
            .get("/jokes/1")
            .expect(200)
            .then((response) => {
                expect(typeof response.body.joke).toBe("object")
                expect(response.body.joke).toEqual({
                    id: 1,
                    type: 'general',
                    setup: 'What did the fish say when it hit the wall?',
                    punchline: 'Dam.'
                });
            })
    })
    test("GET - status 500 - Internal Server Error if joke id not valid data type", () => {
        return request(app)
            .get("/jokes/one")
            .expect(500)
            .then((response) => {
                expect(response.body.msg).toBe("Internal Server Error")
            })
    })
    test("GET - status 404 - Not Found if joke id not a valid number", () => {
        return request(app)
            .get("/jokes/500")
            .expect(404)
            .then((response) => {
                expect(response.body.msg).toBe("Not Found")
            })
    })
    test("GET - status 404 - Not Found if route invalid", () => {
        return request(app)
            .get("/invalid")
            .expect(404)
            .then((response) => {
                expect(response.body.msg).toBe("Not Found")
            })
    })
})