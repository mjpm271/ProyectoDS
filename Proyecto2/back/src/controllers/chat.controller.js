import { getConnection, sql } from "../database/connection"

export const EnviarMensaje = async (req, res) => {
    const { IDUsuario, Mensaje, Fecha, IDSalaChat } = req.body
    console.log('User info:', IDUsuario)
    console.log('Message info:', Mensaje, Fecha)
    console.log('Chat info:', IDSalaChat)
    if (!IDUsuario || !Mensaje || !Fecha || !IDSalaChat) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDchat', sql.Int, IDSalaChat)
            .input('Emisor',  sql.Int, IDUsuario)
            .input('Mensaje', sql.Text, Mensaje)
            .input('Fecha', sql.DateTime, Fecha)
            .output(sql.Int)
            .execute('CreateMensaje')
        const outputValue = result.output

        
    }
}