import { Router } from "express";
import { crearColor, listarColores } from "../controllers/colores.controller.js";

const router = Router();

router.route("/colores").get(listarColores).post(crearColor);

export default router;