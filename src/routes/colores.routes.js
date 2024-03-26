import { Router } from "express";
import { listarColores } from "../controllers/colores.controller.js";

const router = Router();

router.route("/colores").get(listarColores);

export default router;