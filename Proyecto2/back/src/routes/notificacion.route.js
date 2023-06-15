import { Router } from "express"
import { SimuladorFecha, NotificarCancelacion } from "../controllers/notificacion.controller"

const router = Router()

router.post('/SimuladorFecha', SimuladorFecha)
router.post('/NotificarCancelacion', NotificarCancelacion)

export default router
