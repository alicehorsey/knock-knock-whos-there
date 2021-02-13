process.env.NODE_ENV = "development";
const app = require("../app");
const request = require("supertest");
const connection = require("../database/connect");

describe("Testing /jokes endpoint", () => {
    afterAll(() => {
        return connection.destroy();
    })
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
})