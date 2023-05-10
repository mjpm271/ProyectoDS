"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _index = require("../controllers/index.controller");
var router = (0, _express.Router)();

//landing page view
router.get('/', function (req, res) {
  console.log('redirecting root to index (login page)');
  res.redirect('/login');
});
router.get('/login', _index.loginPage);
router.post('/login', _index.loginPostFunction);
var _default = router;
exports["default"] = _default;