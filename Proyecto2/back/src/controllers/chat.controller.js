import { MAX } from "mssql"
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
    
    const {IDChat} = req.body
    if (!IDChat){
        return res.status(400).json({ msg: 'Bad Request. Please fill all fields' })
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDChat', sql.Int, IDChat)
            .execute('ReadChatByID')
        return res.json(result.recordset)
    } catch(err) {
        return res.sendStatus(500, err.message)
    }
}

export const ActualizarSalaChat = async (req, res) => {
    const { IDChat, NombreChat } = req.body
    console.log('Chatroom:', IDSalaChat, 'New name:', NombreChat)
    if (!IDSalaChat || !NombreChat) {
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }

    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDChat', sql.Int, IDChat)
            .input('nuevoNombre', sql.VarChar(255), NombreChat)
            .execute('UpdateChat')
        res.json(result.recordset)
    } catch (err) {
        
    }
}

export const BorrarSalaChat = async (req, res) => {
    const {IDSalaChat} = req.body
    if (!IDSalaChat) {
        return res.status(400).json({ msg: 'Bad request. Please fill all fields' })
    }

    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDchat', sql.Int, IDSalaChat)
            .execute('DeleteChat')
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const CrearParticipanteChat = async (req, res) => {
    const {IDSala, Carnet} = req.body
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDChats', sql.Int, IDSala)
            .input('Carnet', sql.VarChar(64), Carnet)
            .execute('CreateParticipanteChat')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const LeerParticipanteChat = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .execute('ReadParticipanteChat')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const LeerParticipantesChatPorId = async (req, res) => {
    const { ID } = req.body
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDParticipantesChat', sql.Int, ID)
            .execute('ReadParticipanteChatByID')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const LeerChatsPorCarnet = async (req, res) => {
    const { Carnet } = req.body
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('Carnet', sql.VarChar(64), Carnet)
            .execute('ReadParticipanteChatPorCarnet')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const LeerParticipantesPorChat = async (req, res) => {
    const { IDSala } = req.body
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDChat', sql.Int, IDSala)
            .execute('ReadParticipanteChatPorIDchat')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const ActualizarParticipanteChat = async (req, res) => {
    const { IDParticipantesChat, IDSala, IDPersona } = req.body
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDParticipantesChat', sql.Int, IDParticipantesChat)
            .input('IDChat', sql.Int, IDSala)
            .input('IDpersona', sql.Int, IDPersona)
            .execute('UpdateParticipanteChat')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const BorrarParticipanteChat = async (req, res) => {
    const { IDParticipantesChat } = req.body
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDParticipantesChat', sql.Int, IDParticipantesChat)
            .execute('DeleteParticipanteChat')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const EnviarMensaje = async (req, res) => {
    const { Carnet, Mensaje, Fecha, IDSalaChat } = req.body
    console.log('User info:',   Carnet)
    console.log('Message info:', Mensaje, Fecha)
    console.log('Chat info:', IDSalaChat)
    if (!Carnet || !Mensaje || !Fecha || !IDSalaChat) {
        return res.status(400).json({msg: 'Bad request. Please fill all fields'})
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('IDchat', sql.Int, IDSalaChat)
            .input('CarnetEmisor', sql.VarChar(64), Carnet)
            .input('Mensaje', sql.VarChar(sql.MAX), Mensaje)
            .input('Fecha', sql.DateTime, Fecha)
            
            .execute('CreateMensaje')
        const outputValue = result.recordset

        res.json(result.recordset)

    } catch (err) {
        console.error(err)
        res.sendStatus(500, err.message)
    }
}

export const LeerMensajes = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .execute('ReadMensajes')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const LeerMensajesPorIDChat = async (req, res) => {
    const { IDChat } = req.body
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDchat', sql.Int, IDChat)
            .execute('ReadMensajesByIDChat')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const ActualizarMensaje = async (req, res) => {
    const { IDMensaje, IDChat, Emisor, Mensaje, Fecha } = req.body
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDMensajes', sql.Int, IDMensaje)
            .input('IDchat', sql.Int, IDChat)
            .input('Emisor', sql.Int, Emisor)
            .input('Mensaje', sql.Text, Mensaje)
            .input('Fecha', sql.DateTime, Fecha)
            .execute('UpdateMensaje')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}

export const BorrarMensaje = async (req, res) => {
    const { IDMensaje } = req.body
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IDMensajes', sql.Int, IDMensaje)
            .execute('DeleteMensaje')
        console.log(result)
        res.json(result.recordset)
    } catch (err) {
        res.sendStatus(500, err.message)
    }
}