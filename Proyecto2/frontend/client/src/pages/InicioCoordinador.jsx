import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { Button} from 'semantic-ui-react'
import { useLocation , Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import NavBar from '../components/NavBar2';

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
        
        <h1>Bienvenido! {info.NombreCompleto}</h1>
        {/* <p>{Persona}</p>
        <p>{info.NombreCompleto}</p> */}
        </div>

        <div className="button-container">
        <div className="column1">
            <Link to={'/consultarMiembrosEquipo'}state= {Persona}>
                <Button type='button' size='large'>Consultar Miembros de Equipo guia</Button>
            </Link>
            <Link to={'/verEstudiante'}state= {Persona}>
                <Button type='button' size='large'>Estudiantes</Button>
            </Link>
            <Link to={'/crearPlan'} state= {Persona}>
                <Button type='button' size='large'>Crear Plan de Trabajo</Button>
            </Link>
            
            <Link to={'/planList'}state= {Persona}>
                <Button type='button' size='large'>Ver Planes de Trabajo</Button>
            </Link>
            
            <Link to={'/verPlan'}state= {Persona}>
                <Button type='button' size='large'>Modificar Plan de Trabajo</Button>
            </Link>
            
            <Link to={'/crearActividad'}state= {Persona}>
                <Button type='button' size='large'>Crear Actividad </Button>
            </Link>
            
            <Link to={'/verActividad'}state= {Persona}>
                <Button type='button' size='large'>Modificar Actividad </Button>
            </Link>
            
          </div>
        </div>
            
        </section>
    </div>    
    );
    };
