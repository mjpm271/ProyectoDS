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
            .output('Exito',sql.Int)
            .execute('LoginUsuario')
        const outputValue = result.output;

        // Hacer algo con el resultado y el output
        // ...

        // Enviar una respuesta al cliente
        console.log(result.recordset)
        res.json(result)
        // res.status(200).json(outputValue.Exito);
        console.log(outputValue);
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};
