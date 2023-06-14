import { Router } from "express"
import { SimuladorFecha } from "../controllers/notificacion.controller"

const router = Router()

router.post('/SimuladorFecha', SimuladorFecha)


export default router
