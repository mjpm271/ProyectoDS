import {getConnection} from '../database/connection'
 
export const getTipoPersona = async (req, res) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
   );
   const pool = await getConnection()
   const result = await pool
           .request()
           .execute('ReadSede')
   console.log(result)
   res.json(
       result.recordset)
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

}

//Consultar Profesores -- Deberia ser solo por sede (?)
export const ConsultarProfesores = async (req, res) => {
  //Los headers deben habilitarse para que el frontend pueda recuperar los datos
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');   
  const pool = await getConnection()
  const result = await pool
          .request()
          .execute('ReadPersonas')
  console.log(result)
  res.json(
      result.recordset)

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