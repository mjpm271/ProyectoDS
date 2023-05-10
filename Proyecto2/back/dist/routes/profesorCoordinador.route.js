"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _profesorCoordinador = require("../controllers/profesorCoordinador.controller");
var router = (0, _express.Router)();
router.post('/coordinador/CrearPlan', _profesorCoordinador.CrearPlanTrabajo);
router.get('/coordinador/VerPlanes', _profesorCoordinador.VerPlanesTrabajo);
router.post('/coordinador/ModificarPlan', _profesorCoordinador.ModificarInformacionPlan);
router.post('/coordinador/EliminarPlan', _profesorCoordinador.EliminarPlanTrabajo);
router.post('/coordinador/CrearActividad', _profesorCoordinador.CrearActividad);
router.post('/coordinador/VerActividad', _profesorCoordinador.VerActividad);
router.post('/coordinador/ModificarActividad', _profesorCoordinador.ModificarActividad);
router.post('/coordinador/EliminarActividad', _profesorCoordinador.EliminarActividad);
router.post('/coordinador/Comentar', _profesorCoordinador.Comentar);
router.post('/coordinador/VerPerfil', _profesorCoordinador.VerProfesorPerfil);
router.post('/coordinador/ModificarPerfil', _profesorCoordinador.ModificarProfesorPerfil);
var _default = router;
exports["default"] = _default;