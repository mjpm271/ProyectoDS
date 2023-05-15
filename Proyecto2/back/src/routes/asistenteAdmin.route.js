import { Router } from "express"
import {AgregarProfesorEquipo,BuscarProfesorEquipo,ModificarProfesorEquipo,DefinirCoordinador,AgregarProfesor,BuscarProfesor,ModificarProfesor,InhabilitarProfesor, CrearEquipoGuia} from "../controllers/asistenteAdmin.controller"

const router = Router()

router.post('/CrearEquipoGuia',CrearEquipoGuia)
router.post('/AgregarProfEquipo',AgregarProfesorEquipo)
router.get('/BuscarProfEquipo',BuscarProfesorEquipo)
router.put('/ModificarProfEquipo',ModificarProfesorEquipo)
router.put('/DefinirCoordinador',DefinirCoordinador)
router.post('/AgregarProfesor',AgregarProfesor)
router.post('/BuscarProfesor',BuscarProfesor)
router.put('/ModificarProfesor',ModificarProfesor)
router.delete('/InhabilitarProfesor',InhabilitarProfesor)

export default router