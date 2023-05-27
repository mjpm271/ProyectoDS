import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
//import App from './App';
import Create from './pages/create';
import Login from './pages/login2' 
import Plantilla from './pages/plantilla';
import Read from './pages/read';
import Cards from './pages/cards';
import DefinirCoordinador from './pages/definirCoordinador';
import ReadPersona from './pages/readPersonaID';
import reportWebVitals from './reportWebVitals';
import ActivityList from './pages/actividades'
import PlanList from './pages/plan';
import Actividad from './pages/actividad';
import CrearEquipoGuia from './pages/crearEquipoGuia';
import ConsultarMiembros  from './pages/consultarMiembros';
import InicioProfesor from './pages/inicioProfesor';
import AgregarProfesor from './pages/agregarProfesor';
import ModificarProfesor from './pages/modificarProfesor';
import AgregarProfesorEquipo from './pages/agregarProfesorEquipo';
import ConsultarMiembrosEquipo from './pages/consultarMiembrosEquipo';
import BuscarProfesor from './pages/buscarProfesor';
import InhabilitarProfesor from './pages/inhabilitarProfesor';
import ModificarProfesorEquipo from './pages/modificarProfesorEquipo';
import BuscarProfesorEquipo from './pages/buscarProfesorEquipo';
import CrearEvidencia from './pages/crearEvidencia';
import VerEvidencias from './pages/verEvidencias';
import CrearObservacion from './pages/createObservacion';
import VerObservacion from './pages/verObservacion';
import RealizarActividad from './pages/realizarActividad';
import CancelarActividad from './pages/cancelarActividad';
import ModificarPerfil from './pages/actualizarPerfil';
import InicioCoordinador from './pages/InicioCoordinador';
import CrearActividad from './pages/crearActividad';
import VerResponsables from './pages/verResponsables';
import ModificarActividad from './pages/modificarActividad';
import EliminarActividad from './pages/eliminarActividad';
import SiguienteActividad from './pages/SiguienteActividad';
import CambioContra from './pages/cambioContra';
import CrearPlan from './pages/crearPlan';
import VerPlan from './pages/verPlan';
import ModificarPlan from './pages/modificarPlan';
import DefinirResponsable from './pages/definirResponsable';
import VerEstudiantes from './pages/verEstudiantes';
import ModificarEstudiante from './pages/modificarEstudiantes';
import EjemploComentario from './pages/ejemploComentarios';
import Comments from './comentarios/Comments';
import VerActividad from './pages/verActividad';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>

        <Route path="/ReadPersona" element={<ReadPersona />}/>
        <Route path="/Cards" element={<Cards />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/plantilla" element={<Plantilla />}/>
        
        {/*Asistente Administrativo */}
        <Route path="/crearEquipoGuia" element={<CrearEquipoGuia />}/>
        <Route path="/definirCoordinador" element={<DefinirCoordinador />}/>
        <Route path="/agregarProfesorEquipo" element={<AgregarProfesorEquipo />}/>
        <Route path="/agregarProfesor" element={<AgregarProfesor />}/>
        <Route path="/consultarMiembrosEquipo" element={<ConsultarMiembrosEquipo />}/>
        <Route path="/buscarProfesor" element={<BuscarProfesor />}/>
        <Route path="/inhabilitarProfesor" element={<InhabilitarProfesor />}/>
        <Route path="/modificarProfesorEquipo" element={<ModificarProfesorEquipo />}/>
        <Route path="/buscarProfesorEquipo" element={<BuscarProfesorEquipo />}/>
        <Route path="/SiguienteActividad" element={<SiguienteActividad />}/>
        <Route path="/modificarProfesor/:Carnet" elemnt={<ModificarProfesor/>}/>

        {/*PROFESOR */}
        <Route path="/IncioProfesor" element={<InicioProfesor />} />
        <Route path="/planList" element={<PlanList />} />
        <Route path="/planList/plan/:planId" element={<ActivityList />} />
        <Route path="/planList/plan/:planId/activity/:activityId" element={<Actividad />} />
        <Route path="/comentario" element={<EjemploComentario />}/>
        <Route path="/Comment" element={<Comments />}/>
        <Route path="/modificarPerfil/:id" element={<ModificarPerfil />} />        
        <Route path="/ConsultarMiembros" element={<ConsultarMiembros />}/>
        <Route path="/cambiarContra/:id" element={<CambioContra />} />      
        <Route path="/crearPlan" element={<CrearPlan />} /> 
        <Route path="/verEstudiante" element={<VerEstudiantes />}/>
        <Route path="/modificarEstudiante/:Carnet" element={<ModificarEstudiante />}/>

       {/*Coordinador */}
       <Route path="/verActividad" element={<VerActividad />}/>
        <Route path="/realizarActividad" element={<RealizarActividad />}/>
        <Route path="/crearEvidencia" element={<CrearEvidencia />}/>
        <Route path="/verEvidencias" element={<VerEvidencias />}/>
        <Route path="/cancelarActividad" element={<CancelarActividad />}/>
        <Route path="/createObservacion" element={<CrearObservacion />}/>
        <Route path="/verObservacion" element={<VerObservacion/>}/>
        <Route path="/crearActividad" element={<CrearActividad />}/>
        <Route path="/verResponsables" elemnt={<VerResponsables/>}/>
        <Route path="/InicioCoordinador" element={<InicioCoordinador />} />
        <Route path="/modificarActividad/:IDactividad" element={<ModificarActividad />}/>
        <Route path="/eliminarActividad" element={<EliminarActividad />}/>
        <Route path="/verPlan" element={<VerPlan />}/>
        <Route path="/modificarPlan/:IDPlan" element={<ModificarPlan />}/>
        <Route path="/definirResponsable" element={<DefinirResponsable />}/>

      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
