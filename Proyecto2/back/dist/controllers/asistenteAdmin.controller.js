"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModificarProfesorEquipo = exports.ModificarProfesor = exports.InhabilitarProfesor = exports.DefinirCoordinador = exports.BuscarProfesorEquipo = exports.BuscarProfesor = exports.AgregarProfesorEquipo = exports.AgregarProfesor = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
// ------C R U D ------  Equipo Profesores ------//
// Agregar Profesores en Equipo
var AgregarProfesorEquipo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, IDequipoGuia, IDprofesor, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body = req.body, IDequipoGuia = _req$body.IDequipoGuia, IDprofesor = _req$body.IDprofesor;
          console.log('valores:', req.body);
          if (!(!IDequipoGuia || !IDprofesor)) {
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
          return pool.request().input('ID Equipo Guia', _connection.sql.Int, IDequipoGuia).input('ID Profesor', _connection.sql.Int, IDprofesor).execute('CreateEquipoGuiaProfesor');
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
  return function AgregarProfesorEquipo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//Buscar 1 Profesor en Equipo Profesores
exports.AgregarProfesorEquipo = AgregarProfesorEquipo;
var BuscarProfesorEquipo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, IDequipoGuia, IDprofesor, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body2 = req.body, IDequipoGuia = _req$body2.IDequipoGuia, IDprofesor = _req$body2.IDprofesor;
          console.log('valores:', req.body);
          if (!(!IDequipoGuia || !IDprofesor)) {
            _context2.next = 7;
            break;
          }
          console.log('here');
          return _context2.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context2.prev = 7;
          _context2.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context2.sent;
          _context2.next = 13;
          return pool.request().input('ID Equipo Guia', _connection.sql.Int, IDequipoGuia).input('ID Profesor', _connection.sql.Int, IDprofesor).execute('ReadEquipoGuiaProfesorPorID');
        case 13:
          result = _context2.sent;
          console.log(result);
          res.json(result.recordset);
          _context2.next = 21;
          break;
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](7);
          res.sendStatus(500, _context2.t0.message);
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[7, 18]]);
  }));
  return function BuscarProfesorEquipo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//Consultar Integrantes del Equipo de Profesores
//Falta opcion para consultar los integrantes del equipo guia

