import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useLocation , Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function InicioAsistente() {
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
                <Link to={'/agregarProfesor'}state= {Persona}>
                    <button>Agregar Profesor</button>
                </Link>

                <Link to={'/buscarProfesor'}state= {Persona}>
                    <button>Buscar Profesor</button>
                </Link>
            </li>
            <li>
                <Link to={'/crearEquipoGuia'}state= {Persona}>
                    <button>Crear Equipo Guia</button>
                </Link>
            </li>
            <li>
                <Link to={'/agregarProfesorEquipo'}state= {Persona}>
                    <button>Agregar Profesor al Equipo</button>
                </Link>
            </li>
            <li>
                <Link to={'/consultarMiembrosEquipo'}state= {Persona}>
                    <button>Consultar Miembros de Equipo guia</button>
                </Link>
            </li>
            
            <li>
                <Link to={'/definirCoordinador'}state= {Persona}>
                  {info.Sede === 1 && <button>Definir Coordinador</button>}
                </Link>
            </li>
            <li>
                <Link to={'/cargarEstudiantes'}state= {Persona}>
                  {info.Sede === 1 && <button>Cargar Estudiantes</button>}
                </Link>
            </li>
            <li>
            <Link to={'/planList'}state= {Persona}>
                    <button>Ver Planes de Trabajo</button>
                </Link>
            </li>
           
            <li>
            <Link to={'/SiguienteActividad'}state= {Persona}>
                    <button>Siguiente Actividad </button>
                </Link>
            </li>
          </ul>
        </nav>
        </section>
    </div>    
    );
    };
