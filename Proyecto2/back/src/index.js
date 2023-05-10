import app from './app'
import AsistenteRoutes from './routes/asistenteAdmin.route'
// import './database/connection.js'


app.listen(app.get('port'))
app.use('/ejemplo', AsistenteRoutes)

console.log('server running on', app.get('port'))