import { Router } from "express"
import {login, CambiarContra, VerNotificaciones, VerNotificacion} from '../controllers/index.controller'

const router = Router()

router.post('/login', login)
router.put('/CambiarContra',CambiarContra)
router.get('/VerNotificaciones',VerNotificaciones)
router.post('/VerNotificacion',VerNotificacion)
export default router