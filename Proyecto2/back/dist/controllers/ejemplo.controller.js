"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTipoPersona = exports.ConsultarProfesores = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection");
var getTipoPersona = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().execute('ReadSede');
        case 7:
          result = _context.sent;
          console.log(result);
          res.json(result.recordset);
          // try {
          //     const pool = await getConnection()
          //     const result = await pool
          //         .request()
          //         .execute('ReadTiposPersona')
          //     console.log(result)
          //     if (result.recordset.length == 0) {
          //         console.log('No hay resultados')
          //         // res.redirect('/admin')
          //     } else {
          //         console.log('Ver resultados:')
          //         console.log(result.recordset)
          //         res.json(
          //         result.recordset)
          //         res.render('/ejemplo/tipoPersona')

          //     }
          // } catch (err) {
          //     res.sendStatus(500, err.message)
          // }
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTipoPersona(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//Consultar Profesores -- Deberia ser solo por sede (?)
exports.getTipoPersona = getTipoPersona;
var ConsultarProfesores = /*#__PURE__*/function () {
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
          return pool.request().execute('ReadPersonas');
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
  return function ConsultarProfesores(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//  export const seleccionarEmpleado = async (req, res) => {
//     const { ID_Empleado } = req.body
//     console.log('CACA', ID_Empleado)
//     if (!ID_Empleado) {
//         return res.status(400).json({msg: 'Bad request. Please fill all fields'})
//     }
//     try {
//         const pool = await getConnection()
//         const result = await pool
//             .request()
//             .input('IDE', sql.Int, ID_Empleado)
//             .execute('seleccionar_Empleado')
//         console.log(result)
//         //res.redirect('/admin')
//         res.render('consulta_empleado', { data: result.recordset })
//     }   catch (err) {
//         res.sendStatus(500, err.message)
//     }
// }
exports.ConsultarProfesores = ConsultarProfesores;