import app from './app'
import ejemploRoutes from './routes/ejemplo.route'
import AsistenteAdmin from './routes/asistenteAdmin.route'
import ProfesorGuia from './routes/profesor.route'
import Coordinador from './routes/profesorCoordinador.route'
import Login from './routes/index.route'

// import './database/connection.js'

// app.use('/ejemplo', ejemploRoutes)
app.use('/asistente', AsistenteAdmin)
app.use('/profesor', ProfesorGuia)
app.use('/coordinador',Coordinador)
app.use('/ejemplo',ejemploRoutes)
app.use('/index',Login)


app.listen(app.get('port'))

console.log('server running on', app.get('port'))