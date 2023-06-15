import { Router } from "express"
import { SimuladorFecha, NotificarCancelacion, Desver, NotificacionVista } from "../controllers/notificacion.controller"

const router = Router()

router.post('/SimuladorFecha', SimuladorFecha)
router.post('/NotificarCancelacion', NotificarCancelacion)
router.post('/Desver',Desver)
router.post('/NotificacionVista',NotificacionVista)

export default router
