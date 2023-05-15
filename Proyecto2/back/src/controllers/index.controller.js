import {getConnection , sql} from '../database/connection'


export const login = async (req, res) => {
    const { Correo, Contra } = req.body
    console.log("user login:", Correo, Contra)
    if (!Correo || !Contra) {
        return res.status(400).json({ msg: 'Bad Request. Please fill all fields' })
    }
    try {
        const pool = await getConnection();
        //console.log(pool);
        const result = await pool
            .request()
            .input('Correo', sql.VarChar(100), Correo)
            .input('Contra', sql.VarChar(64), Contra)
            .execute('sp_LoginPersona3')
        console.log(result);
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};
