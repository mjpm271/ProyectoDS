"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
var _ejemplo = _interopRequireDefault(require("./routes/ejemplo.route"));
// import './database/connection.js'

_app["default"].listen(_app["default"].get('port'));
console.log('server running on', _app["default"].get('port'));