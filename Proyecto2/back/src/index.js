import app from './app'
import AsistenteAdmin from './routes/asistenteAdmin.route'
import ProfesorGuia from './routes/profesor.route'
import Coordinador from './routes/profesorCoordinador.route'
import Login from './routes/index.route'
import Estudiante from './routes/estudiante.route'
import Notificacion from './routes/notificacion.route'
import Chat from './routes/chat.route'

// para chats
import http from "http"
import {Server} from "socket.io"

// import './database/connection.js'

// app.use('/ejemplo', ejemploRoutes)
app.use('/asistente', AsistenteAdmin)
app.use('/profesor', ProfesorGuia)
app.use('/coordinador',Coordinador)
app.use('/estudiante',Estudiante)
app.use('/notificacion',Notificacion)
app.use('/index',Login)
app.use('/chat', Chat)


const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin:"*"
    }
})

io.on('connection', socket => {
    console.log("Socket connected")

    // cuando se hace el submit de un chat
    socket.on('chat', chat => {
        io.emit('chat', chat)
    })

    socket.on('disconnect', () => {
        console.log("Socket disconnected")
    })
})

server.listen(app.get('port'))

console.log('server running on', app.get('port'))
