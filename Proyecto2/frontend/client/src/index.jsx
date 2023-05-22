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
import AgregarProfesorEquipo from './pages/agregarProfesorEquipo';
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

        {/*PROFESOR */}
        <Route path="/IncioProfesor" element={<InicioProfesor />} />
        <Route path="/planList" element={<PlanList />} />
        <Route path="/planList/plan/:planId" element={<ActivityList />} />
        <Route path="/planList/plan/:planId/activity/:activityId" element={<Actividad />} />
        
        <Route path="/ConsultarMiembros" element={<ConsultarMiembros />}/>
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
