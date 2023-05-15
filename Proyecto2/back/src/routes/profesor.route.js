import { Router } from "express"
import { VerPlanTrabajo , VerPlanesTrabajo ,VerActividad , Comentar, VerProfesorPerfil, ModificarProfesorPerfil, VerActividadxPlan, VerComentariosActividad, VerEstudiantesAlf, VerEstudianteSede, VerEstudianteCarnet} from "../controllers/profesor.controller"

const router = Router()

router.post('/VerPlanTrabajo', VerPlanTrabajo)
router.get('/VerPlanesTrabajo',VerPlanesTrabajo)
router.post('/VerActividad',VerActividad)
router.post('/VerActividadxPlan',VerActividadxPlan)
router.post('/Comentar',Comentar)
router.post('/ComentariosxActividad',VerComentariosActividad)
router.post('/VerPerfil',VerProfesorPerfil)
router.post('/ModificarPerfil',ModificarProfesorPerfil)
router.get('/VerEstudiantesAlf',VerEstudiantesAlf)
router.post('/VerEstudiantesSede',VerEstudianteSede)
router.get('/VerEstudianteCarnet',VerEstudianteCarnet)

export default router