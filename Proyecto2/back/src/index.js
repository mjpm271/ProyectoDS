import app from './app'
import AsistenteAdmin from './routes/asistenteAdmin.route'
import ProfesorGuia from './routes/profesor.route'
import Coordinador from './routes/profesorCoordinador.route'
import Login from './routes/index.route'
import Estudiante from './routes/estudiante.route'

// import './database/connection.js'

// app.use('/ejemplo', ejemploRoutes)
app.use('/asistente', AsistenteAdmin)
app.use('/profesor', ProfesorGuia)
app.use('/coordinador',Coordinador)
app.use('/estudiante',Estudiante)
app.use('/index',Login)


app.listen(app.get('port'))

console.log('server running on', app.get('port'))