import {getConnection, sql} from '../database/connection'

// ------C R U D ------  Equipo Profesores ------//
// Agregar Profesores en Equipo
export const AgregarProfesorEquipo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDequipoGuia , IDprofesor} = req.body
    console.log('valores:', req.body)
    if (!IDequipoGuia || !IDprofesor) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('ID Equipo Guia', sql.Int, IDequipoGuia)
            .input('ID Profesor', sql.Int, IDprofesor)
            .execute('CreateEquipoGuiaProfesor')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

//Buscar 1 Profesor en Equipo Profesores
export const BuscarProfesorEquipo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDequipoGuia , IDprofesor} = req.body
    console.log('valores:', req.body)
    if (!IDequipoGuia || !IDprofesor) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('ID Equipo Guia', sql.Int, IDequipoGuia)
            .input('ID Profesor', sql.Int, IDprofesor)
            .execute('ReadEquipoGuiaProfesorPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

//Consultar Integrantes del Equipo de Profesores
    //Falta opcion para consultar los integrantes del equipo guia


//Modificar informacion de Profesor en Equipo Profesores
export const ModificarProfesorEquipo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDequipoGuia , IDprofesor} = req.body
    console.log('valores:', req.body)
    if (!IDequipoGuia || !IDprofesor) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('ID Equipo Guia', sql.Int, IDequipoGuia)
            .input('ID Profesor', sql.Int, IDprofesor)
            .execute('UpdateEquipoGuiaProfesor')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

//Inhabilitar Profesor en Equipo Profesor

// --> realmente no se elimina el profesor del equipo porque debe quedar historial
//      entonces deberia de inhabilitarse de alguna forma en el equipo

//Definir Coordinador
export const DefinirCoordinador = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDpersona} = req.body
    console.log('valores:', req.body)
    if ( !IDpersona) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('ID Profesor', sql.Int, IDpersona)
            .execute('DefinirCoordinador')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}


// ------C R U D ------ Profesores ------//
// Agregar Profesor -- Deberia ser solo por sede
export const AgregarProfesor = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000/'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');        
    const { ID, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDtipo } = req.body
    console.log('valores:', req.body)
    // if (!ID || !NombreCompleto || !Correo || !Contra || !Habilitado || !Coordinador || !Sede || !IDtipo) {
    //     console.log('here')
    //     return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    // }
    try {
        const pool = await getConnection();
        console.log('whatever')
        const result = await pool
            .request()
            .input('ID', sql.Int, ID)
            .input('NombreCompleto', sql.VarChar, NombreCompleto)
            .input('Correo ', sql.VarChar, Correo)
            .input('Contra', sql.VarChar, Contra)
            .input('Habilitado', sql.Bit, Habilitado)
            .input('Coordinador', sql.Bit, Coordinador)
            .input('Sede', sql.Int, Sede)
            .input('IDtipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .execute('CreatePersona')
        console.log(result) 
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

//Buscar Profesor -- Deberia ser solo por sede (?)
export const BuscarProfesor = async (req, res) => {
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
            .input('ID Profesor', sql.Int, IDpersona)
            .execute('ReadPersonaPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}      

//Modificar informacion de Profesor 
export const ModificarProfesor = async (req, res) => {
    const { IDpersona, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDpersonatipo } = req.body
    console.log('valores:', req.body)
    if (!IDpersona || !NombreCompleto || !Correo || !Contra || !Habilitado || !Coordinador || !Sede || !IDtipo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .parameters(ID)
            .parameters(NombreCompleto)
            .parameters(Correo)
            .parameters(Contra)
            .parameters(Habilitado)
            .parameters(Coordinador)
            .parameters(Sede)
            .parameters(IDtipo)
            // .input('ID ', sql.Int, ID)
            // .input('Nombre Completo', sql.VarChar, NombreCompleto)
            // .input('Correo ', sql.VarChar, Correo)
            // .input('Contraseña', sql.VarChar, Contra)
            // .input('Habilitado', sql.bit, Habilitado)
            // .input('Coordinador', sql.bit, Coordinador)
            // .input('Sede ', sql.Int, Sede)
            // .input('ID tipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .execute('UpdatePersona')
        console.log(result)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

//Inhabilitar Profesor 
export const InhabilitarProfesor = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDpersona} = req.body
    console.log('valores:', req.body)
    if (!IDprofesor) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('ID Profesor', sql.Int, IDpersona)
            .execute('DeletePersona')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}  