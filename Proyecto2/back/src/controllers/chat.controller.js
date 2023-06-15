import { getConnection, sql } from "../database/connection"

export const CrearSalaChat = async (req, res) => {
    const {NombreChat} = req.body
    if (!NombreChat) {
        return res.status(400).json({ msg: 'Bad Request. Please fill all fields' })
    }

    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('Nombre', sql.VarChar(255), NombreChat)
            .output('resultado', sql.Int)
            .execute('CreateChats')
        const outputValue = result.output

        if (outputValue === 0) {
            return res.sendStatus(500, 'Could not create new chatroom')
        }
        res.json(outputValue)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const LeerSalasChat = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .execute('ReadChats')
        console.log('Chatrooms:', result)
        res.json(result.recordset)
    } catch (err) {
        return res.sendStatus(500, err.message)
    }
}

export const LeerSalasChatPorID = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .execute()
            
    }
}

export const ActualizarSalaChat = async (req, res) => {
    const {IDSalaChat, NombreChat} = req.body
    console.log('Chatroom:', IDSalaChat, 'New name:', NombreChat)
    if (!IDSalaChat || !NombreChat) {
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }

    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDChat', sql.Int, IDSalaChat)
            .input('nuevoNombre', sql.VarChar(255), NombreChat)
            .execute('UpdateChat')
        
    } catch (err) {
        
    }
}

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

        res.json(outputValue)

    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

