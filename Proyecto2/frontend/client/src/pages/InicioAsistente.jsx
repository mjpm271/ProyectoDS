import React from 'react';
// import { Link } from 'react-router-dom';
import { Button} from 'semantic-ui-react'
import { useLocation , Link} from 'react-router-dom';
// import Navbar from '../components/Navbar';
import NavBar from '../components/NavBar2';

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
        <NavBar Persona={{Persona}}/>   
        <section>
        <div className="container">
        
        <h1>Bienvenido! {info.NombreCompleto}</h1>
        {/* <p>{Persona}</p>
        <p>{info.NombreCompleto}</p> */}
        </div>
        <div className="button-container">
        <div className="column1">
            <Link to={'/agregarProfesor'}state= {Persona}>
                <Button type='button' size='large'>Agregar Profesor</Button>
            </Link>
            <Link to={'/buscarProfesor'}state= {Persona}>
                <Button type='button' size='large'>Buscar Profesor</Button>
            </Link>
            <Link to={'/crearEquipoGuia'}state= {Persona}>
                <Button type='button' size='large'>Crear Equipo Guia</Button>
            </Link>
            <Link to={'/agregarProfesorEquipo'}state= {Persona}>
                <Button type='button' size='large'>Agregar Profesor al Equipo</Button>
            </Link>
            <Link to={'/consultarMiembrosEquipo'}state= {Persona}>
                <Button type='button' size='large'>Consultar Miembros Equipo</Button>
            </Link>
            <Link to={'/planList'}state= {Persona}>
                <Button type='button' size='large'>Ver Planes de Trabajo</Button>
            </Link>
            <Link to={'/SiguienteActividad'}state= {Persona}>
                <Button type='button' size='large'>Siguiente Actividad </Button>
                </Link>
            <Link to={'/cargarEstudiantes'}state= {Persona}>
                {info.Sede === 1 && <Button type='button' size='large'>Cargar Estudiantes</Button>}
            </Link>
            <Link to={'/definirCoordinador'}state= {Persona}>
                  {info.Sede === 1 && <Button type='button' size='large'>Definir Coordinador</Button>}
            </Link>
        </div>
        </div>
            {/* <nav>
          <ul>
            <li>
                
            </li>
            <li>

            </li>
            <li>

            </li>
            <li>
                
            </li>
            
            <li>
                
            </li>
            <li>
                
            </li>
            <li>

            </li>
           
            <li>

            </li>
          </ul>
        </nav> */}
        </section>
    </div>    
    );
    };
