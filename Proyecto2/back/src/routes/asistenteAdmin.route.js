import { Router } from "express"
import {AgregarProfesorEquipo,BuscarProfesorEquipo,ModificarProfesorEquipo,DefinirCoordinador,AgregarProfesor,BuscarProfesor,ModificarProfesor,InhabilitarProfesor} from "../controllers/asistenteAdmin.controller"

const router = Router()

router.post('/asistente/AgregarProfEquipo',AgregarProfesorEquipo)
router.post('/asistente/BuscarProfEquipo',BuscarProfesorEquipo)
router.post('/asistente/ModificarProfEquipo',ModificarProfesorEquipo)
router.post('/asistente/DefinirCoordinador',DefinirCoordinador)
router.post('/asistente/AgregarProfesor',AgregarProfesor)
router.post('/asistente/BuscarProfesor',BuscarProfesor)
router.post('/asistente/ModificarProfesor',ModificarProfesor)
router.delete('/asistente/InhabilitarProfesor',InhabilitarProfesor)

export default router