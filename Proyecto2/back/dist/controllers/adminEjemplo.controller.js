"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seleccionarVenta = exports.seleccionarTipoEmpleado = exports.seleccionarProductoXSucursal = exports.seleccionarProductoVencidoXSucursal = exports.seleccionarEmpleado = exports.seleccionarDireccion = exports.reporteProveedor = exports.renderVentaB = exports.renderVenta = exports.renderTipoEmpleadoB = exports.renderTipoEmpleado = exports.renderSelectProductosVencidosB = exports.renderSelectProductosVencidos = exports.renderSelectProductoPorSucursal = exports.renderSelectDireccionS = exports.renderSelectDireccionB = exports.renderProductoPorSucursalB = exports.renderFormSucursal = exports.renderFormSelectSucursal = exports.renderFormSelectEmpleado = exports.renderFormSelecReporte = exports.renderFormSelecBono = exports.renderFormPedido = exports.renderFormConsultaEmpleado = exports.renderFormBorrarEmpleado = exports.renderFormBorrarBono = exports.crearPedido = exports.consultarBono = exports.consultaEmpleados = exports.buscarSucursal = exports.borrarVenta = exports.borrarTipoEmpleado = exports.borrarSucursal = exports.borrarProductoXSucursal = exports.borrarProductoVencidoXSucursal = exports.borrarEmpleado = exports.borrarDireccion = exports.borrarBono = exports.adminPage = exports.ReporteGanancia = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
var adminPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res.render('admin_view');
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function adminPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// CRUD Empleado
exports.adminPage = adminPage;
var borrarEmpleado = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to delete:', Id);
          if (Id) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context2.sent;
          _context2.next = 10;
          return pool.request().input('IDE', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('borrar_Empleado');
        case 10:
          result = _context2.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context2.next = 18;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](4);
          res.sendStatus(500, _context2.t0.message);
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 15]]);
  }));
  return function borrarEmpleado(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.borrarEmpleado = borrarEmpleado;
var renderFormBorrarEmpleado = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          res.render('formulario_EmpleadoB');
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function renderFormBorrarEmpleado(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.renderFormBorrarEmpleado = renderFormBorrarEmpleado;
var seleccionarEmpleado = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var ID_Empleado, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          ID_Empleado = req.body.ID_Empleado;
          console.log('CACA', ID_Empleado);
          if (ID_Empleado) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context4.prev = 4;
          _context4.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context4.sent;
          _context4.next = 10;
          return pool.request().input('IDE', _connection.sql.Int, ID_Empleado).execute('seleccionar_Empleado');
        case 10:
          result = _context4.sent;
          console.log(result);
          //res.redirect('/admin')
          res.render('consulta_empleado', {
            data: result.recordset
          });
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](4);
          res.sendStatus(500, _context4.t0.message);
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[4, 15]]);
  }));
  return function seleccionarEmpleado(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.seleccionarEmpleado = seleccionarEmpleado;
var renderFormSelectEmpleado = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          res.render('formulario_Empleados');
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function renderFormSelectEmpleado(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
// CRUD Bonos
exports.renderFormSelectEmpleado = renderFormSelectEmpleado;
var consultarBono = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var IDBono, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          IDBono = req.body.IDBono;
          if (IDBono) {
            _context6.next = 3;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 3:
          _context6.prev = 3;
          _context6.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context6.sent;
          _context6.next = 9;
          return pool.request().input('IDBono', _connection.sql.Int, IDBono)
          //.output('ExitCode', sql.Int)
          .execute('cusp_LeerBono');
        case 9:
          result = _context6.sent;
          //console.log(result.output)
          res.render('consultarBono', {
            data: result.recordset
          });
          //res.redirect('/admin')
          _context6.next = 16;
          break;
        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](3);
          res.sendStatus(500, _context6.t0.message);
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[3, 13]]);
  }));
  return function consultarBono(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.consultarBono = consultarBono;
var renderFormSelecBono = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          res.render('formulario_BonoS');
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function renderFormSelecBono(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.renderFormSelecBono = renderFormSelecBono;
var borrarBono = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to delete:', Id);
          if (Id) {
            _context8.next = 4;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context8.prev = 4;
          _context8.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context8.sent;
          _context8.next = 10;
          return pool.request().input('IDBono', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('sp_borraBono');
        case 10:
          result = _context8.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context8.next = 18;
          break;
        case 15:
          _context8.prev = 15;
          _context8.t0 = _context8["catch"](4);
          res.sendStatus(500, _context8.t0.message);
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[4, 15]]);
  }));
  return function borrarBono(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.borrarBono = borrarBono;
var renderFormBorrarBono = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          res.render('formulario_BonoB');
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function renderFormBorrarBono(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// CRUD Sucursal
exports.renderFormBorrarBono = renderFormBorrarBono;
var buscarSucursal = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to search:', Id);
          if (Id) {
            _context10.next = 4;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context10.prev = 4;
          _context10.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context10.sent;
          _context10.next = 10;
          return pool.request().input('IDSucursal', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('cusp_LeerSucursal');
        case 10:
          result = _context10.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context10.next = 18;
          break;
        case 15:
          _context10.prev = 15;
          _context10.t0 = _context10["catch"](4);
          res.sendStatus(500, _context10.t0.message);
        case 18:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[4, 15]]);
  }));
  return function buscarSucursal(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.buscarSucursal = buscarSucursal;
var renderFormSelectSucursal = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          res.render('formulario_SucursalS');
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function renderFormSelectSucursal(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.renderFormSelectSucursal = renderFormSelectSucursal;
var borrarSucursal = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var ID_Sucursal, pool, result;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          ID_Sucursal = req.body.ID_Sucursal;
          console.log('id to delete:', ID_Sucursal);
          if (Id) {
            _context12.next = 4;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context12.prev = 4;
          _context12.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context12.sent;
          _context12.next = 10;
          return pool.request().input('IDSucursal', _connection.sql.Int, ID_Sucursal).output('ExitCode', _connection.sql.Int).execute('sp_borraSucursal');
        case 10:
          result = _context12.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context12.next = 18;
          break;
        case 15:
          _context12.prev = 15;
          _context12.t0 = _context12["catch"](4);
          res.sendStatus(500, _context12.t0.message);
        case 18:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[4, 15]]);
  }));
  return function borrarSucursal(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
// CRUD Direccion
exports.borrarSucursal = borrarSucursal;
var borrarDireccion = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to delete:', Id);
          if (Id) {
            _context13.next = 4;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context13.prev = 4;
          _context13.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context13.sent;
          _context13.next = 10;
          return pool.request().input('IDDireccion', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('sp_borraDireccion');
        case 10:
          result = _context13.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context13.next = 18;
          break;
        case 15:
          _context13.prev = 15;
          _context13.t0 = _context13["catch"](4);
          res.sendStatus(500, _context13.t0.message);
        case 18:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[4, 15]]);
  }));
  return function borrarDireccion(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.borrarDireccion = borrarDireccion;
var seleccionarDireccion = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to search:', Id);
          if (Id) {
            _context14.next = 4;
            break;
          }
          return _context14.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context14.prev = 4;
          _context14.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context14.sent;
          _context14.next = 10;
          return pool.request().input('IDDireccion', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('cusp_LeerDireccion');
        case 10:
          result = _context14.sent;
          console.log(result.output);
          _context14.next = 17;
          break;
        case 14:
          _context14.prev = 14;
          _context14.t0 = _context14["catch"](4);
          res.sendStatus(500, _context14.t0.message);
        case 17:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[4, 14]]);
  }));
  return function seleccionarDireccion(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
// CRUD Productos Vencidos
exports.seleccionarDireccion = seleccionarDireccion;
var borrarProductoVencidoXSucursal = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to delete:', Id);
          if (Id) {
            _context15.next = 4;
            break;
          }
          return _context15.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context15.prev = 4;
          _context15.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context15.sent;
          _context15.next = 10;
          return pool.request().input('IDPVXS', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('borrar_ProductoVencidoXSucursal');
        case 10:
          result = _context15.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context15.next = 18;
          break;
        case 15:
          _context15.prev = 15;
          _context15.t0 = _context15["catch"](4);
          res.sendStatus(500, _context15.t0.message);
        case 18:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[4, 15]]);
  }));
  return function borrarProductoVencidoXSucursal(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
exports.borrarProductoVencidoXSucursal = borrarProductoVencidoXSucursal;
var seleccionarProductoVencidoXSucursal = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to search:', Id);
          if (Id) {
            _context16.next = 4;
            break;
          }
          return _context16.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context16.prev = 4;
          _context16.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context16.sent;
          _context16.next = 10;
          return pool.request().input('IDPVXS', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('seleccionar_ProductoVencidoXSucursal');
        case 10:
          result = _context16.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context16.next = 18;
          break;
        case 15:
          _context16.prev = 15;
          _context16.t0 = _context16["catch"](4);
          res.sendStatus(500, _context16.t0.message);
        case 18:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[4, 15]]);
  }));
  return function seleccionarProductoVencidoXSucursal(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
// CRUD Productos por Sucursal
exports.seleccionarProductoVencidoXSucursal = seleccionarProductoVencidoXSucursal;
var seleccionarProductoXSucursal = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to search:', Id);
          if (Id) {
            _context17.next = 4;
            break;
          }
          return _context17.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context17.prev = 4;
          _context17.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context17.sent;
          _context17.next = 10;
          return pool.request().input('IDPXS', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('seleccionar_ProductoXSucursal');
        case 10:
          result = _context17.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context17.next = 18;
          break;
        case 15:
          _context17.prev = 15;
          _context17.t0 = _context17["catch"](4);
          res.sendStatus(500, _context17.t0.message);
        case 18:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[4, 15]]);
  }));
  return function seleccionarProductoXSucursal(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
exports.seleccionarProductoXSucursal = seleccionarProductoXSucursal;
var borrarProductoXSucursal = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to delete:', Id);
          if (Id) {
            _context18.next = 4;
            break;
          }
          return _context18.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context18.prev = 4;
          _context18.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context18.sent;
          _context18.next = 10;
          return pool.request().input('IDPXS', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('borrar_ProductoXSucursal');
        case 10:
          result = _context18.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context18.next = 18;
          break;
        case 15:
          _context18.prev = 15;
          _context18.t0 = _context18["catch"](4);
          res.sendStatus(500, _context18.t0.message);
        case 18:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[4, 15]]);
  }));
  return function borrarProductoXSucursal(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
// CRUD Tipo Empleado
exports.borrarProductoXSucursal = borrarProductoXSucursal;
var borrarTipoEmpleado = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to delete:', Id);
          if (Id) {
            _context19.next = 4;
            break;
          }
          return _context19.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context19.prev = 4;
          _context19.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context19.sent;
          _context19.next = 10;
          return pool.request().input('IDTipoEmpleado', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('sp_borraTipoEmpleado');
        case 10:
          result = _context19.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context19.next = 18;
          break;
        case 15:
          _context19.prev = 15;
          _context19.t0 = _context19["catch"](4);
          res.sendStatus(500, _context19.t0.message);
        case 18:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[4, 15]]);
  }));
  return function borrarTipoEmpleado(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
exports.borrarTipoEmpleado = borrarTipoEmpleado;
var seleccionarTipoEmpleado = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to search:', Id);
          if (Id) {
            _context20.next = 4;
            break;
          }
          return _context20.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context20.prev = 4;
          _context20.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context20.sent;
          _context20.next = 10;
          return pool.request().input('IDTipoEmpleado', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('cusp_LeerTipoEmpleado');
        case 10:
          result = _context20.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context20.next = 18;
          break;
        case 15:
          _context20.prev = 15;
          _context20.t0 = _context20["catch"](4);
          res.sendStatus(500, _context20.t0.message);
        case 18:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[4, 15]]);
  }));
  return function seleccionarTipoEmpleado(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
// CRUD Venta
exports.seleccionarTipoEmpleado = seleccionarTipoEmpleado;
var borrarVenta = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to delete:', Id);
          if (Id) {
            _context21.next = 4;
            break;
          }
          return _context21.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context21.prev = 4;
          _context21.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context21.sent;
          _context21.next = 10;
          return pool.request().input('IDV', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('borrar_venta');
        case 10:
          result = _context21.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context21.next = 18;
          break;
        case 15:
          _context21.prev = 15;
          _context21.t0 = _context21["catch"](4);
          res.sendStatus(500, _context21.t0.message);
        case 18:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[4, 15]]);
  }));
  return function borrarVenta(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
exports.borrarVenta = borrarVenta;
var seleccionarVenta = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res) {
    var Id, pool, result;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          Id = req.body.Id;
          console.log('id to search:', Id);
          if (Id) {
            _context22.next = 4;
            break;
          }
          return _context22.abrupt("return", res.status(400).json({
            msg: 'Bad request. Please fill all fields'
          }));
        case 4:
          _context22.prev = 4;
          _context22.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context22.sent;
          _context22.next = 10;
          return pool.request().input('IDV', _connection.sql.Int, Id).output('ExitCode', _connection.sql.Int).execute('seleccionar_venta');
        case 10:
          result = _context22.sent;
          console.log(result.output);
          res.redirect('/admin');
          _context22.next = 18;
          break;
        case 15:
          _context22.prev = 15;
          _context22.t0 = _context22["catch"](4);
          res.sendStatus(500, _context22.t0.message);
        case 18:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[4, 15]]);
  }));
  return function seleccionarVenta(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
// Reporte Proveedor
exports.seleccionarVenta = seleccionarVenta;
var reporteProveedor = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context23.sent;
          _context23.next = 6;
          return pool.request()
          //.output('ExitCode', sql.Int)
          .execute('Reporte_Proveedor');
        case 6:
          result = _context23.sent;
          console.log(result);
          //res.redirect('/admin')
          _context23.next = 13;
          break;
        case 10:
          _context23.prev = 10;
          _context23.t0 = _context23["catch"](0);
          res.sendStatus(500, _context23.t0.message);
        case 13:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 10]]);
  }));
  return function reporteProveedor(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();

// vistas
exports.reporteProveedor = reporteProveedor;
var consultaEmpleados = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res) {
    var _req$body, IdSucursal, Rol, Fecha, pool, result;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _req$body = req.body, IdSucursal = _req$body.IdSucursal, Rol = _req$body.Rol, Fecha = _req$body.Fecha;
          console.log('all variables:', IdSucursal, Rol, Fecha);
          /*
          if (!IdSucursal || !Rol || !Fecha) {
              return res.sendStatus(400).json({msg: "Bad Request. Please fill all fields"})
          }
          */
          _context24.prev = 2;
          _context24.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context24.sent;
          _context24.next = 8;
          return pool.request().input('IDSucursal', _connection.sql.Int, IdSucursal).input('Rol', _connection.sql.VarChar, Rol).input('FechaContratacion', _connection.sql.DateTime, Fecha).execute('SP_ConsultarEmpleados');
        case 8:
          result = _context24.sent;
          console.log(result);
          if (result.recordset.length == 0) {
            console.log('No hay resultados');
            res.redirect('/admin');
          } else {
            console.log('Ver resultados:');
            console.log(result.recordset);
            res.render('consulta_empleado', {
              data: result.recordset
            });
          }
          _context24.next = 16;
          break;
        case 13:
          _context24.prev = 13;
          _context24.t0 = _context24["catch"](2);
          res.sendStatus(500, _context24.t0.message);
        case 16:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[2, 13]]);
  }));
  return function consultaEmpleados(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
exports.consultaEmpleados = consultaEmpleados;
var renderFormConsultaEmpleado = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res) {
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          res.render('formulario_consulta_empleado');
        case 1:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function renderFormConsultaEmpleado(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();

//Pedido
exports.renderFormConsultaEmpleado = renderFormConsultaEmpleado;
var crearPedido = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req, res) {
    var _req$body2, Producto, CantidadPedido, Proveedor, Sucursal, pool, result;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _req$body2 = req.body, Producto = _req$body2.Producto, CantidadPedido = _req$body2.CantidadPedido, Proveedor = _req$body2.Proveedor, Sucursal = _req$body2.Sucursal;
          console.log('valores:', req.body);
          if (!(!Producto || !CantidadPedido || !Proveedor || !Sucursal)) {
            _context26.next = 5;
            break;
          }
          console.log('here');
          return _context26.abrupt("return", res.sendStatus(400, {
            msg: 'Bad Request. Please fill all fields'
          }));
        case 5:
          _context26.prev = 5;
          _context26.next = 8;
          return (0, _connection.getConnection)();
        case 8:
          pool = _context26.sent;
          _context26.next = 11;
          return pool.request().input('Producto', _connection.sql.Int, Producto).input('CantidadPedido', _connection.sql.Int, CantidadPedido).input('Proveedor', _connection.sql.Int, Proveedor).input('Sucursal', _connection.sql.Int, Sucursal).output('result', _connection.sql.Int).execute('Pedido_proveedor');
        case 11:
          result = _context26.sent;
          console.log(result);
          res.redirect('/admin');
          _context26.next = 19;
          break;
        case 16:
          _context26.prev = 16;
          _context26.t0 = _context26["catch"](5);
          res.sendStatus(500, _context26.t0.message);
        case 19:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[5, 16]]);
  }));
  return function crearPedido(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
exports.crearPedido = crearPedido;
var renderFormPedido = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req, res) {
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          res.render('formulario_pedido');
        case 1:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function renderFormPedido(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();

//Reporte Ganancia
exports.renderFormPedido = renderFormPedido;
var ReporteGanancia = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(req, res) {
    var _req$body3, IDSucursal, Pais, ID_Categoria, Fecha, pool, result;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _req$body3 = req.body, IDSucursal = _req$body3.IDSucursal, Pais = _req$body3.Pais, ID_Categoria = _req$body3.ID_Categoria, Fecha = _req$body3.Fecha;
          console.log('all variables:', IDSucursal, Pais, Fecha);
          /*
          if (!IDSucursal || !Pais || !Fecha) {
              return res.sendStatus(400).json({msg: "Bad Request. Please fill all fields"})
          }
          */
          _context28.prev = 2;
          _context28.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context28.sent;
          _context28.next = 8;
          return pool.request().input('IDSucursal', _connection.sql.Int, IDSucursal).input('Pais', _connection.sql.VarChar, Pais).input('ID_Categoria', _connection.sql.Int, ID_Categoria).input('Fecha', _connection.sql.Date, Fecha).output('Respuesta', _connection.sql.Int).execute('SP_ConsultarGanancias');
        case 8:
          result = _context28.sent;
          console.log(result);
          if (!(result.output.Respuesta != 0)) {
            _context28.next = 15;
            break;
          }
          res.sendStatus(500, {
            msg: "Hubo un error en el servidor"
          });
          res.redirect('/admin');
          _context28.next = 18;
          break;
        case 15:
          console.log('Ver resultados:');
          console.log(result.recordset);
          return _context28.abrupt("return", res.render('ReporteGanancia', {
            meta: IDSucursal,
            data: result.recordset
          }));
        case 18:
          _context28.next = 23;
          break;
        case 20:
          _context28.prev = 20;
          _context28.t0 = _context28["catch"](2);
          res.sendStatus(500, _context28.t0.message);
        case 23:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[2, 20]]);
  }));
  return function ReporteGanancia(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
exports.ReporteGanancia = ReporteGanancia;
var renderFormSelecReporte = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(req, res) {
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          res.render('formulario_RepGanancia');
        case 1:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return function renderFormSelecReporte(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}();
exports.renderFormSelecReporte = renderFormSelecReporte;
var renderFormSucursal = /*#__PURE__*/function () {
  var _ref30 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(req, res) {
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          res.render('formulario_SucursalS');
        case 1:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }));
  return function renderFormSucursal(_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}();
exports.renderFormSucursal = renderFormSucursal;
var renderSelectDireccionS = /*#__PURE__*/function () {
  var _ref31 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(req, res) {
    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          res.render('formulario_DireccionS');
        case 1:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }));
  return function renderSelectDireccionS(_x61, _x62) {
    return _ref31.apply(this, arguments);
  };
}();
exports.renderSelectDireccionS = renderSelectDireccionS;
var renderSelectDireccionB = /*#__PURE__*/function () {
  var _ref32 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(req, res) {
    return _regenerator["default"].wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          res.render('formulario_DireccionB');
        case 1:
        case "end":
          return _context32.stop();
      }
    }, _callee32);
  }));
  return function renderSelectDireccionB(_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}();
