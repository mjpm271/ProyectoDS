import app from './app'
import ejemploRoutes from './routes/ejemplo.route'
import AsistenteAdmin from './routes/asistenteAdmin.route'
// import './database/connection.js'

// app.use('/ejemplo', ejemploRoutes)
app.use('/ejemplo', AsistenteAdmin)
app.use('/ejemplo',ejemploRoutes)

app.listen(app.get('port'))

console.log('server running on', app.get('port'))