import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useLocation , Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function InicioProfesor() {
    const location = useLocation();
    const Persona = location.state;

    
    const info = JSON.parse(Persona)
    const id = info.Carnet
    console.log('ID: ', id)
    
    
    return(
        <div>
        <Navbar id={id}/>   
        <section>
        <div className="container">
        
        <h1>Welcome! {info.NombreCompleto}</h1>
        {/* <p>{Persona}</p>
        <p>{info.NombreCompleto}</p> */}
        </div>
            <nav>
          <ul>
          <li>
                <Link to={'/consultarMiembrosEquipo'}state= {Persona}>
                    <button>Consultar Miembros de Equipo guia</button>
                </Link>
            </li>
            
            <li>
                <Link to={'/verEstudiante'}state= {Persona}>
                    <button>Estudiantes</button>
                </Link>
            </li>
            <li>
            <Link to={'/planList'}state= {Persona}>
                    <button>Ver Planes de Trabajo</button>
                </Link>
            </li>
            
          </ul>
        </nav>
        </section>
    </div>    
    );
    };