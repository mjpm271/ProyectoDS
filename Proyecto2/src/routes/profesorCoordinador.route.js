import { Router } from "express"
import { CrearPlanTrabajo,VerPlanTrabajo,VerPlanesTrabajo,ModificarInformacionPlan,EliminarPlanTrabajo,CrearActividad,VerActividad,ModificarActividad,EliminarActividad,VerProfesorPerfil,ModificarProfesorPerfil, Comentar } from "../controllers/profesorCoordinador.controller"

const router = Router()

router.post('/coordinador/CrearPlan',CrearPlanTrabajo)
router.get('/coordinador/VerPlanes',VerPlanesTrabajo)
router.post('/coordinador/ModificarPlan',ModificarInformacionPlan)
router.post('/coordinador/EliminarPlan',EliminarPlanTrabajo)
router.post('/coordinador/CrearActividad',CrearActividad)
router.post('/coordinador/VerActividad',VerActividad)
router.post('/coordinador/ModificarActividad',ModificarActividad)
router.post('/coordinador/EliminarActividad',EliminarActividad)
router.post('/coordinador/Comentar',Comentar)
router.post('/coordinador/VerPerfil',VerProfesorPerfil)
router.post('/coordinador/ModificarPerfil',ModificarProfesorPerfil)


export default router