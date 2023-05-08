import { Router } from "express"
import { VerPlanTrabajo , VerPlanesTrabajo ,VerActividad , Comentar, VerProfesorPerfil, ModificarProfesorPerfil } from "../controllers/profesor.controller"

const router = Router()

router.post('/profesor/VerPlanTrabajo', VerPlanTrabajo)
router.get('/profesor/VerPlanesTrabajo',VerPlanesTrabajo)
router.post('/profesor/VerActividad',VerActividad)
router.post('/profesor/Comentar',Comentar)
router.post('/profesor/VerPerfil',VerProfesorPerfil)
router.post('/profesor/ModificarPerfil',ModificarProfesorPerfil)

export default router