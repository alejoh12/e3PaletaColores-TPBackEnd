import { Router } from "express";
import { crearColor, editarColor, listarColores, obtenerColor } from "../controllers/colores.controller.js";

const router = Router();

router.route("/colores").get(listarColores).post(crearColor);
router.route("/colores/:id").get(obtenerColor).put(editarColor);

export default router;