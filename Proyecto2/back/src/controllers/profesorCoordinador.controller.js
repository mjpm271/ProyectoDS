import {getConnection, sql} from '../database/connection'



// Crear Plan Trabajo
export const CrearPlanTrabajo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Nombre , Abreviacion, IDcoordinador} = req.body
    console.log('valores:', req.body)
    if (!Nombre || !Abreviacion || ! IDcoordinador) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Nombre Plan', sql.VarChar, Nombre)
            .input('Abreviacion', sql.VarChar, Abreviacion)
            .input('Coordinador', sql.Int, IDcoordinador) //Revisar como recuperar informacion desde login
            .execute('CreateEquipoGuiaProfesor')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

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
            .input('ID Plan Trabajo', sql.Int, IDplanTrabajo)
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

//Update Plan de Trabajo
export const ModificarInformacionPlan = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDplanTrabajo,Nombre , Abreviacion, IDcoordinador} = req.body
    console.log('valores:', req.body)
    if (!IDplanTrabajo|| !Nombre || !Abreviacion || ! IDcoordinador) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('ID Plan',sql.Int,IDplanTrabajo)
            .input('Nombre Plan', sql.VarChar, Nombre)
            .input('Abreviacion', sql.VarChar, Abreviacion)
            .input('Coordinador', sql.Int, IDcoordinador) //Revisar como recuperar informacion desde login
            .execute('UpdatePlanTrabajo')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}


//Delete PLan de Trabajo
export const EliminarPlanTrabajo = async (req, res) => {
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
            .input('ID Plan', sql.Int, IDplanTrabajo)
            .execute('DeletePlanTrabajo')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    


//Ver integrantes del Equipo Guia ---> Falta agregar procedure




//Crear actividad
export const CrearActividad = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');        
    const {     
        Semana ,Fecha ,Hora ,Cantidaddiasprevios ,Cantidaddiasrequeridos ,FechaPublicacion ,IDmodalidad ,IDtipoActividad ,IDtipoAfiche ,IDtipoEstado ,IDplanTrabajo } = req.body
    console.log('valores:', req.body)
    if (!Semana || !Fecha || !Hora || !Cantidaddiasprevios || !Cantidaddiasrequeridos || !FechaPublicacion || !IDmodalidad || !IDtipoActividad
        || !IDtipoAfiche || !IDtipoEstado || !IDplanTrabajo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .input('Semana ', sql.Int, Semana)
            .input('Emisor ', sql.Date, IDemisor)
            .input('Hora ', sql.Time, Hora)
            .input('Cantidaddiasprevios', sql.Int, Cantidaddiasprevios)
            .input('Cantidaddiasrequeridos', sql.Int, Cantidaddiasrequeridos)
            .input('FechaPublicacion', sql.Date, FechaPublicacion)
            .input('IDmodalidad ', sql.Int, IDmodalidad)
            .input('IDtipoActividad ', sql.Int, IDtipoActividad)
            .input('IDtipoAfiche ', sql.Int, IDtipoAfiche)
            .input('IDtipoEstado ', sql.Int, IDtipoEstado)                        
            .input('IDplanTrabajo', sql.Int, IDplanTrabajo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .execute('CreateActividad')
        console.log(result)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

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
            .input('ID Actividad', sql.Int, IDactividad)
            .execute('ReadActividadPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    

//Update Actividad
export const ModificarActividad = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');        
    const {     
        Semana ,Fecha ,Hora ,Cantidaddiasprevios ,Cantidaddiasrequeridos ,FechaPublicacion ,IDmodalidad ,IDtipoActividad ,IDtipoAfiche ,IDtipoEstado ,IDplanTrabajo } = req.body
    console.log('valores:', req.body)
    if (!Semana || !Fecha || !Hora || !Cantidaddiasprevios || !Cantidaddiasrequeridos || !FechaPublicacion || !IDmodalidad || !IDtipoActividad
        || !IDtipoAfiche || !IDtipoEstado || !IDplanTrabajo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .input('Semana ', sql.Int, Semana)
            .input('Emisor ', sql.Date, IDemisor)
            .input('Hora ', sql.Time, Hora)
            .input('Cantidaddiasprevios', sql.Int, Cantidaddiasprevios)
            .input('Cantidaddiasrequeridos', sql.Int, Cantidaddiasrequeridos)
            .input('FechaPublicacion', sql.Date, FechaPublicacion)
            .input('IDmodalidad ', sql.Int, IDmodalidad)
            .input('IDtipoActividad ', sql.Int, IDtipoActividad)
            .input('IDtipoAfiche ', sql.Int, IDtipoAfiche)
            .input('IDtipoEstado ', sql.Int, IDtipoEstado)                        
            .input('IDplanTrabajo', sql.Int, IDplanTrabajo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .execute('UpdateActividad')
        console.log(result)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

//Delete Actividad
export const EliminarActividad = async (req, res) => {
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
            .execute('DeleteActividad')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    



// Ver actividad x Plan de trabajo --> Falta agregar procedure






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
            .input('ID ', sql.Int, IDprofesor)
            .input('Emisor ', sql.Int, IDemisor)
            .input('ID Actividad ', sql.Int, IDactividad)
            .input('ComentarioPadre', sql.Int, IDcomentarioPadre)
            .input('Hora', sql.Time, Hora)
            .input('Fecha', sql.Date, Fecha)
            .input('Comentarios ', sql.VarChar, Comentarios)
            .input('Contenido', sql.VarChar, Contenido) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .execute('CreateComentario')
        console.log(result)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

// Ver comentarios x Actividad de un Plan especifico ---> Falta agregar procedure





//Responder comentarios
    // Preguntar como se maneja la columna comentarios en la base
    //Parece que el metodo de crear comentario es el de responder pero no estoy segura





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
            .input('ID Profesor', sql.Int, IDpersona)
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
            .input('ID ', sql.Int, ID)
            .input('Nombre Completo', sql.VarChar, NombreCompleto)
            .input('Correo ', sql.VarChar, Correo)
            .input('Contraseña', sql.VarChar, Contra)
            .input('Habilitado', sql.bit, Habilitado)
            .input('Coordinador', sql.bit, Coordinador)
            .input('Sede ', sql.Int, Sede)
            .input('ID tipo', sql.Int, IDtipo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .execute('UpdatePersona')
        console.log(result)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}
