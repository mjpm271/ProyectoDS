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
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/ReadPersona" element={<ReadPersona />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/plantilla" element={<Plantilla />}/>
        <Route path="/DefinirCoordinador" element={<DefinirCoordinador />}/>
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
