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
            .output('Exito',sql.Int)
            .execute('Login5')
        const outputValue = result.output.output;

        // Hacer algo con el resultado y el output
        // ...

        // Enviar una respuesta al cliente
        res.status(200).json({ output: outputValue });
        console.log(result);
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};

