import { Router } from "express"
import { getTipoPersona, loginPostFunction } from "../controllers/ejemplo.controller"

const router = Router()

router.get('/tipoPersona',getTipoPersona)
router.post('/login', loginPostFunction)

export default router