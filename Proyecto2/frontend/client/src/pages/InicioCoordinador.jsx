import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useLocation , Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function InicioCoordinador() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    /* IMPORTANTE PASAR */
    
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
            <Link to={'/crearPlan'} state= {Persona}>
                    <button>Crear Plan de Trabajo</button>
                </Link>
            </li>
            <li>
            <Link to={'/planList'}state= {Persona}>
                    <button>Ver Planes de Trabajo</button>
                </Link>
            </li>
            <li>
            <Link to={'/verPlan'}state= {Persona}>
                    <button>Modificar Plan de Trabajo</button>
                </Link>
            </li>
            <li>
            <Link to={'/crearActividad'}state= {Persona}>
                    <button>Crear Actividad </button>
                </Link>
            </li>
            <li>
            <Link to={'/verActividad'}state= {Persona}>
                    <button>Modificar Actividad </button>
                </Link>
            </li>
          </ul>
        </nav>
        </section>
    </div>    
    );
    };
