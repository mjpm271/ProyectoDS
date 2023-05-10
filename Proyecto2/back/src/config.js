import {config} from 'dotenv'
config();

export default {
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER || 'test',
    dbPassword: process.env.DB_PASSWORD || '1234',
    dbServer: process.env.DB_SERVER || 'localhost',
    dbDatabase: process.env.DB_DATABASE || 'proyectoDS',
}