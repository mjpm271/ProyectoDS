import { getConnection, sql } from '../database/connection'

export const adminPage = async (req, res) => {
    res.render('admin_view')
}

// CRUD Empleado
export const borrarEmpleado = async (req, res) => {
    const { Id } = req.body
    console.log('id to delete:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDE', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('borrar_Empleado')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const renderFormBorrarEmpleado = async (req, res) => {
    res.render('formulario_EmpleadoB')
}


export const seleccionarEmpleado = async (req, res) => {
    const { ID_Empleado } = req.body
    console.log('CACA', ID_Empleado)
    if (!ID_Empleado) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDE', sql.Int, ID_Empleado)
            .execute('seleccionar_Empleado')
        console.log(result)
        //res.redirect('/admin')
        res.render('consulta_empleado', { data: result.recordset })
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
export const renderFormSelectEmpleado = async (req, res) => {
    res.render('formulario_EmpleadoS')
}
// CRUD Bonos
export const consultarBono = async (req, res) => {
    const { IDBono } = req.body
    if (!IDBono) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDBono', sql.Int, IDBono)
            //.output('ExitCode', sql.Int)
            .execute('cusp_LeerBono')
        //console.log(result.output)
        res.render('consultarBono', {data: result.recordset})
        //res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const renderFormSelecBono = async (req, res) => {
    res.render('formulario_BonoS')
}

export const borrarBono = async (req, res) => {
    const { Id } = req.body
    console.log('id to delete:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDBono', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('sp_borraBono')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
export const renderFormBorrarBono = async (req, res) => {
    res.render('formulario_BonoB')
}

// CRUD Sucursal
export const buscarSucursal = async (req, res) => {
    const { Id } = req.body
    console.log('id to search:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDSucursal', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('cusp_LeerSucursal')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
export const renderFormSelectSucursal = async (req, res) => {
    res.render('formulario_SucursalS')
}
export const borrarSucursal = async (req, res) => {
    const { ID_Sucursal } = req.body
    console.log('id to delete:', ID_Sucursal)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDSucursal', sql.Int, ID_Sucursal)
            .output('ExitCode', sql.Int)
            .execute('sp_borraSucursal')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
// CRUD Direccion
export const borrarDireccion = async (req, res) => {
    const { Id } = req.body
    console.log('id to delete:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDDireccion', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('sp_borraDireccion')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
export const seleccionarDireccion = async (req, res) => {
    const { Id } = req.body
    console.log('id to search:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDDireccion', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('cusp_LeerDireccion')
        console.log(result.output)
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
// CRUD Productos Vencidos
export const borrarProductoVencidoXSucursal = async (req, res) => {
    const { Id } = req.body
    console.log('id to delete:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDPVXS', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('borrar_ProductoVencidoXSucursal')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
export const seleccionarProductoVencidoXSucursal = async (req, res) => {
    const { Id } = req.body
    console.log('id to search:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDPVXS', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('seleccionar_ProductoVencidoXSucursal')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
// CRUD Productos por Sucursal
export const seleccionarProductoXSucursal = async (req, res) => {
    const { Id } = req.body
    console.log('id to search:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDPXS', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('seleccionar_ProductoXSucursal')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
export const borrarProductoXSucursal = async (req, res) => {
    const { Id } = req.body
    console.log('id to delete:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDPXS', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('borrar_ProductoXSucursal')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
// CRUD Tipo Empleado
export const borrarTipoEmpleado = async (req, res) => {
    const { Id } = req.body
    console.log('id to delete:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDTipoEmpleado', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('sp_borraTipoEmpleado')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
export const seleccionarTipoEmpleado = async (req, res) => {
    const { Id } = req.body
    console.log('id to search:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDTipoEmpleado', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('cusp_LeerTipoEmpleado')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
// CRUD Venta
export const borrarVenta = async (req, res) => {
    const { Id } = req.body
    console.log('id to delete:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDV', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('borrar_venta')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
export const seleccionarVenta = async (req, res) => {
    const { Id } = req.body
    console.log('id to search:', Id)
    if (!Id) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDV', sql.Int, Id)
            .output('ExitCode', sql.Int)
            .execute('seleccionar_venta')
        console.log(result.output)
        res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}
// Reporte Proveedor
export const reporteProveedor = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            //.output('ExitCode', sql.Int)
            .execute('Reporte_Proveedor')
        console.log(result)
        //res.redirect('/admin')
    }   catch (err) {
        res.sendStatus(500, err.message)
    }
}


// vistas

export const consultaEmpleados = async (req, res) => {
    const {IdSucursal, Rol, Fecha} = req.body
    console.log('all variables:', IdSucursal, Rol, Fecha)
    /*
    if (!IdSucursal || !Rol || !Fecha) {
        return res.sendStatus(400).json({msg: "Bad Request. Please fill all fields"})
    }
    */
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDSucursal', sql.Int, IdSucursal)
            .input('Rol', sql.VarChar, Rol)
            .input('FechaContratacion', sql.DateTime, Fecha)
            .execute('SP_ConsultarEmpleados')
        console.log(result)
        if (result.recordset.length == 0) {
            console.log('No hay resultados')
            res.redirect('/admin')
        } else {
            console.log('Ver resultados:')
            console.log(result.recordset)
            res.render('consulta_empleado', {data: result.recordset})
        }
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

export const renderFormConsultaEmpleado = async (req, res) => {
    res.render('formulario_consulta_empleado')
}

//Pedido

export const crearPedido = async (req, res) => {
    const { Producto , CantidadPedido , Proveedor , Sucursal } = req.body
    console.log('valores:', req.body)
    if (!Producto || !CantidadPedido || !Proveedor || !Sucursal) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .input('Producto', sql.Int, Producto)
            .input('CantidadPedido', sql.Int, CantidadPedido)
            .input('Proveedor', sql.Int, Proveedor)
            .input('Sucursal', sql.Int, Sucursal)
            .output('result', sql.Int)
            .execute('Pedido_proveedor')
        console.log(result)

        res.redirect('/admin')

    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

export const renderFormPedido = async (req, res) => {
    res.render('formulario_pedido')
}

//Reporte Ganancia

export const ReporteGanancia = async (req, res) => {
    const {IDSucursal, Pais, ID_Categoria, Fecha} = req.body
    console.log('all variables:', IDSucursal, Pais, Fecha)
    /*
    if (!IDSucursal || !Pais || !Fecha) {
        return res.sendStatus(400).json({msg: "Bad Request. Please fill all fields"})
    }
    */
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDSucursal', sql.Int, IDSucursal)
            .input('Pais', sql.VarChar, Pais)
            .input('ID_Categoria', sql.Int, ID_Categoria)
            .input('Fecha', sql.Date, Fecha)
            .output('Respuesta', sql.Int)            
            .execute('SP_ConsultarGanancias')
        console.log(result)
        if (result.output.Respuesta != 0) {
            res.sendStatus(500, {
                msg: "Hubo un error en el servidor"
            })
            res.redirect('/admin')
        } else {
            console.log('Ver resultados:')
            console.log(result.recordset)
            return res.render('ReporteGanancia', {meta: IDSucursal,data: result.recordset})
        }
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

export const renderFormSelecReporte = async (req, res) => {
    res.render('formulario_RepGanancia')
}

export const renderFormSucursal = async (req, res) => {
    res.render('formulario_SucursalS')
}

export const renderSelectDireccionS = async (req, res) => {
    res.render('formulario_DireccionS')
}

export const renderSelectDireccionB = async (req, res) => {
    res.render('formulario_DireccionB')
}

export const renderSelectProductosVencidos = async (req, res) => {
    res.render('formulario_ProductosVencidos')
}

export const renderSelectProductosVencidosB = async (req, res) => {
    res.render('formulario_ProductosVencidosB')
}

export const renderSelectProductoPorSucursal = async (req, res) => {
    res.render('formulario_ProductosS')
}

export const renderProductoPorSucursalB = async (req, res) => {
    res.render('formulario_ProductosB')
}

export const renderTipoEmpleado = async (req, res) => {
    res.render('formulario_TipoEmpleadoS')
}

export const renderTipoEmpleadoB = async (req, res) => {
    res.render('formulario_TipoEmpleadoB')
}

export const renderVenta = async (req, res) => {
    res.render('formulario_Venta')
}

export const renderVentaB = async (req, res) => {
    res.render('formulario_VentaB')
}