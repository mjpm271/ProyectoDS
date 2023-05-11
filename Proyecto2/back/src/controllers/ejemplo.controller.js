import {getConnection , sql} from '../database/connection'
import { createPerson } from '../PersonFactory';
// aqui la idea es que después de logearse se cree la clase persona con los datos que se envía
// y de ahí hacer el render o enviar el control a react para que guarde el estado del objeto en memoria
 
export const getTipoPersona = async (req, res) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
   );
   const pool = await getConnection()
   const result = await pool
           .request()
           .execute('ReadPersonas')
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
    res.json(result.recordset)
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

export const loginPostFunction = async (req, res) => {
    const { Correo, Contra } = req.body
    console.log("user login:", Correo, Contra)
    if (!Correo || !Contra) {
        return res.status(400).json({ msg: 'Bad Request. Please fill all fields' })
    }
    try {
        const pool = await getConnection();
        //console.log(pool);
        const result = await pool
            .request()
            .input('Correo', sql.VarChar(100), Correo)
            .input('Contra', sql.VarChar(64), Contra)
            // .output('ExitCode', sql.Int)
            .execute('sp_LoginPersona')
        console.log(result);
            //console.log(result.output.ExitCode);
        //console.log(result.recordset);
        // let statusCode = result.output.ExitCode
        // if (!([1, 2, 3].includes(statusCode))) {
        //     //console.log("si llego, tranqui")
        //     return res.render('login_view', { err_msg: "No se pudo hacer el inicio de sesión" })
        // }
        // console.log('Login de tipo', statusCode)
        // if (statusCode == 1) {
        //     // es admin
        //     console.log('Es admin')
        //     res.redirect('admin?Login=' + result.recordset[0]['IDUsuarioBase'])
        // } else if (statusCode == 2) {
        //     // es empleado
        //     console.log('Es empleado')
        //     res.redirect('empleado?Login=' + result.recordset[0]['IDUsuarioBase'])
        // } else {
        //     // es cliente
        //     console.log('Es cliente')
        //     res.redirect('cliente?Login=' + result.recordset[0]['IDUsuarioBase'])
        // }
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};