exports.renderSelectDireccionB = renderSelectDireccionB;
var renderSelectProductosVencidos = /*#__PURE__*/function () {
  var _ref33 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(req, res) {
    return _regenerator["default"].wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          res.render('formulario_ProductosVencidos');
        case 1:
        case "end":
          return _context33.stop();
      }
    }, _callee33);
  }));
  return function renderSelectProductosVencidos(_x65, _x66) {
    return _ref33.apply(this, arguments);
  };
}();
exports.renderSelectProductosVencidos = renderSelectProductosVencidos;
var renderSelectProductosVencidosB = /*#__PURE__*/function () {
  var _ref34 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(req, res) {
    return _regenerator["default"].wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          res.render('formulario_ProductosVencidosB');
        case 1:
        case "end":
          return _context34.stop();
      }
    }, _callee34);
  }));
  return function renderSelectProductosVencidosB(_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}();
exports.renderSelectProductosVencidosB = renderSelectProductosVencidosB;
var renderSelectProductoPorSucursal = /*#__PURE__*/function () {
  var _ref35 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee35(req, res) {
    return _regenerator["default"].wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          res.render('formulario_ProductosS');
        case 1:
        case "end":
          return _context35.stop();
      }
    }, _callee35);
  }));
  return function renderSelectProductoPorSucursal(_x69, _x70) {
    return _ref35.apply(this, arguments);
  };
}();
exports.renderSelectProductoPorSucursal = renderSelectProductoPorSucursal;
var renderProductoPorSucursalB = /*#__PURE__*/function () {
  var _ref36 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee36(req, res) {
    return _regenerator["default"].wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          res.render('formulario_ProductosB');
        case 1:
        case "end":
          return _context36.stop();
      }
    }, _callee36);
  }));
  return function renderProductoPorSucursalB(_x71, _x72) {
    return _ref36.apply(this, arguments);
  };
}();
exports.renderProductoPorSucursalB = renderProductoPorSucursalB;
var renderTipoEmpleado = /*#__PURE__*/function () {
  var _ref37 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee37(req, res) {
    return _regenerator["default"].wrap(function _callee37$(_context37) {
      while (1) switch (_context37.prev = _context37.next) {
        case 0:
          res.render('formulario_TipoEmpleadoS');
        case 1:
        case "end":
          return _context37.stop();
      }
    }, _callee37);
  }));
  return function renderTipoEmpleado(_x73, _x74) {
    return _ref37.apply(this, arguments);
  };
}();
exports.renderTipoEmpleado = renderTipoEmpleado;
var renderTipoEmpleadoB = /*#__PURE__*/function () {
  var _ref38 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee38(req, res) {
    return _regenerator["default"].wrap(function _callee38$(_context38) {
      while (1) switch (_context38.prev = _context38.next) {
        case 0:
          res.render('formulario_TipoEmpleadoB');
        case 1:
        case "end":
          return _context38.stop();
      }
    }, _callee38);
  }));
  return function renderTipoEmpleadoB(_x75, _x76) {
    return _ref38.apply(this, arguments);
  };
}();
exports.renderTipoEmpleadoB = renderTipoEmpleadoB;
var renderVenta = /*#__PURE__*/function () {
  var _ref39 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee39(req, res) {
    return _regenerator["default"].wrap(function _callee39$(_context39) {
      while (1) switch (_context39.prev = _context39.next) {
        case 0:
          res.render('formulario_Venta');
        case 1:
        case "end":
          return _context39.stop();
      }
    }, _callee39);
  }));
  return function renderVenta(_x77, _x78) {
    return _ref39.apply(this, arguments);
  };
}();
exports.renderVenta = renderVenta;
var renderVentaB = /*#__PURE__*/function () {
  var _ref40 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee40(req, res) {
    return _regenerator["default"].wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          res.render('formulario_VentaB');
        case 1:
        case "end":
          return _context40.stop();
      }
    }, _callee40);
  }));
  return function renderVentaB(_x79, _x80) {
    return _ref40.apply(this, arguments);
  };
}();
exports.renderVentaB = renderVentaB;