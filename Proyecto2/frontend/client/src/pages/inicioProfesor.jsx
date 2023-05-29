import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useLocation , Link} from 'react-router-dom';
import { Button} from 'semantic-ui-react'
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
        <h1></h1>
        </div>
        <div className="button-container">
            <div className="column">
                <Link to={'/consultarMiembrosEquipo'}state= {Persona}>
                    <Button type='button' size='large'>Consultar Miembros de Equipo guia</Button>
                </Link>
                
                <Link to={'/verEstudiante'}state= {Persona}>
                    <Button type='button' size='large'>Estudiantes</Button>
                </Link>
                <Link to={'/planList'}state= {Persona}>
                    <Button type='button' size='large'>Ver Planes de Trabajo</Button>
                </Link>
            </div>
        </div>    

        </section>
    </div>    
    );
    };