import express from 'express';
import config from './config';

import ejemploRoutes from './routes/ejemplo.route';



const app = express();

app.use(ejemploRoutes);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
 
//settings
app.set('port', config.port);

export default app;