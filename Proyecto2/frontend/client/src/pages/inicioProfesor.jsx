import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useLocation , Link} from 'react-router-dom';
import { Button} from 'semantic-ui-react'

import NavBar from '../components/NavBar2';

export default function InicioProfesor() {
    const location = useLocation();
    const Persona = location.state;

    
    const info = JSON.parse(Persona)
    const id = info.Carnet
    console.log('Persona: ', Persona)
    
    
    return(
        <div>
        <NavBar Persona={{Persona}}/>   
        <section>
        <div className="container">
        
        <h1>Welcome! {info.NombreCompleto}</h1>
        <h1></h1>
        </div>
        <div className="button-container">
            <div className="column1">
                <Link to={'/consultarMiembrosEquipo'}state= {Persona}>
                    <Button type='button' size='large'>Consultar Miembros de Equipo guia</Button>
                </Link>
                
                <Link to={'/verEstudiante'}state= {Persona}>
                    <Button type='button' size='large'>Estudiantes</Button>
                </Link>
                <Link to={'/planList'}state= {Persona}>
                    <Button type='button' size='large'>Ver Planes de Trabajo</Button>
                </Link>
                <Link to={'/IniciarChat'} state={Persona}>
                     <Button type='button' size='large'>Mensajeria instantanea</Button>
                </Link>
            </div>
        </div>    

        </section>
    </div>    
    );
    };