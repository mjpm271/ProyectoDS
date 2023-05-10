"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ejemplo = require("../controllers/ejemplo.controller");
var router = (0, _express.Router)();
router.get('/tipoPersona', _ejemplo.getTipoPersona);
var _default = router;
exports["default"] = _default;