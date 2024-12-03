import { Server } from "../../infrastructure/server";
import supertest from "supertest";


describe("Server", () => {
  let server: Server;

  beforeAll(() => {
    server = new Server();
  });

  it("should return status 404 for unknown routes", async () => {
    const response = await supertest(server.app).get("/unknown-route");
    
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(undefined);
  });
  
});
