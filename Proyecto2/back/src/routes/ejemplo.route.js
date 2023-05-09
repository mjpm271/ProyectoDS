import { Router } from "express"
import { getTipoPersona } from "../controllers/ejemplo.controller"

const router = Router()

router.get('/tipoPersona',getTipoPersona)

export default router