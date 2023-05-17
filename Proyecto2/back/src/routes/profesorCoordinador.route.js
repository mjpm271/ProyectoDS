import { Router } from "express"
import { CrearPlanTrabajo,VerPlanTrabajo,VerPlanesTrabajo,ModificarInformacionPlan,EliminarPlanTrabajo,CrearActividad,VerActividad,ModificarActividad,EliminarActividad,VerProfesorPerfil,ModificarProfesorPerfil, Comentar, VerActividadxPlan } from "../controllers/profesorCoordinador.controller"

const router = Router()

router.post('/CrearPlan',CrearPlanTrabajo)
router.get('/VerPlanes',VerPlanesTrabajo)
router.post('/ModificarPlan',ModificarInformacionPlan)
router.delete('/EliminarPlan',EliminarPlanTrabajo)
router.post('/CrearActividad',CrearActividad)
router.post('/VerActividad',VerActividad)
router.post('/ActividadxPlan',VerActividadxPlan)
router.post('/ModificarActividad',ModificarActividad)
router.delete('/EliminarActividad',EliminarActividad)
router.post('/Comentar',Comentar)
router.post('/VerPerfil',VerProfesorPerfil)
router.post('/ModificarPerfil',ModificarProfesorPerfil)


export default router