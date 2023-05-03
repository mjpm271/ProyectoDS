import sql from 'mssql'
import config from '../config'

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool
    }
    catch (err) {
        console.error(err.message)
    }
}

export { sql }