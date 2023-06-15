import {getConnection, sql} from '../database/connection'


export const SimuladorFecha  = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const {FechaSistema} = req.body
    try{
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('Fecha', sql.Date, FechaSistema)
            .execute('ReadActividadesUpdate')
        //console.log(result.recordset)
        for (const item of result.recordset){
            //console.log(item.IDtipoEstado);
            if (item.IDtipoEstado === 1){
                const activar = await pool
                    .request()
                    .input('IDactividad', sql.Int, item.IDactividad)
                    .execute('ActivarActividad')
                await CrearNotificacion('Publicacion actividad', FechaSistema, `Se ha activado la actividad: ${item.Nombre}`, null, null, item.Idactividad)
                await NotifyResponsable(item.IDactividad)
                await CrearNotificacion('Invitacion actividad', FechaSistema, `Se le invita a la actividad: ${item.Nombre}`, null, null, item.Idactividad)
                await NotifyAll(item.IDactividad)
            }
            else if (item.IDtipoEstado === 2){
                const NumRec = await pool
                    .request()
                    .input('FechaSistema', sql.Date, FechaSistema)
                    .input('FechaActividad', sql.DateTime, item.Fecha)
                    .input('DiasRequeridos', sql.Int, item.Cantidaddiasrequeridos)
                    .output('Result', sql.Int)
                    .execute('NumeroRecordatorio')
                await CrearNotificacion(`Recordatorio de actividad: ${item.Nombre}`, FechaSistema,`Se ha enviado recordatorio ${NumRec.output.Result}/${item.Cantidaddiasrequeridos} de la actividad: ${item.Nombre} que se realiza el ${item.Fecha}`, null, null, item.IDactividad)
                await NotifyResponsable(item.IDactividad)
                await NotifyAll(item.IDactividad)
            }
        }
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

export const NotifyResponsable = async (IDactividad) => {
    const pool = await getConnection();
    const ultima = await UltimaNotificacion()
    const grupo = await pool
        .request()
        .input('IDactividad', sql.Int, IDactividad) 
        .execute('ReadResponsableActividadPorID')
    for (const item of grupo.recordset){
        await Link(ultima, item.IDprofesor)
    }
}

export const NotifyAll = async (IDactividad) => {
    const pool = await getConnection();
    const ultima = await UltimaNotificacion()
    const grupo = await pool
        .request()
        .input('IDactividad', sql.Int, IDactividad)
        .execute('ReadGrupoUsuarioporID')
    for (const item of grupo.recordset){
        await Link(ultima, item.IDpersona)
    }
}

export const Link = async (ultima, IDpersona) => {
    const pool = await getConnection()
    const link = await pool
        .request()
        .input('IDnotificacion', sql.Int, ultima)
        .input('IDpersona', sql.Int, IDpersona)
        .execute('CreateNotificacionUsuario')
}

// Crea las notificaciones generales
export const CrearNotificacion = async (Titulo, Fecha, Contenido, Emisor, NombreEmisor, IDactividad) => {
    const pool = await getConnection()
    const notificacion = await pool
        .request()
        .input('Titulo', sql.VarChar(sql.MAX), Titulo)
        .input('Fecha', sql.Date, Fecha)
        .input('Emisor', sql.Int, Emisor)
        .input('NombreEmisor', sql.VarChar(100), NombreEmisor)
        .input('Contenido', sql.VarChar(sql.MAX), Contenido)
        .input('IDactividad', sql.Int, IDactividad)
        //.input('Titulo')
        .execute('CreateNotificacion')

}

export const UltimaNotificacion = async () => {
    const pool = await getConnection()
    const ultima = await pool
        .request()
        .execute('ReadUltimaNotificacion')
    const id = ultima.recordset[0].IDnotificacion
    return id
}


export const NotificarCancelacion = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const {IDactividad, IDpersona, FechaSistema, Nombre, NombreCompleto} = req.body
    try{
        const pool = await getConnection();
        await CrearNotificacion('Actividad cancelada', FechaSistema, `Se cancela la actividad: ${Nombre}`, IDpersona, NombreCompleto, IDactividad)
        await NotifyResponsable(IDactividad)
        await NotifyAll(IDactividad)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const NotificacionVista = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDnotificacion, IDpersona} = req.body
    console.log('valores:', req.body)
    // if (!IDnotificacion, IDpersona) {
    //     console.log('here')
    //     return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    // }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDnotificacion', sql.Int, IDnotificacion)
            .input('IDpersona', sql.Int, IDpersona)
            .output('Result', sql.Int)
            .execute('VerNotificacionUsuario')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

    }  

export const Desver = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDnotificacion, IDpersona} = req.body
    console.log('valores:', req.body)
    // if (!IDnotificacion, IDpersona) {
    //     console.log('here')
    //     return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    // }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDnotificacion', sql.Int, IDnotificacion)
            .input('IDpersona', sql.Int, IDpersona)
            .output('Result', sql.Int)
            .execute('DesverNotificacionUsuario')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

    }  

export const HabilitarNotificaciones = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad, IDpersona} = req.body
    console.log('valores:', req.body)
    // if (!IDactividad, IDpersona) {
    //     console.log('here')
    //     return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    // }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad)
            .input('IDpersona', sql.Int, IDpersona)
            .output('Result', sql.Int)
            .execute('ActivarGrupoUsuario')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }

    }  

export const DeshabilitarNotificaciones = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad, IDpersona} = req.body
    console.log('valores:', req.body)
    // if (!IDactividad, IDpersona) {
    //     console.log('here')
    //     return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    // }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad)
            .input('IDpersona', sql.Int, IDpersona)
            .output('Result', sql.Int)
            .execute('DesactivarGrupoUsuario')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}  

export const Habilitado = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const { IDactividad, IDpersona} = req.body
    console.log('valores:', req.body)
    // if (!IDactividad, IDpersona) {
    //     console.log('here')
    //     return res.sendStatus(400, {msg: 'Bad Request. Please fill all fields'})
    // }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDactividad', sql.Int, IDactividad)
            .input('IDpersona', sql.Int, IDpersona)
            .execute('ReadHabilitadoGrupoUsuario')
        console.log(result)
        res.json(result.recordset)
        
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}  

export const BorrarBuzon = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const {IDpersona} = req.body
    try{
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDpersona', sql.Int, IDpersona)
            .execute('DeleteBuzon')
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const BorrarNotificacion = async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');    
    const {IDpersona, IDnotificacion} = req.body
    try{
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDnotificacion', sql.Int, IDnotificacion)
            .input('IDpersona', sql.Int, IDpersona)
            .execute('DeleteNotificacionUsuarioID')
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}