//Modificar informacion de Profesor en Equipo Profesores
exports.BuscarProfesorEquipo = BuscarProfesorEquipo;
var ModificarProfesorEquipo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body3, IDequipoGuia, IDprofesor, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body3 = req.body, IDequipoGuia = _req$body3.IDequipoGuia, IDprofesor = _req$body3.IDprofesor;
          console.log('valores:', req.body);
          if (!(!IDequipoGuia || !IDprofesor)) {
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
          return pool.request().input('ID Equipo Guia', _connection.sql.Int, IDequipoGuia).input('ID Profesor', _connection.sql.Int, IDprofesor).execute('UpdateEquipoGuiaProfesor');
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
  return function ModificarProfesorEquipo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//Inhabilitar Profesor en Equipo Profesor

// --> realmente no se elimina el profesor del equipo porque debe quedar historial
//      entonces deberia de inhabilitarse de alguna forma en el equipo

//Definir Coordinador
exports.ModificarProfesorEquipo = ModificarProfesorEquipo;
var DefinirCoordinador = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var IDpersona, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          IDpersona = req.body.IDpersona;
          console.log('valores:', req.body);
          if (IDpersona) {
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
          return pool.request().input('ID Profesor', _connection.sql.Int, IDpersona).execute('DefinirCoordinador');
        case 13:
          result = _context4.sent;
          console.log(result);
          res.json(result.recordset);
          _context4.next = 21;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](7);
          res.sendStatus(500, _context4.t0.message);
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[7, 18]]);
  }));
  return function DefinirCoordinador(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// ------C R U D ------ Profesores ------//
// Agregar Profesor -- Deberia ser solo por sede
exports.DefinirCoordinador = DefinirCoordinador;
var AgregarProfesor = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body4, ID, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDtipo, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body4 = req.body, ID = _req$body4.ID, NombreCompleto = _req$body4.NombreCompleto, Correo = _req$body4.Correo, Contra = _req$body4.Contra, Habilitado = _req$body4.Habilitado, Coordinador = _req$body4.Coordinador, Sede = _req$body4.Sede, IDtipo = _req$body4.IDtipo;
          console.log('valores:', req.body);
          // if (!ID || !NombreCompleto || !Correo || !Contra || !Habilitado || !Coordinador || !Sede || !IDtipo) {
          //     console.log('here')
          //     return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
          // }
          _context5.prev = 4;
          _context5.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context5.sent;
          console.log('whatever');
          _context5.next = 11;
          return pool.request().input('ID', _connection.sql.Int, ID).input('NombreCompleto', _connection.sql.VarChar, NombreCompleto).input('Correo ', _connection.sql.VarChar, Correo).input('Contra', _connection.sql.VarChar, Contra).input('Habilitado', _connection.sql.Bit, Habilitado).input('Coordinador', _connection.sql.Bit, Coordinador).input('Sede', _connection.sql.Int, Sede).input('IDtipo', _connection.sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
          .execute('CreatePersona');
        case 11:
          result = _context5.sent;
          console.log(result);
          _context5.next = 18;
          break;
        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](4);
          res.sendStatus(500, _context5.t0.message);
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[4, 15]]);
  }));
  return function AgregarProfesor(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//Buscar Profesor -- Deberia ser solo por sede (?)
exports.AgregarProfesor = AgregarProfesor;
var BuscarProfesor = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var IDpersona, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          IDpersona = req.body.IDpersona;
          console.log('valores:', req.body);
          if (IDpersona) {
            _context6.next = 7;
            break;
          }
          console.log('here');
          return _context6.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context6.prev = 7;
          _context6.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context6.sent;
          _context6.next = 13;
          return pool.request().input('ID Profesor', _connection.sql.Int, IDpersona).execute('ReadPersonaPorID');
        case 13:
          result = _context6.sent;
          console.log(result);
          res.json(result.recordset);
          _context6.next = 21;
          break;
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](7);
          res.sendStatus(500, _context6.t0.message);
        case 21:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[7, 18]]);
  }));
  return function BuscarProfesor(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

//Modificar informacion de Profesor 
exports.BuscarProfesor = BuscarProfesor;
var ModificarProfesor = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body5, IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDpersonatipo, pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body5 = req.body, IDpersona = _req$body5.IDpersona, NombreCompleto = _req$body5.NombreCompleto, Correo = _req$body5.Correo, Contra = _req$body5.Contra, Habilitado = _req$body5.Habilitado, Coordinador = _req$body5.Coordinador, Sede = _req$body5.Sede, IDpersonatipo = _req$body5.IDpersonatipo;
          console.log('valores:', req.body);
          if (!(!IDpersona || !NombreCompleto || !Correo || !Contra || !Habilitado || !Coordinador || !Sede || !IDtipo)) {
            _context7.next = 5;
            break;
          }
          console.log('here');
          return _context7.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 5:
          _context7.prev = 5;
          _context7.next = 8;
          return (0, _connection.getConnection)();
        case 8:
          pool = _context7.sent;
          _context7.next = 11;
          return pool.request().parameters(ID).parameters(NombreCompleto).parameters(Correo).parameters(Contra).parameters(Habilitado).parameters(Coordinador).parameters(Sede).parameters(IDtipo)
          // .input('ID ', sql.Int, ID)
          // .input('Nombre Completo', sql.VarChar, NombreCompleto)
          // .input('Correo ', sql.VarChar, Correo)
          // .input('Contraseña', sql.VarChar, Contra)
          // .input('Habilitado', sql.bit, Habilitado)
          // .input('Coordinador', sql.bit, Coordinador)
          // .input('Sede ', sql.Int, Sede)
          // .input('ID tipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
          .execute('UpdatePersona');
        case 11:
          result = _context7.sent;
          console.log(result);
          _context7.next = 18;
          break;
        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](5);
          res.sendStatus(500, _context7.t0.message);
        case 18:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[5, 15]]);
  }));
  return function ModificarProfesor(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

//Inhabilitar Profesor 
exports.ModificarProfesor = ModificarProfesor;
var InhabilitarProfesor = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var IDpersona, pool, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          IDpersona = req.body.IDpersona;
          console.log('valores:', req.body);
          if (IDprofesor) {
            _context8.next = 7;
            break;
          }
          console.log('here');
          return _context8.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context8.prev = 7;
          _context8.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context8.sent;
          _context8.next = 13;
          return pool.request().input('ID Profesor', _connection.sql.Int, IDpersona).execute('DeletePersona');
        case 13:
          result = _context8.sent;
          console.log(result);
          res.json(result.recordset);
          _context8.next = 21;
          break;
        case 18:
          _context8.prev = 18;
          _context8.t0 = _context8["catch"](7);
          res.sendStatus(500, _context8.t0.message);
        case 21:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[7, 18]]);
  }));
  return function InhabilitarProfesor(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.InhabilitarProfesor = InhabilitarProfesor;