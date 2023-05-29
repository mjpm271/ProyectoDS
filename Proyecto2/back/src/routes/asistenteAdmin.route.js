import { Router } from "express"
import {AgregarProfesorEquipo,BuscarProfesorEquipo,ModificarProfesorEquipo,DefinirCoordinador,AgregarProfesor,
        BuscarProfesor, ModificarProfesor, InhabilitarProfesor, CrearEquipoGuia, ConsultarMiembrosEquipoGuia,
        SiguienteActividad, SubirInformacionEstudiantes, DescargarInformacionEstudiantes, HabilitarProfesor, HabilitarProfesorEquipo
} from "../controllers/asistenteAdmin.controller"

const router = Router()

router.post('/CrearEquipoGuia', CrearEquipoGuia)
router.post('/AgregarProfesorEquipo', AgregarProfesorEquipo)
router.post('/BuscarProfesorEquipo', BuscarProfesorEquipo) //No estoy segura de que deberia hacer xd
router.post('/ConsultarMiembrosEquipo', ConsultarMiembrosEquipoGuia) //Miembros de un equipo
router.put('/ModificarProfesorEquipo', ModificarProfesorEquipo)
router.put('/HabilitarProfesorEquipo',HabilitarProfesorEquipo)
router.put('/InhabilitarProfesor',InhabilitarProfesor)
router.put('/DefinirCoordinador', DefinirCoordinador)
router.post('/AgregarProfesor', AgregarProfesor)
router.post('/BuscarProfesor', BuscarProfesor)
router.put('/ModificarProfesor', ModificarProfesor)
router.put('/InhabilitarProfesor', InhabilitarProfesor)
router.put('/HabilitarProfesor',HabilitarProfesor)
router.post('/SiguienteActividad', SiguienteActividad)

// pruebas excel
router.post('/SubirInformacionEstudiantes', SubirInformacionEstudiantes)
router.post('/DescargarInformacionEstudiantes', DescargarInformacionEstudiantes)

export default router

/*
GET -> Read (Sin parametros de busqueda)
POST -> Create o Read(con parametros de entrada)
PUT -> Update (con parametros de entrada)
DELETE -> Delete(con parameos de entrada)
*/
