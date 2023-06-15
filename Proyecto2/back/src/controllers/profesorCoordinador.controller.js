import {getConnection, sql} from '../database/connection'



// Crear Plan Trabajo
export const CrearPlanTrabajo = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Nombre , Abreviacion, IDequipoGuia} = req.body
    console.log('valores:', req.body)
    /*if (!Nombre || !Abreviacion || ! IDcoordinador) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(32), Nombre)
            .input('Abreviacion', sql.VarChar(32), Abreviacion)
            .input('IDequipoGuia', sql.Int, IDequipoGuia) //Revisar como recuperar informacion desde login
            .output('Result', sql.Int)
            .execute('CreatePlanTrabajo')
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
            .input('IDplanTrabajo',sql.Int,IDplanTrabajo)
            .input('Nombre', sql.VarChar(32), Nombre)
            .input('Abreviacion', sql.VarChar(32), Abreviacion)
            .input('IDcoordinador', sql.Int, IDcoordinador) //Revisar como recuperar informacion desde login
            .output('Exito',sql.Bit)
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
            .input('IDplanTrabajo', sql.Int, IDplanTrabajo)
            .execute('DeletePlanTrabajo')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    

export const ConsultarMiembrosEquipoGuia= async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Nombre } = req.body
    console.log('valores:', req.body)
    if (!Nombre ) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(32), Nombre)
            .execute('ReadEquipoGuiaProfesorPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

};



//Crear actividad
export const CrearActividad = async (req, res) => {  
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');        
    const {     
        Nombre, Semana ,Fecha ,Cantidaddiasprevios ,Cantidaddiasrequeridos ,FechaPublicacion, Linkreunion, Afiche, IDmodalidad ,IDtipoActividad ,IDtipoAfiche ,IDtipoEstado ,IDplanTrabajo } = req.body
    console.log('valores:', req.body)
    /*if (!Nombre || !Semana || !Fecha || !Cantidaddiasprevios || !Cantidaddiasrequeridos || !Linkreunion || !Afiche|| !FechaPublicacion || !IDmodalidad || !IDtipoActividad
        || !IDtipoAfiche || !IDtipoEstado || !IDplanTrabajo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(64), Nombre)
            .input('Semana', sql.Int, Semana)
            .input('Fecha', sql.DateTime, Fecha)
            .input('Cantidaddiasprevios', sql.Int, Cantidaddiasprevios)
            .input('Cantidaddiasrequeridos', sql.Int, Cantidaddiasrequeridos)
            .input('FechaPublicacion', sql.Date, FechaPublicacion)
            .input('LinkReunion', sql.VarChar(sql.MAX), Linkreunion)
            .input('Afiche', sql.VarChar(sql.MAX), Afiche)
            .input('IDmodalidad', sql.Int, IDmodalidad)
            .input('IDtipoActividad', sql.Int, IDtipoActividad)
            .input('IDtipoAfiche', sql.Int, IDtipoAfiche)
            .input('IDtipoEstado', sql.Int, IDtipoEstado)                        
            .input('IDplanTrabajo', sql.Int, IDplanTrabajo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .output('Result',sql.Int)
            .execute('CreateActividad')
        res.json(result.recordset)
        //console.log(result.output)
        //console.log(result)
        // Obtiene la ultima actividad
        console.log(result.output.Result)
        if (result.output.Result === 3){
            const ultima = await pool
                .request()
                .execute('ReadUltimaActividad')
            LlenarGrupoUsuario(ultima.recordset[0].IDactividad)
        }
        //console.log(ultima.recordset[0].IDactividad)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

// Llena el grupo usuario con el id de la ultima actividad y de los usarios 
const LlenarGrupoUsuario = async function(IDactividad){
    try{
        const pool = await getConnection()
        const cantidad = await pool
            .request()
            .execute('ReadPersonasSoloID')  
        console.log(cantidad.recordset)
        // Forma de hacer un for para tener cada persona
        for (const item of cantidad.recordset){
            const create = await pool
                .request()
                .input('IDactividad', sql.Int, IDactividad)
                .input('Habilitado', sql.Bit, true)
                .input('IDpersona', sql.Int, item.IDpersona)
                .execute('CreateGrupoUsuario')
            console.log(item);
        //console.log(jsonObject)
        }
    }catch (err){
        res.sendStatus(500, err.message)
    }
}
// Hace el update a la actividad realizada 
export const RealizarActividad = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad} = req.body
    console.log('valores:', req.body)
    /*if (!IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad) //Revisar como recuperar informacion desde login
            .output('Result', sql.Int)
            .execute('RealizarActividad')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

// Cancela la Actividad
export const CancelarActividad = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad} = req.body
    console.log('valores:', req.body)
    /*if (!IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad) //Revisar como recuperar informacion desde login
            .output('Result', sql.Int)
            .execute('CancelarActividad')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

// Crear Evidencia de que ser realizo la actividad
export const CrearEvidencia = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Fotoparticipantes, Linkgrabacion, IDactividad} = req.body
    console.log('valores:', req.body)
    /*if (!Fotoparticipantes || !linkGrabacion || !IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Fotoparticipantes', sql.VarChar(sql.MAX), Fotoparticipantes)
            .input('linkGrabacion', sql.VarChar(sql.MAX), Linkgrabacion)
            .input('IDactividad', sql.Int, IDactividad) //Revisar como recuperar informacion desde login
            .execute('CreateEvidenciaActividad')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

// Ver Evidencias
export const VerEvidencias = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad} = req.body
    console.log('valores:', req.body)
    /*if (!Fecha || !Observacion|| !IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad) //Revisar como recuperar informacion desde login
            .execute('ReadEvidenciaActividadPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

// Crea la observacion de la actividad
export const CrearObservacion = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Fecha, Observacion, IDactividad} = req.body
    console.log('valores:', req.body)
    if (!Fecha || !Observacion|| !IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Fecha', sql.DateTime, Fecha)
            .input('Observacion', sql.VarChar(sql.MAX), Observacion)
            .input('IDactividad', sql.Int, IDactividad) //Revisar como recuperar informacion desde login
            .execute('CreateObservacionActividad')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

// Ver Observaciones
export const VerObservacion = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad} = req.body
    console.log('valores:', req.body)
    /*if (!Fecha || !Observacion|| !IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad) //Revisar como recuperar informacion desde login
            .execute('ReadObservacionActividadPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

// Definir el responsable(s) de la actividad
export const DefinirResponsable = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Carnet} = req.body
    console.log('valores:', req.body)
    /*if (!Carnet || !IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const resultado = await pool
            .request()
            .execute('ReadUltimaActividad')
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .input('IDactividad', sql.Int, resultado.recordset[0].IDactividad)
            .execute('CreateResponsableActividad')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}   

// ver el responsable(s) de la actividad
export const VerResponsables = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const {IDactividad} = req.body
    console.log('valores:', req.body)
    /*if (!Carnet || !IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad)
            .execute('ReadResponsableActividadProfesor')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

// Ver actividad 
export const VerActividad = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { Nombre, IDplanTrabajo} = req.body
    console.log('valores:', req.body)
    if (!Nombre || !IDplanTrabajo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(64), Nombre)
            .input('IDplanTrabajo', sql.Int, IDplanTrabajo)
            .execute('ReadActividadPorID')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    
// Ver actividad 
export const VerNombreActividad = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad} = req.body
    console.log('valores:', req.body)
    /*if (!Nombre || !IDplanTrabajo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad)
            .execute('ReadNombreActividad')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}    

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

//Update Actividad
export const ModificarActividad = async (req, res) => {  
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');        
    const {     
        IDactividad, Nombre, Semana ,Fecha ,Cantidaddiasprevios ,Cantidaddiasrequeridos ,FechaPublicacion, Linkreunion, Afiche, IDmodalidad ,IDtipoActividad ,IDtipoAfiche ,IDtipoEstado ,IDplanTrabajo } = req.body
    console.log('valores:', req.body)
    /*if (!Nombre || !Semana || !Fecha || !Cantidaddiasprevios || !Cantidaddiasrequeridos || !Linkreunion || !Afiche|| !FechaPublicacion || !IDmodalidad || !IDtipoActividad
        || !IDtipoAfiche || !IDtipoEstado || !IDplanTrabajo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad)
            .input('Nombre', sql.VarChar(64), Nombre)
            .input('Semana', sql.Int, Semana)
            .input('Fecha', sql.DateTime, Fecha)
            .input('Cantidaddiasprevios', sql.Int, Cantidaddiasprevios)
            .input('Cantidaddiasrequeridos', sql.Int, Cantidaddiasrequeridos)
            .input('FechaPublicacion', sql.Date, FechaPublicacion)
            .input('Linkreunion', sql.VarChar(sql.MAX), Linkreunion)
            .input('Afiche', sql.VarChar(sql.MAX), Afiche)
            .input('IDmodalidad', sql.Int, IDmodalidad)
            .input('IDtipoActividad', sql.Int, IDtipoActividad)
            .input('IDtipoAfiche', sql.Int, IDtipoAfiche)
            .input('IDtipoEstado', sql.Int, IDtipoEstado)                        
            .input('IDplanTrabajo', sql.Int, IDplanTrabajo) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .output('Exito',sql.Int)
            .execute('UpdateActividad2')
        console.log(result.output)
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
    /*if (!IDactividad) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }*/
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad)
            .execute('DeleteActividad')
        console.log(result)
        res.json(result.recordset.IDactividad)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}    


