import express from 'express';
import config from './config';
import cors from "cors";
import morgan from "morgan";
import ejemploRoutes from './routes/ejemplo.route';
import AsistenteRoutes from './routes/asistenteAdmin.route';
// import ProfesorRoutes from './routes/profesor.route';
// import ProfesorCoordinador from './routes/profesorCoordinador.route'


const app = express();

//settings
app.set('port', config.port);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
//   });

 
  app.use(ejemploRoutes);
  app.use(AsistenteRoutes);
  // app.use(ProfesorRoutes);
  // app.use(ProfesorCoordinador);


export default app;