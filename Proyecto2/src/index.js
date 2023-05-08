import app from './app'
import ejemploRoutes from './routes/ejemplo.route'
// import './database/connection.js'


app.listen(app.get('port'))

console.log('server running on', app.get('port'))