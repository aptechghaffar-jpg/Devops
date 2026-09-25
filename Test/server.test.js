const request = require("supertest");
const Server = require("../server");

describe("GET /api/hello", () => {
  test("should return Hello World", async () => {
    const response = await request(Server).get("/api/hello");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Hello World");
  });
});
