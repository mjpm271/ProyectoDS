"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerProfesorPerfil = exports.VerPlanesTrabajo = exports.VerPlanTrabajo = exports.VerActividad = exports.ModificarProfesorPerfil = exports.ModificarInformacionPlan = exports.ModificarActividad = exports.EliminarPlanTrabajo = exports.EliminarActividad = exports.CrearPlanTrabajo = exports.CrearActividad = exports.Comentar = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
// Crear Plan Trabajo
var CrearPlanTrabajo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, Nombre, Abreviacion, IDcoordinador, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body = req.body, Nombre = _req$body.Nombre, Abreviacion = _req$body.Abreviacion, IDcoordinador = _req$body.IDcoordinador;
          console.log('valores:', req.body);
          if (!(!Nombre || !Abreviacion || !IDcoordinador)) {
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
          return pool.request().input('Nombre Plan', sql.VarChar, Nombre).input('Abreviacion', sql.VarChar, Abreviacion).input('Coordinador', sql.Int, IDcoordinador) //Revisar como recuperar informacion desde login
          .execute('CreateEquipoGuiaProfesor');
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
  return function CrearPlanTrabajo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Ver Plan de Trabajo
exports.CrearPlanTrabajo = CrearPlanTrabajo;
var VerPlanTrabajo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var IDplanTrabajo, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          IDplanTrabajo = req.body.IDplanTrabajo;
          console.log('valores:', req.body);
          if (IDplanTrabajo) {
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
          return pool.request().input('ID Plan Trabajo', sql.Int, IDplanTrabajo).execute('ReadPlanTrabajoPorID');
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
  return function VerPlanTrabajo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Ver Planes de Trabajo
exports.VerPlanTrabajo = VerPlanTrabajo;
var VerPlanesTrabajo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _context3.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().execute('ReadPlanTrabajos');
        case 7:
          result = _context3.sent;
          console.log(result);
          res.json(result.recordset);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function VerPlanesTrabajo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//Update Plan de Trabajo
exports.VerPlanesTrabajo = VerPlanesTrabajo;
var ModificarInformacionPlan = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, IDplanTrabajo, Nombre, Abreviacion, IDcoordinador, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body2 = req.body, IDplanTrabajo = _req$body2.IDplanTrabajo, Nombre = _req$body2.Nombre, Abreviacion = _req$body2.Abreviacion, IDcoordinador = _req$body2.IDcoordinador;
          console.log('valores:', req.body);
          if (!(!IDplanTrabajo || !Nombre || !Abreviacion || !IDcoordinador)) {
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
          return pool.request().input('ID Plan', sql.Int, IDplanTrabajo).input('Nombre Plan', sql.VarChar, Nombre).input('Abreviacion', sql.VarChar, Abreviacion).input('Coordinador', sql.Int, IDcoordinador) //Revisar como recuperar informacion desde login
          .execute('UpdatePlanTrabajo');
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
  return function ModificarInformacionPlan(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//Delete PLan de Trabajo
exports.ModificarInformacionPlan = ModificarInformacionPlan;
var EliminarPlanTrabajo = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var IDplanTrabajo, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          IDplanTrabajo = req.body.IDplanTrabajo;
          console.log('valores:', req.body);
          if (IDplanTrabajo) {
            _context5.next = 7;
            break;
          }
          console.log('here');
          return _context5.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context5.prev = 7;
          _context5.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context5.sent;
          _context5.next = 13;
          return pool.request().input('ID Plan', sql.Int, IDplanTrabajo).execute('DeletePlanTrabajo');
        case 13:
          result = _context5.sent;
          console.log(result);
          res.json(result.recordset);
          _context5.next = 21;
          break;
        case 18:
          _context5.prev = 18;
          _context5.t0 = _context5["catch"](7);
          res.sendStatus(500, _context5.t0.message);
        case 21:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[7, 18]]);
  }));
  return function EliminarPlanTrabajo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//Ver integrantes del Equipo Guia ---> Falta agregar procedure

