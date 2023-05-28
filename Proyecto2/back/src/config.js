import {config} from 'dotenv'
config();

export default {
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER || local,
    dbPassword: process.env.DB_PASSWORD || 12345,
    dbServer: process.env.DB_SERVER || 'localhost',
    dbDatabase: process.env.DB_DATABASE || 'proyecto',
}
