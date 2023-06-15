import {Router} from "express"
import { ActualizarMensaje, ActualizarParticipanteChat, ActualizarSalaChat, BorrarMensaje, BorrarParticipanteChat, BorrarSalaChat, CrearParticipanteChat, CrearSalaChat, EnviarMensaje, LeerChatsPorCarnet, LeerMensajes, LeerMensajesPorIDChat, LeerParticipanteChat, LeerParticipantesChatPorId, LeerParticipantesPorChat, LeerSalasChat, LeerSalasChatPorID } from "../controllers/chat.controller"

const router = Router()

router.post('/CrearSalaChat', CrearSalaChat)
router.get('/LeerSalasChat', LeerSalasChat)
router.post('/LeerSalasChatPorID', LeerSalasChatPorID)
router.put('/ActualizarSalaChat', ActualizarSalaChat)
router.delete('/BorrarSalaChat', BorrarSalaChat)

router.post('/CrearParticipanteChat', CrearParticipanteChat)
router.get('/LeerParticipanteChat', LeerParticipanteChat)
router.post('/LeerParticipantesChatPorId', LeerParticipantesChatPorId)
router.post('/LeerChatsPorCarnet', LeerChatsPorCarnet)
router.post('/LeerParticipantesPorChat', LeerParticipantesPorChat)
router.put('/ActualizarParticipanteChat', ActualizarParticipanteChat)
router.delete('BorrarParticipanteChat', BorrarParticipanteChat)

router.post('/EnviarMensaje', EnviarMensaje)
router.get('/LeerMensajes', LeerMensajes)
router.post('/LeerMensajesPorIDChat', LeerMensajesPorIDChat)
router.put('/ActualizarMensaje', ActualizarMensaje)
router.delete('/BorrarMensaje', BorrarMensaje)

export default router