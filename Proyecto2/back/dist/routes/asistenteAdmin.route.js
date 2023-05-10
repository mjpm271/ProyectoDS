"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _asistenteAdmin = require("../controllers/asistenteAdmin.controller");
var router = (0, _express.Router)();
router.post('/asistente/AgregarProfEquipo', _asistenteAdmin.AgregarProfesorEquipo);
router.post('/asistente/BuscarProfEquipo', _asistenteAdmin.BuscarProfesorEquipo);
router.post('/asistente/ModificarProfEquipo', _asistenteAdmin.ModificarProfesorEquipo);
router.post('/asistente/DefinirCoordinador', _asistenteAdmin.DefinirCoordinador);
router.post('/asistente/AgregarProfesor', _asistenteAdmin.AgregarProfesor);
router.post('/asistente/BuscarProfesor', _asistenteAdmin.BuscarProfesor);
router.post('/asistente/ModificarProfesor', _asistenteAdmin.ModificarProfesor);
router["delete"]('/asistente/InhabilitarProfesor', _asistenteAdmin.InhabilitarProfesor);
var _default = router;
exports["default"] = _default;