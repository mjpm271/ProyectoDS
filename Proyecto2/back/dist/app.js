"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _ejemplo = _interopRequireDefault(require("./routes/ejemplo.route"));
var app = (0, _express["default"])();
app.use(_ejemplo["default"]);

// middlewares
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));

//settings
app.set('port', _config["default"].port);
var _default = app;
exports["default"] = _default;