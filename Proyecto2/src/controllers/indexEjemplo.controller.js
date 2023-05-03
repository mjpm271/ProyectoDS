import { getConnection, sql } from "../database/connection.js";


export const loginPage = async (req, res) => {
    res.render('login_view')
};

export const loginPostFunction = async (req, res) => {
    const { UserName, Password } = req.body
    console.log("user login:", UserName, Password)
    if (!UserName || !Password) {
        return res.status(400).json({ msg: 'Bad Request. Please fill all fields' })
    }
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('UserName', sql.VarChar, UserName)
            .input('Password', sql.VarChar, Password)
            .output('ExitCode', sql.Int)
            .execute('OtroLogin')
        console.log(result.output.ExitCode)
        let statusCode = result.output.ExitCode
        if (!([1, 2, 3].includes(statusCode))) {
            //console.log("si llego, tranqui")
            return res.render('login_view', {err_msg: "No se pudo hacer el inicio de sesión"})
        }
        console.log('Login de tipo', statusCode)
        if (statusCode == 1) {
            // es admin
            console.log('Es admin')
            res.redirect('admin?Login=' + result.recordset[0]['IDUsuarioBase'])
        } else if (statusCode == 2) {
            // es empleado
            console.log('Es empleado')
            res.redirect('empleado?Login=' + result.recordset[0]['IDUsuarioBase'])
        } else {
            // es cliente
            console.log('Es cliente')
            res.redirect('cliente?Login=' + result.recordset[0]['IDUsuarioBase'])
        }
    } catch (err) {
        res.sendStatus(500, err.message)
    }
};

/* -> CREATE READ UPDATE DELETE
    HTTP
    GET -> READ
    POST -> CREATE, UPDATE
    DELETE -> DELETE
*/