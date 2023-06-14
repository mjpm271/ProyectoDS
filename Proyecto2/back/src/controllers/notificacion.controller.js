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
                const notificacion = await pool
                    .request()
                    .input('Titulo', sql.VarChar(sql.MAX), 'Publicacion actividad')
                    .input('Fecha', sql.Date, FechaSistema)
                    .input('Emisor', sql.Int, null)
                    .input('NombreEmisor', sql.VarChar(100), null)
                    .input('Contenido', sql.VarChar(sql.MAX), `Se ha activado la actividad: ${item.Nombre}`)
                    .input('IDactividad', sql.Int, item.IDactividad)
                    //.input('Titulo')
                    .execute('CreateNotificacion')
                await NotifyProfesor(item.IDactividad)

            }
        }
    } catch (err) {
        res.sendStatus(500, err.message)
    }

}

export const NotifyProfesor = async (IDactividad) => {
    const pool = await getConnection();
    const ultima = await pool
        .request()
        .execute('ReadUltimaNotificacion')
    const grupo = await pool
        .request()
        .input('IDactividad', sql.Int, IDactividad)
        .execute('ReadResponsableActividadPorID')
    for (const item of grupo.recordset){
        const link = await pool
            .request()
            .input('IDnotificacion', sql.Int, ultima.recordset[0].IDnotificacion)
            .input('IDpersona', sql.Int, item.IDprofesor)
            .execute('CreateNotificacionUsuario')
    }
    console.log(grupo.recordset)
}
