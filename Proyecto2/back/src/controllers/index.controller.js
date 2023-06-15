import {getConnection , sql} from '../database/connection'


export const login = async (req, res) => {
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
            .execute('LoginUsuario')
        const outputValue = result.output;

        // Hacer algo con el resultado y el output
        // ...

        // Enviar una respuesta al cliente
        console.log(result.recordset)
        res.json(result)
        // res.status(200).json(outputValue.Exito);
        console.log(outputValue);
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};

export const CambiarContra = async (req, res) => {
    const { Carnet, Contra } = req.body
    console.log("user login:", Carnet, Contra)
    // if (!Carnet || !Contra) {
    //     return res.status(400).json({ msg: 'Bad Request. Please fill all fields' })
    // }
    try {
        const pool = await getConnection();
        //console.log(pool);
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(100), Carnet)
            .input('NewPassword', sql.VarChar(64), Contra)

            .execute('ChangePassword')


        console.log(result.recordset)
        res.json(result)
        // res.status(200).json(outputValue.Exito);
        // console.log(o utputValue);
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};

export const VerNotificaciones = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');   
    const pool = await getConnection()
    const result = await pool
            .request()
            .execute('ReadNotificaciones')
    console.log(result)
    res.json(result.recordset)
  
    }  

export const VerNotificacionesUsuario = async (req, res) => {
    
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDpersona} = req.body
    console.log('valores:', req.body)
    if (!IDpersona) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDpersona', sql.Int, IDpersona)
            .execute('ReadNotificacionesUsuarioPorTitulo')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }
    
    }   

export const VerNotificacion = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDnotificacion} = req.body
    console.log('valores:', req.body)
    if (!IDnotificacion) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDnotificacion', sql.Int, IDnotificacion)
            .execute('ReadNotificacion')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

    }      
