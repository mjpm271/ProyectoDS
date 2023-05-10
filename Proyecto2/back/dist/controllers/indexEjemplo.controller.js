"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginPostFunction = exports.loginPage = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var loginPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res.render('login_view');
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function loginPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.loginPage = loginPage;
var loginPostFunction = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, UserName, Password, pool, result, statusCode;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, UserName = _req$body.UserName, Password = _req$body.Password;
          console.log("user login:", UserName, Password);
          if (!(!UserName || !Password)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bad Request. Please fill all fields'
          }));
        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context2.sent;
          _context2.next = 10;
          return pool.request().input('UserName', _connection.sql.VarChar, UserName).input('Password', _connection.sql.VarChar, Password).output('ExitCode', _connection.sql.Int).execute('OtroLogin');
        case 10:
          result = _context2.sent;
          console.log(result.output.ExitCode);
          statusCode = result.output.ExitCode;
          if ([1, 2, 3].includes(statusCode)) {
            _context2.next = 15;
            break;
          }
          return _context2.abrupt("return", res.render('login_view', {
            err_msg: "No se pudo hacer el inicio de sesión"
          }));
        case 15:
          console.log('Login de tipo', statusCode);
          if (statusCode == 1) {
            // es admin
            console.log('Es admin');
            res.redirect('admin?Login=' + result.recordset[0]['IDUsuarioBase']);
          } else if (statusCode == 2) {
            // es empleado
            console.log('Es empleado');
            res.redirect('empleado?Login=' + result.recordset[0]['IDUsuarioBase']);
          } else {
            // es cliente
            console.log('Es cliente');
            res.redirect('cliente?Login=' + result.recordset[0]['IDUsuarioBase']);
          }
          _context2.next = 22;
          break;
        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](4);
          res.sendStatus(500, _context2.t0.message);
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 19]]);
  }));
  return function loginPostFunction(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/* -> CREATE READ UPDATE DELETE
    HTTP
    GET -> READ
    POST -> CREATE, UPDATE
    DELETE -> DELETE
*/
exports.loginPostFunction = loginPostFunction;