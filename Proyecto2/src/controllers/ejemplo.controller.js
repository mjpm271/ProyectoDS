 import {getConnection} from '../database/connection'
 
 export const getTipoPersona = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .query('ReadTiposPersona')
        console.log(result)
        if (result.recordset.length == 0) {
            console.log('No hay resultados')
            // res.redirect('/admin')
        } else {
            console.log('Ver resultados:')
            console.log(result.recordset)
            res.json(result.recordset)
            res.render('/ejemplo/tipoPersona', {data: result.recordset})
        }
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}


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