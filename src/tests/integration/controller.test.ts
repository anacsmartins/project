import "reflect-metadata";  // Importante para ativar o suporte à reflexão no ambiente de testes
import { Server } from "../../infrastructure/server";
import request from "supertest";

describe("Controller Test", () => {
  let serverInstance: Server;

  jest.mock("@sendgrid/mail", () => ({
    setApiKey: jest.fn(),
  }));

  beforeAll(() => {
    // Mockando a variável de ambiente

  });

  afterAll(() => {
    // Limpar o mock após os testes
    jest.restoreAllMocks();  // Limpa os mocks após cada teste

  });

  beforeEach(() => {
    serverInstance = new Server();
  });

  it("should return a successful", async () => {
    const response = await request(serverInstance.app)
      .post("/rota")
      .send({
        birthDate: "1990-01-01",
      });

    //expect(response.status).toBe(200);
    // expect(response.body).toEqual({
    //     "id": 2
    //   }
    // );
  });
});
