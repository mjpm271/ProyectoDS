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
            .execute('ReadActividadPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    


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
    const { IDprofesor, IDemisor, IDactividad, IDcomentarioPadre, Hora, Fecha, Comentarios, Contenido } = req.body
    console.log('valores:', req.body)
    if (!IDprofesor || !IDemisor || !IDactividad || !IDcomentarioPadre || !Hora || !Fecha || !Comentarios || !Contenido) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .replaceInput('IDprofesor',)
            .input('ID ', sql.Int, IDprofesor)
            .input('Emisor ', sql.Int, IDemisor)
            .input('ID Actividad ', sql.Int, IDactividad)
            .input('ComentarioPadre', sql.Int, IDcomentarioPadre)
            .input('Hora', sql.Time, Hora)
            .input('Fecha', sql.Date, Fecha)
            .input('Comentarios ', sql.VarChar, Comentarios)
            .input('Contenido', sql.VarChar, Contenido) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .execute('CreatePersona')
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
            .input('ID Actividad', sql.Int, IDactividad)
            .execute('ReadActividadPorID')
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
    //IDpersona = 
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDpersona', sql.Int, IDpersona)
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
    const { IDpersona, NombreCompleto, Correo, Contra,Foto,Habilitado, Coordinador, Telefono, TelefonoOficina,Sede, IDtipo } = req.body
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
            .input('ID', sql.Int, IDpersona)
            .input('NombreCompleto', sql.VarChar(100), NombreCompleto)
            .input('Correo', sql.VarChar(100), Correo)
            .input('Contra', sql.VarChar(64), Contra)
            .input('Foto',sql.VarChar(100),Foto)
            .input('Habilitado', sql.Bit, Habilitado)
            .input('Coordinador', sql.Bit, Coordinador)
            .input('Telefono',sql.VarChar(64),Telefono)
            .input('TelefonoOficina',sql.VarChar(64),TelefonoOficina)
            .input('Sede', sql.Int, Sede)
            .input('IDtipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
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
            .execute('ReadActividadPorID')
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