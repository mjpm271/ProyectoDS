import express from 'express';
import config from './config';

//self modules
import ejemploRoutes from './routes/ejemplo.route';
import AsistenteRoutes from './routes/asistenteAdmin.route';
import ProfesorRoutes from './routes/profesor.route';
import ProfesorCoordinador from './routes/profesorCoordinador.route'


const app = express();

app.use(ejemploRoutes);
app.use(AsistenteRoutes);
app.use(ProfesorRoutes);
app.use(ProfesorCoordinador);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
 
//settings
app.set('port', config.port);

export default app;