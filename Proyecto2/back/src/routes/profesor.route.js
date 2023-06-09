import { Router } from "express"
import { VerPlanTrabajo, VerPlanesTrabajo, VerActividad, Comentar, VerProfesorPerfil, ModificarProfesorPerfil, VerActividadxPlan, VerComentariosActividad, VerEstudiantesAlf, VerEstudianteSede, VerPersonaPorID, CrearSala, AgragarAlChat, ChatPorID, VerEstudianteCarnet, VerComentariosRespuesta} from "../controllers/profesor.controller"

const router = Router()

router.post('/VerPlanTrabajo', VerPlanTrabajo)
router.get('/VerPlanesTrabajo',VerPlanesTrabajo)
router.post('/VerActividad',VerActividad)
router.post('/VerActividadxPlan',VerActividadxPlan)
router.post('/Comentar',Comentar)
router.post('/ComentariosxActividad',VerComentariosActividad)
router.post('/respuestasComentario',VerComentariosRespuesta)
router.post('/VerPerfil',VerProfesorPerfil)
router.put('/ModificarProfesorPerfil',ModificarProfesorPerfil)
router.get('/VerEstudiantesAlf',VerEstudiantesAlf)
router.post('/VerEstudiantesSede',VerEstudianteSede)
router.get('/VerEstudianteCarnet', VerEstudianteCarnet)
router.post('/VerPersonaPorID', VerPersonaPorID)
router.post('/CrearSala', CrearSala)
router.post('/AgragarAlChat', AgragarAlChat)
router.post('/ChatPorID', ChatPorID)
export default router