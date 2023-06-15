import { Router } from "express"
import { SimuladorFecha, NotificarCancelacion, Desver, NotificacionVista, HabilitarNotificaciones, DeshabilitarNotificaciones, Habilitado } from "../controllers/notificacion.controller"

const router = Router()

router.post('/SimuladorFecha', SimuladorFecha)
router.post('/NotificarCancelacion', NotificarCancelacion)
router.post('/Desver',Desver)
router.post('/NotificacionVista',NotificacionVista)
router.post('/HabilitarNotificaciones',HabilitarNotificaciones)
router.post('/DeshabilitarNotificaciones',DeshabilitarNotificaciones)
router.post('/Habilitado',Habilitado)

export default router
