"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerProfesorPerfil = exports.VerPlanesTrabajo = exports.VerPlanTrabajo = exports.VerActividad = exports.ModificarProfesorPerfil = exports.Comentar = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
// Ver Plan de Trabajo
var VerPlanTrabajo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var IDplanTrabajo, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          IDplanTrabajo = req.body.IDplanTrabajo;
          console.log('valores:', req.body);
          if (IDplanTrabajo) {
            _context.next = 7;
            break;
          }
          console.log('here');
          return _context.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context.prev = 7;
          _context.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context.sent;
          _context.next = 13;
          return pool.request().input('ID Plan Trabajo', sql.Int, IDplanTrabajo).execute('ReadPlanTrabajoPorID');
        case 13:
          result = _context.sent;
          console.log(result);
          res.json(result.recordset);
          _context.next = 21;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](7);
          res.sendStatus(500, _context.t0.message);
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[7, 18]]);
  }));
  return function VerPlanTrabajo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Ver Planes de Trabajo
exports.VerPlanTrabajo = VerPlanTrabajo;
var VerPlanesTrabajo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().execute('ReadPlanTrabajos');
        case 7:
          result = _context2.sent;
          console.log(result);
          res.json(result.recordset);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function VerPlanesTrabajo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//Ver integrantes del Equipo Guia ---> Falta agregar procedure

// Ver actividad 
exports.VerPlanesTrabajo = VerPlanesTrabajo;
var VerActividad = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var IDactividad, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          IDactividad = req.body.IDactividad;
          console.log('valores:', req.body);
          if (IDactividad) {
            _context3.next = 7;
            break;
          }
          console.log('here');
          return _context3.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context3.prev = 7;
          _context3.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context3.sent;
          _context3.next = 13;
          return pool.request().input('ID Actividad', sql.Int, IDactividad).execute('ReadActividadPorID');
        case 13:
          result = _context3.sent;
          console.log(result);
          res.json(result.recordset);
          _context3.next = 21;
          break;
        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](7);
          res.sendStatus(500, _context3.t0.message);
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[7, 18]]);
  }));
  return function VerActividad(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Ver actividad x Plan de trabajo --> Falta agregar procedure

// Comentar
exports.VerActividad = VerActividad;
var Comentar = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, IDprofesor, IDemisor, IDactividad, IDcomentarioPadre, Hora, Fecha, Comentarios, Contenido, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body = req.body, IDprofesor = _req$body.IDprofesor, IDemisor = _req$body.IDemisor, IDactividad = _req$body.IDactividad, IDcomentarioPadre = _req$body.IDcomentarioPadre, Hora = _req$body.Hora, Fecha = _req$body.Fecha, Comentarios = _req$body.Comentarios, Contenido = _req$body.Contenido;
          console.log('valores:', req.body);
          if (!(!IDprofesor || !IDemisor || !IDactividad || !IDcomentarioPadre || !Hora || !Fecha || !Comentarios || !Contenido)) {
            _context4.next = 7;
            break;
          }
          console.log('here');
          return _context4.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context4.prev = 7;
          _context4.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context4.sent;
          _context4.next = 13;
          return pool.request().replaceInput('IDprofesor').input('ID ', sql.Int, IDprofesor).input('Emisor ', sql.Int, IDemisor).input('ID Actividad ', sql.Int, IDactividad).input('ComentarioPadre', sql.Int, IDcomentarioPadre).input('Hora', sql.Time, Hora).input('Fecha', sql.Date, Fecha).input('Comentarios ', sql.VarChar, Comentarios).input('Contenido', sql.VarChar, Contenido) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
          .execute('CreatePersona');
        case 13:
          result = _context4.sent;
          console.log(result);
          _context4.next = 20;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](7);
          res.sendStatus(500, _context4.t0.message);
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[7, 17]]);
  }));
  return function Comentar(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Ver comentarios x Actividad de un Plan especifico ---> Falta agregar procedure

//Responder comentarios
// Preguntar como se maneja la columna comentarios en la base

// Ver perfil profesor

// recuperar informacion una vez ingrese el usuario al sistema
exports.Comentar = Comentar;
var VerProfesorPerfil = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          //IDpersona = 
          _context5.prev = 2;
          _context5.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context5.sent;
          _context5.next = 8;
          return pool.request().input('ID Profesor', sql.Int, IDpersona).execute('ReadPersonaPorID');
        case 8:
          result = _context5.sent;
          console.log(result);
          res.json(result.recordset);
          _context5.next = 16;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](2);
          res.sendStatus(500, _context5.t0.message);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 13]]);
  }));
  return function VerProfesorPerfil(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//Modificar informacion perfil de profesor
// recuperar informacion una vez ingrese el usuario al sistema
exports.VerProfesorPerfil = VerProfesorPerfil;
var ModificarProfesorPerfil = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDpersonatipo, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, IDpersona = _req$body2.IDpersona, NombreCompleto = _req$body2.NombreCompleto, Correo = _req$body2.Correo, Contra = _req$body2.Contra, Habilitado = _req$body2.Habilitado, Coordinador = _req$body2.Coordinador, Sede = _req$body2.Sede, IDpersonatipo = _req$body2.IDpersonatipo;
          console.log('valores:', req.body);
          if (!(!IDpersona || !NombreCompleto || !Correo || !Contra || !Habilitado || !Coordinador || !Sede || !IDtipo)) {
            _context6.next = 5;
            break;
          }
          console.log('here');
          return _context6.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 5:
          _context6.prev = 5;
          _context6.next = 8;
          return (0, _connection.getConnection)();
        case 8:
          pool = _context6.sent;
          _context6.next = 11;
          return pool.request().input('ID ', sql.Int, ID).input('Nombre Completo', sql.VarChar, NombreCompleto).input('Correo ', sql.VarChar, Correo).input('Contraseña', sql.VarChar, Contra).input('Habilitado', sql.bit, Habilitado).input('Coordinador', sql.bit, Coordinador).input('Sede ', sql.Int, Sede).input('ID tipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
          .execute('UpdatePersona');
        case 11:
          result = _context6.sent;
          console.log(result);
          _context6.next = 18;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](5);
          res.sendStatus(500, _context6.t0.message);
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[5, 15]]);
  }));
  return function ModificarProfesorPerfil(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.ModificarProfesorPerfil = ModificarProfesorPerfil;