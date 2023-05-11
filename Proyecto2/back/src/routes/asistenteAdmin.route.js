import { Router } from "express"
import {AgregarProfesorEquipo,BuscarProfesorEquipo,ModificarProfesorEquipo,DefinirCoordinador,AgregarProfesor,BuscarProfesor,ModificarProfesor,InhabilitarProfesor} from "../controllers/asistenteAdmin.controller"

const router = Router()

router.post('/asistente/AgregarProfEquipo',AgregarProfesorEquipo)
router.get('/asistente/BuscarProfEquipo',BuscarProfesorEquipo)
router.put('/asistente/ModificarProfEquipo',ModificarProfesorEquipo)
router.put('/asistente/DefinirCoordinador',DefinirCoordinador)
router.post('/asistente/AgregarProfesor',AgregarProfesor)
router.get('/asistente/BuscarProfesor',BuscarProfesor)
router.put('/asistente/ModificarProfesor',ModificarProfesor)
router.delete('/asistente/InhabilitarProfesor',InhabilitarProfesor)

export default router