//Crear actividad
exports.EliminarPlanTrabajo = EliminarPlanTrabajo;
var CrearActividad = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body3, Semana, Fecha, Hora, Cantidaddiasprevios, Cantidaddiasrequeridos, FechaPublicacion, IDmodalidad, IDtipoActividad, IDtipoAfiche, IDtipoEstado, IDplanTrabajo, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body3 = req.body, Semana = _req$body3.Semana, Fecha = _req$body3.Fecha, Hora = _req$body3.Hora, Cantidaddiasprevios = _req$body3.Cantidaddiasprevios, Cantidaddiasrequeridos = _req$body3.Cantidaddiasrequeridos, FechaPublicacion = _req$body3.FechaPublicacion, IDmodalidad = _req$body3.IDmodalidad, IDtipoActividad = _req$body3.IDtipoActividad, IDtipoAfiche = _req$body3.IDtipoAfiche, IDtipoEstado = _req$body3.IDtipoEstado, IDplanTrabajo = _req$body3.IDplanTrabajo;
          console.log('valores:', req.body);
          if (!(!Semana || !Fecha || !Hora || !Cantidaddiasprevios || !Cantidaddiasrequeridos || !FechaPublicacion || !IDmodalidad || !IDtipoActividad || !IDtipoAfiche || !IDtipoEstado || !IDplanTrabajo)) {
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
          return pool.request().input('Semana ', sql.Int, Semana).input('Emisor ', sql.Date, IDemisor).input('Hora ', sql.Time, Hora).input('Cantidaddiasprevios', sql.Int, Cantidaddiasprevios).input('Cantidaddiasrequeridos', sql.Int, Cantidaddiasrequeridos).input('FechaPublicacion', sql.Date, FechaPublicacion).input('IDmodalidad ', sql.Int, IDmodalidad).input('IDtipoActividad ', sql.Int, IDtipoActividad).input('IDtipoAfiche ', sql.Int, IDtipoAfiche).input('IDtipoEstado ', sql.Int, IDtipoEstado).input('IDplanTrabajo', sql.Int, IDplanTrabajo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
          .execute('CreateActividad');
        case 13:
          result = _context6.sent;
          console.log(result);
          _context6.next = 20;
          break;
        case 17:
          _context6.prev = 17;
          _context6.t0 = _context6["catch"](7);
          res.sendStatus(500, _context6.t0.message);
        case 20:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[7, 17]]);
  }));
  return function CrearActividad(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

// Ver actividad 
exports.CrearActividad = CrearActividad;
var VerActividad = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var IDactividad, pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          IDactividad = req.body.IDactividad;
          console.log('valores:', req.body);
          if (IDactividad) {
            _context7.next = 7;
            break;
          }
          console.log('here');
          return _context7.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context7.prev = 7;
          _context7.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context7.sent;
          _context7.next = 13;
          return pool.request().input('ID Actividad', sql.Int, IDactividad).execute('ReadActividadPorID');
        case 13:
          result = _context7.sent;
          console.log(result);
          res.json(result.recordset);
          _context7.next = 21;
          break;
        case 18:
          _context7.prev = 18;
          _context7.t0 = _context7["catch"](7);
          res.sendStatus(500, _context7.t0.message);
        case 21:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[7, 18]]);
  }));
  return function VerActividad(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

//Update Actividad
exports.VerActividad = VerActividad;
var ModificarActividad = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body4, Semana, Fecha, Hora, Cantidaddiasprevios, Cantidaddiasrequeridos, FechaPublicacion, IDmodalidad, IDtipoActividad, IDtipoAfiche, IDtipoEstado, IDplanTrabajo, pool, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body4 = req.body, Semana = _req$body4.Semana, Fecha = _req$body4.Fecha, Hora = _req$body4.Hora, Cantidaddiasprevios = _req$body4.Cantidaddiasprevios, Cantidaddiasrequeridos = _req$body4.Cantidaddiasrequeridos, FechaPublicacion = _req$body4.FechaPublicacion, IDmodalidad = _req$body4.IDmodalidad, IDtipoActividad = _req$body4.IDtipoActividad, IDtipoAfiche = _req$body4.IDtipoAfiche, IDtipoEstado = _req$body4.IDtipoEstado, IDplanTrabajo = _req$body4.IDplanTrabajo;
          console.log('valores:', req.body);
          if (!(!Semana || !Fecha || !Hora || !Cantidaddiasprevios || !Cantidaddiasrequeridos || !FechaPublicacion || !IDmodalidad || !IDtipoActividad || !IDtipoAfiche || !IDtipoEstado || !IDplanTrabajo)) {
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
          return pool.request().input('Semana ', sql.Int, Semana).input('Emisor ', sql.Date, IDemisor).input('Hora ', sql.Time, Hora).input('Cantidaddiasprevios', sql.Int, Cantidaddiasprevios).input('Cantidaddiasrequeridos', sql.Int, Cantidaddiasrequeridos).input('FechaPublicacion', sql.Date, FechaPublicacion).input('IDmodalidad ', sql.Int, IDmodalidad).input('IDtipoActividad ', sql.Int, IDtipoActividad).input('IDtipoAfiche ', sql.Int, IDtipoAfiche).input('IDtipoEstado ', sql.Int, IDtipoEstado).input('IDplanTrabajo', sql.Int, IDplanTrabajo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
          .execute('UpdateActividad');
        case 13:
          result = _context8.sent;
          console.log(result);
          _context8.next = 20;
          break;
        case 17:
          _context8.prev = 17;
          _context8.t0 = _context8["catch"](7);
          res.sendStatus(500, _context8.t0.message);
        case 20:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[7, 17]]);
  }));
  return function ModificarActividad(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

//Delete Actividad
exports.ModificarActividad = ModificarActividad;
var EliminarActividad = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var IDactividad, pool, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          IDactividad = req.body.IDactividad;
          console.log('valores:', req.body);
          if (IDactividad) {
            _context9.next = 7;
            break;
          }
          console.log('here');
          return _context9.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context9.prev = 7;
          _context9.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context9.sent;
          _context9.next = 13;
          return pool.request().input('ID Actividad', sql.Int, IDactividad).execute('DeleteActividad');
        case 13:
          result = _context9.sent;
          console.log(result);
          res.json(result.recordset);
          _context9.next = 21;
          break;
        case 18:
          _context9.prev = 18;
          _context9.t0 = _context9["catch"](7);
          res.sendStatus(500, _context9.t0.message);
        case 21:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[7, 18]]);
  }));
  return function EliminarActividad(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// Ver actividad x Plan de trabajo --> Falta agregar procedure

// Comentar
exports.EliminarActividad = EliminarActividad;
var Comentar = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var _req$body5, IDprofesor, IDemisor, IDactividad, IDcomentarioPadre, Hora, Fecha, Comentarios, Contenido, pool, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _req$body5 = req.body, IDprofesor = _req$body5.IDprofesor, IDemisor = _req$body5.IDemisor, IDactividad = _req$body5.IDactividad, IDcomentarioPadre = _req$body5.IDcomentarioPadre, Hora = _req$body5.Hora, Fecha = _req$body5.Fecha, Comentarios = _req$body5.Comentarios, Contenido = _req$body5.Contenido;
          console.log('valores:', req.body);
          if (!(!IDprofesor || !IDemisor || !IDactividad || !IDcomentarioPadre || !Hora || !Fecha || !Comentarios || !Contenido)) {
            _context10.next = 7;
            break;
          }
          console.log('here');
          return _context10.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 7:
          _context10.prev = 7;
          _context10.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context10.sent;
          _context10.next = 13;
          return pool.request().input('ID ', sql.Int, IDprofesor).input('Emisor ', sql.Int, IDemisor).input('ID Actividad ', sql.Int, IDactividad).input('ComentarioPadre', sql.Int, IDcomentarioPadre).input('Hora', sql.Time, Hora).input('Fecha', sql.Date, Fecha).input('Comentarios ', sql.VarChar, Comentarios).input('Contenido', sql.VarChar, Contenido) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
          .execute('CreateComentario');
        case 13:
          result = _context10.sent;
          console.log(result);
          _context10.next = 20;
          break;
        case 17:
          _context10.prev = 17;
          _context10.t0 = _context10["catch"](7);
          res.sendStatus(500, _context10.t0.message);
        case 20:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[7, 17]]);
  }));
  return function Comentar(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

// Ver comentarios x Actividad de un Plan especifico ---> Falta agregar procedure

//Responder comentarios
// Preguntar como se maneja la columna comentarios en la base
//Parece que el metodo de crear comentario es el de responder pero no estoy segura

// Ver perfil profesor
// recuperar informacion una vez ingrese el usuario al sistema
exports.Comentar = Comentar;
var VerProfesorPerfil = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          //Los headers deben habilitarse para que el frontend pueda recuperar los datos
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          //IDpersona = 
          _context11.prev = 2;
          _context11.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context11.sent;
          _context11.next = 8;
          return pool.request().input('ID Profesor', sql.Int, IDpersona).execute('ReadPersonaPorID');
        case 8:
          result = _context11.sent;
          console.log(result);
          res.json(result.recordset);
          _context11.next = 16;
          break;
        case 13:
          _context11.prev = 13;
          _context11.t0 = _context11["catch"](2);
          res.sendStatus(500, _context11.t0.message);
        case 16:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[2, 13]]);
  }));
  return function VerProfesorPerfil(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

//Modificar informacion perfil de profesor
// recuperar informacion una vez ingrese el usuario al sistema
exports.VerProfesorPerfil = VerProfesorPerfil;
var ModificarProfesorPerfil = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var _req$body6, IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDpersonatipo, pool, result;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _req$body6 = req.body, IDpersona = _req$body6.IDpersona, NombreCompleto = _req$body6.NombreCompleto, Correo = _req$body6.Correo, Contra = _req$body6.Contra, Habilitado = _req$body6.Habilitado, Coordinador = _req$body6.Coordinador, Sede = _req$body6.Sede, IDpersonatipo = _req$body6.IDpersonatipo;
          console.log('valores:', req.body);
          if (!(!IDpersona || !NombreCompleto || !Correo || !Contra || !Habilitado || !Coordinador || !Sede || !IDtipo)) {
            _context12.next = 5;
            break;
          }
          console.log('here');
          return _context12.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 5:
          _context12.prev = 5;
          _context12.next = 8;
          return (0, _connection.getConnection)();
        case 8:
          pool = _context12.sent;
          _context12.next = 11;
          return pool.request().input('ID ', sql.Int, ID).input('Nombre Completo', sql.VarChar, NombreCompleto).input('Correo ', sql.VarChar, Correo).input('Contraseña', sql.VarChar, Contra).input('Habilitado', sql.bit, Habilitado).input('Coordinador', sql.bit, Coordinador).input('Sede ', sql.Int, Sede).input('ID tipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
          .execute('UpdatePersona');
        case 11:
          result = _context12.sent;
          console.log(result);
          _context12.next = 18;
          break;
        case 15:
          _context12.prev = 15;
          _context12.t0 = _context12["catch"](5);
          res.sendStatus(500, _context12.t0.message);
        case 18:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[5, 15]]);
  }));
  return function ModificarProfesorPerfil(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.ModificarProfesorPerfil = ModificarProfesorPerfil;