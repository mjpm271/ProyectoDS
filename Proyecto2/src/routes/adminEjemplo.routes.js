import { Router } from "express"
import { adminPage, borrarBono, borrarDireccion, borrarEmpleado, borrarProductoVencidoXSucursal, borrarProductoXSucursal, borrarSucursal, borrarTipoEmpleado, borrarVenta, buscarSucursal, consultaEmpleados, consultarBono, crearPedido, renderFormConsultaEmpleado, renderFormPedido, reporteProveedor, seleccionarDireccion, seleccionarEmpleado, seleccionarProductoVencidoXSucursal, seleccionarProductoXSucursal, seleccionarTipoEmpleado, seleccionarVenta, renderFormSelecReporte,ReporteGanancia, renderFormSelecBono, renderFormSucursal, renderFormSelectEmpleado, renderSelectDireccionS, renderSelectDireccionB, renderSelectProductosVencidos, renderSelectProductosVencidosB, renderSelectProductoPorSucursal, renderProductoPorSucursalB, renderTipoEmpleado, renderTipoEmpleadoB, renderVenta, renderVentaB } from '../controllers/admin.controller'

const router = Router()

//landing page view
router.get('/admin', adminPage)

// GETs
router.get('/admin/crud_empleado/consulta_empleado', renderFormSelectEmpleado)
router.post('/admin/crud_empleado/consulta_empleado/execS', seleccionarEmpleado)

router.get('/admin/admin_tools/bono', renderFormSelecBono)
router.post('/admin/admin_tools/bono/exec', consultarBono)

router.get('/admin/crud_sucursal/', renderFormSucursal)
router.post('/admin/crud_sucursal/execS', buscarSucursal)

router.post('/admin/crud_direccion/', seleccionarDireccion)

router.post('/admin/crud_vencidos/', seleccionarProductoVencidoXSucursal)

router.post('/admin/crud_producto_sucursal/', seleccionarProductoXSucursal)

router.post('/admin/crud_tipo_empleado/', seleccionarTipoEmpleado)

router.post('/admin/crud_venta/', seleccionarVenta)

// vistas
router.get('/admin/crud_empleado/consulta_empleados', renderFormConsultaEmpleado)
router.post('/admin/crud_empleado/consulta_empleados/exec', consultaEmpleados)

// DELETEs
router.delete('/admin/crud_empleado/', borrarEmpleado)
router.delete('admin/admin_tools/bono/', borrarBono)
router.delete('/admin/crud_sucursal/', borrarSucursal)
router.delete('/admin/crud_direccion/', borrarDireccion)
router.delete('/admin/crud_vencidos/', borrarProductoVencidoXSucursal)
router.delete('/admin/crud_producto_sucursal/', borrarProductoXSucursal)
router.delete('/admin/crud_tipo_empleado/', borrarTipoEmpleado)
router.delete('/admin/crud_venta/', borrarVenta)


router.get('/admin/admin_tools/reporte_proveedor', reporteProveedor)

router.get('/admin/admin_tools/reporte_sucursal', renderFormSelecReporte)
router.post('/admin/admin_tools/reporte_sucursal/exec', ReporteGanancia)

//Pedido

router.get('/admin/Pedido_Proveedor', renderFormPedido)
router.post('/admin/Pedido_Proveedor/exec', crearPedido)

router.get('/admin/crud_direccion/selec', renderSelectDireccionS)
router.get('/admin/crud_direccion/borr', renderSelectDireccionB)
router.get('/admin/crud_productos_vencidos/selec', renderSelectProductosVencidos)
router.get('/admin/crud_productos_vencidos/borr', renderSelectProductosVencidosB)

router.get('/admin/crud_producto_sucursal/selec', renderSelectProductoPorSucursal)
router.get('/admin/crud_producto_sucursal/borr', renderProductoPorSucursalB)
router.get('/admin/crud_tipo_empleado/selec', renderTipoEmpleado)
router.get('/admin/crud_tipo_empleado/borr', renderTipoEmpleadoB)
router.get('/admin/crud_venta/selec', renderVenta)
router.get('/admin/crud_venta/borr', renderVentaB)



export default router