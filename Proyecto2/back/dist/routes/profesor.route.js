"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _profesor = require("../controllers/profesor.controller");
var router = (0, _express.Router)();
router.post('/profesor/VerPlanTrabajo', _profesor.VerPlanTrabajo);
router.get('/profesor/VerPlanesTrabajo', _profesor.VerPlanesTrabajo);
router.post('/profesor/VerActividad', _profesor.VerActividad);
router.post('/profesor/Comentar', _profesor.Comentar);
router.post('/profesor/VerPerfil', _profesor.VerProfesorPerfil);
router.post('/profesor/ModificarPerfil', _profesor.ModificarProfesorPerfil);
var _default = router;
exports["default"] = _default;