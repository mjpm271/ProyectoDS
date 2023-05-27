import {getConnection, sql} from '../database/connection'


// Ver Plan de Trabajo
export const VerPlanTrabajo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDplanTrabajo} = req.body
    console.log('valores:', req.body)
    if (!IDplanTrabajo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDplanTrabajo', sql.Int, IDplanTrabajo)
            .execute('ReadPlanTrabajoPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    

// Ver Planes de Trabajo
export const VerPlanesTrabajo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');   
    const pool = await getConnection()
    const result = await pool
            .request()
            .execute('ReadPlanTrabajos')
    console.log(result)
    res.json(
        result.recordset)
  
    }  

//Ver integrantes del Equipo Guia ---> Falta agregar procedure


// Ver actividad 
export const VerActividad = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad} = req.body
    console.log('valores:', req.body)
    if (!IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad)
            .execute('ReadActividadPorIDActividad')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    
// infromacion de actividad

// Ver actividad x Plan de trabajo --> Falta agregar procedure

export const VerActividadxPlan = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDplanTrabajo} = req.body
    console.log('valores:', req.body)
    if (!IDplanTrabajo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDplanTrabajo', sql.Int, IDplanTrabajo)
            .execute('ReadActividadesporPlan')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    

// Comentar
export const Comentar = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');        
    const { IDpersona,  IDactividad, IDcomentarioPadre, Hora, Fecha, Contenido } = req.body
    console.log('valores:', req.body)
    // if (!IDpersona || !IDactividad || !IDcomentarioPadre || !Hora || !Fecha || !Contenido) {
    //     console.log('here')
    //     return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    // }
    try {
        const pool = await getConnection();
        console.log('whatever')
        const result = await pool
            .request()
            .input('IDpersona', sql.Int, IDpersona)
            .input('IDactividad', sql.Int, IDactividad)
            .input('IDcomentarioPadre', sql.Int, IDcomentarioPadre)
            .input('Fecha', sql.DateTime, Fecha)
            .input('Contenido', sql.VarChar(sql.MAX), Contenido) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .execute('CreateComentario')
        console.log(result)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

// Ver comentarios x Actividad de un Plan especifico ---> Falta agregar procedure
export const VerComentariosActividad = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad} = req.body
    console.log('valores:', req.body)
    if (!IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad)
            .execute('ReadComentarioPorIDactividad')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    

export const VerComentariosRespuesta = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDcomentarioPadre} = req.body
    console.log('valores:', req.body)
    if (!IDcomentarioPadre) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDcomentarioPadre', sql.Int, IDcomentarioPadre)
            .execute('RReadComentarioPorIDpadre')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    


// Ver perfil profesor

// recuperar informacion una vez ingrese el usuario al sistema
export const VerProfesorPerfil = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet} = req.body
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .execute('ReadPersonaPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}  

//Modificar informacion perfil de profesor
// recuperar informacion una vez ingrese el usuario al sistema
export const ModificarProfesorPerfil = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono, TelefonoOficina,Sede, IDtipo } = req.body
    console.log('valores:', req.body)
    // if (!Carnet || !NombreCompleto || !Correo || !Contra || !Habilitado || !Coordinador || !Sede || !IDtipo) {
    //     console.log('here')
    //     return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    // }
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .input('NombreCompleto', sql.VarChar(100), NombreCompleto)
            .input('Correo', sql.VarChar(100), Correo)
            .input('Contra', sql.VarChar(64), Contra)
            .input('Foto',sql.VarChar(sql.MAX),Foto)
            .input('Habilitado', sql.Bit, Habilitado)
            .input('Coordinador', sql.Bit, Coordinador)
            .input('Telefono',sql.VarChar(64),Telefono)
            .input('TelefonoOficina',sql.VarChar(64),TelefonoOficina)
            .input('Sede', sql.Int, Sede)
            .input('IDtipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .output('Exito',sql.Int)
            .execute('UpdatePersona')
        console.log(result)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};

//Visualizar informacion de estudiantes
 
//Alfabeticamente
export const VerEstudiantesAlf = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    const pool = await getConnection()
    const result = await pool
            .request()
            .execute('ReadEstudianteporAlf')
    console.log(result)
    res.json(
        result.recordset)
 }

//Por Sede
export const VerEstudianteSede = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Sede} = req.body
    console.log('valores:', req.body)
    if (!Sede) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Sede', sql.Int, Sede)
            .execute('ReadEstudianteporSede')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    

//Carnet
export const VerEstudianteCarnet = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    const pool = await getConnection()
    const result = await pool
            .request()
            .execute('ReadEstudianteporCarnet')
    console.log(result)
    res.json(
        result.recordset)
    

} ;