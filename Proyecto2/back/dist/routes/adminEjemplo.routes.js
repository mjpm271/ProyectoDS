"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _admin = require("../controllers/admin.controller");
var router = (0, _express.Router)();

//landing page view
router.get('/admin', _admin.adminPage);

// GETs
router.get('/admin/crud_empleado/consulta_empleado', _admin.renderFormSelectEmpleado);
router.post('/admin/crud_empleado/consulta_empleado/execS', _admin.seleccionarEmpleado);
router.get('/admin/admin_tools/bono', _admin.renderFormSelecBono);
router.post('/admin/admin_tools/bono/exec', _admin.consultarBono);
router.get('/admin/crud_sucursal/', _admin.renderFormSucursal);
router.post('/admin/crud_sucursal/execS', _admin.buscarSucursal);
router.post('/admin/crud_direccion/', _admin.seleccionarDireccion);
router.post('/admin/crud_vencidos/', _admin.seleccionarProductoVencidoXSucursal);
router.post('/admin/crud_producto_sucursal/', _admin.seleccionarProductoXSucursal);
router.post('/admin/crud_tipo_empleado/', _admin.seleccionarTipoEmpleado);
router.post('/admin/crud_venta/', _admin.seleccionarVenta);

// vistas
router.get('/admin/crud_empleado/consulta_empleados', _admin.renderFormConsultaEmpleado);
router.post('/admin/crud_empleado/consulta_empleados/exec', _admin.consultaEmpleados);

// DELETEs
router["delete"]('/admin/crud_empleado/', _admin.borrarEmpleado);
router["delete"]('admin/admin_tools/bono/', _admin.borrarBono);
router["delete"]('/admin/crud_sucursal/', _admin.borrarSucursal);
router["delete"]('/admin/crud_direccion/', _admin.borrarDireccion);
router["delete"]('/admin/crud_vencidos/', _admin.borrarProductoVencidoXSucursal);
router["delete"]('/admin/crud_producto_sucursal/', _admin.borrarProductoXSucursal);
router["delete"]('/admin/crud_tipo_empleado/', _admin.borrarTipoEmpleado);
router["delete"]('/admin/crud_venta/', _admin.borrarVenta);
router.get('/admin/admin_tools/reporte_proveedor', _admin.reporteProveedor);
router.get('/admin/admin_tools/reporte_sucursal', _admin.renderFormSelecReporte);
router.post('/admin/admin_tools/reporte_sucursal/exec', _admin.ReporteGanancia);

//Pedido

router.get('/admin/Pedido_Proveedor', _admin.renderFormPedido);
router.post('/admin/Pedido_Proveedor/exec', _admin.crearPedido);
router.get('/admin/crud_direccion/selec', _admin.renderSelectDireccionS);
router.get('/admin/crud_direccion/borr', _admin.renderSelectDireccionB);
router.get('/admin/crud_productos_vencidos/selec', _admin.renderSelectProductosVencidos);
router.get('/admin/crud_productos_vencidos/borr', _admin.renderSelectProductosVencidosB);
router.get('/admin/crud_producto_sucursal/selec', _admin.renderSelectProductoPorSucursal);
router.get('/admin/crud_producto_sucursal/borr', _admin.renderProductoPorSucursalB);
router.get('/admin/crud_tipo_empleado/selec', _admin.renderTipoEmpleado);
router.get('/admin/crud_tipo_empleado/borr', _admin.renderTipoEmpleadoB);
router.get('/admin/crud_venta/selec', _admin.renderVenta);
router.get('/admin/crud_venta/borr', _admin.renderVentaB);
var _default = router;
exports["default"] = _default;