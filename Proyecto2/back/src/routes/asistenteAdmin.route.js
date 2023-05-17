import { Router } from "express"
import {AgregarProfesorEquipo,BuscarProfesorEquipo,ModificarProfesorEquipo,DefinirCoordinador,AgregarProfesor,
        BuscarProfesor,ModificarProfesor,InhabilitarProfesor, CrearEquipoGuia, ConsultarMiembrosEquipoGuia} from "../controllers/asistenteAdmin.controller"

const router = Router()

router.post('/CrearEquipoGuia',CrearEquipoGuia)
router.post('/AgregarProfEquipo',AgregarProfesorEquipo)
router.get('/BuscarProfEquipo',BuscarProfesorEquipo) //No estoy segura de que deberia hacer xd
router.post('/ConsultarMiembrosEquipo',ConsultarMiembrosEquipoGuia) //Miembros de un equipo
router.put('/ModificarProfEquipo',ModificarProfesorEquipo)
router.put('/DefinirCoordinador',DefinirCoordinador)
router.post('/AgregarProfesor',AgregarProfesor)
router.post('/BuscarProfesor',BuscarProfesor)
router.put('/ModificarProfesor',ModificarProfesor)
router.delete('/InhabilitarProfesor',InhabilitarProfesor)

export default router

/*
GET -> Read (Sin parametros de busqueda)
POST -> Create o Read(con parametros de entrada)
PUT -> Update (con parametros de entrada)
DELETE -> Delete(con parametros de entrada)
*/