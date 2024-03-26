import { Router } from "express";
import { crearColor, listarColores, obtenerColor } from "../controllers/colores.controller.js";

const router = Router();

router.route("/colores").get(listarColores).post(crearColor);
router.route("/colores/:id").get(obtenerColor);

export default router;