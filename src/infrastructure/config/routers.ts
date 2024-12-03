import express from "express";
import { Controller } from "../../application/controller";

const router = express.Router();
const controller = new Controller();

// Definindo a rota
router.get(
  "/home",
  (req, res) => controller.simulate(req, res)
);

export default router;
