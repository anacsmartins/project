import 'reflect-metadata';
import express from "express";
import bodyParser from "body-parser";
import routes from "../infrastructure/config/routers";

export class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.defaultRoute();
    this.routes();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private defaultRoute(): void {
    this.app.get("/", (req, res) => {
      res.json({ message: "Olá!" });
    });
  }

  private routes(): void {
    this.app.use("/", routes); // Rotas 
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