// Comentar
export const Comentar = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');        
    const { IDpersona, IDactividad, IDcomentarioPadre, Hora, Fecha, Contenido } = req.body
    console.log('valores:', req.body)
    if (!IDpersona || !IDactividad || !IDcomentarioPadre || !Hora || !Fecha || !Contenido) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .input('IDpersona', sql.Int, IDpersona)
            .input('ID Actividad ', sql.Int, IDactividad)
            .input('ComentarioPadre', sql.Int, IDcomentarioPadre)
            .input('Hora', sql.Time, Hora)
            .input('Fecha', sql.Date, Fecha)
            .input('Contenido', sql.VarChar, Contenido) //Preguntar si sería bueno setear desde el inicio a 1 como profesor
            .execute('CreateComentario')
        console.log(result)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

// TODO: Ver comentarios x Actividad de un Plan especifico ---> Falta agregar procedure



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
export const ModificarProfesorPerfil = async (req, res) => {  // TODO: ingresar output
    const { Carnet, NombreCompleto, Correo, Contra, Habilitado, Coordinador, Sede, IDpersonatipo } = req.body
    console.log('valores:', req.body)
    if (!Carnet || !NombreCompleto || !Correo || !Contra || !Habilitado || !Coordinador || !Sede || !IDtipo) {
        console.log('here')
        return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        //console.log('whatever')
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
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


