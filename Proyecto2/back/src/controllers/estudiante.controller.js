import {getConnection, sql} from '../database/connection'

// Ver Actividades Publicadas
export const VerActividadesPublicadas = async (req, res) => {
    //Los headers deben habilitarse para que el frontend pueda recuperar los datos
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // --> posiblemente haya que cambiar el lugar de acceso dependiendo de la pag que viene
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');   
    const pool = await getConnection()
    const result = await pool
            .request()
            .execute('ReadActividadesPublicadas')
    console.log(result)
    res.json(
        result.recordset)
  
    }  