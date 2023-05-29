import { Router } from "express"
import { CrearPlanTrabajo,VerPlanTrabajo,VerPlanesTrabajo,ModificarInformacionPlan,EliminarPlanTrabajo,CrearActividad,VerActividad,ModificarActividad,EliminarActividad,VerProfesorPerfil,ModificarProfesorPerfil, Comentar, VerActividadxPlan, CrearEvidencia, CrearObservacion, RealizarActividad, CancelarActividad, DefinirResponsable, VerResponsables, VerObservacion, VerEvidencias} from "../controllers/profesorCoordinador.controller"

const router = Router()

router.post('/CrearPlan',CrearPlanTrabajo)
router.get('/VerPlanes',VerPlanesTrabajo)
router.post('/ModificarPlan',ModificarInformacionPlan)
router.delete('/EliminarPlan',EliminarPlanTrabajo)
router.post('/CrearActividad',CrearActividad)
router.post('/VerActividad',VerActividad)
router.post('/ActividadxPlan',VerActividadxPlan)
router.post('/ModificarActividad',ModificarActividad)
router.post('/DefinirResponsable',DefinirResponsable)
router.post('/VerResponsables',VerResponsables)
router.delete('/EliminarActividad',EliminarActividad)
router.post('/Comentar',Comentar)
router.post('/VerPerfil',VerProfesorPerfil)
router.post('/ModificarPerfil',ModificarProfesorPerfil)
router.post('/CrearEvidencia',CrearEvidencia)
router.post('/VerEvidencias',VerEvidencias)
router.post('/CrearObservacion',CrearObservacion)
router.post('/VerObservacion',VerObservacion)
router.put('/RealizarActividad',RealizarActividad)
router.put('/CancelarActividad',CancelarActividad)

export default router
