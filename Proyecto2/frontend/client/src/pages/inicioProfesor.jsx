import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useLocation , Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function InicioProfesor() {
    const location = useLocation();
    const Persona = location.state;

    
    const info = JSON.parse(Persona)

    console.log(Persona)
    
    
    return(
        <div>
        <Navbar/>   
        <section>
        <div className="container">
        
        <h1>Welcome!, {info.NombreCompleto}</h1>
        {/* <p>{Persona}</p>
        <p>{info.NombreCompleto}</p> */}
        </div>
            <nav>
          <ul>
            <li>
                <Link to={'/ConsultarMiembros'}>
                    <button>Consultar Equipo guia</button>
                </Link>
            </li>
            
            <li>
                <Link to={'/read'}>
                    <button>Consultar Estudiantes</button>
                </Link>
            </li>
            <li>
                <Link to={'/read'}>
                    <button>Modificar Estudiantes</button>
                </Link>
            </li>
            <li>
            <Link to={'/planList'}>
                    <button>Planes de Trabajo</button>
                </Link>
            </li>
          </ul>
        </nav>
        </section>
    </div>    
    );
    };