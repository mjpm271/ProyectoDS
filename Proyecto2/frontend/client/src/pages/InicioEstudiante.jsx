import React from 'react';
// import { Link } from 'react-router-dom';
import { Button} from 'semantic-ui-react'
import { useLocation , Link} from 'react-router-dom';
// import Navbar from '../components/Navbar';
import NavBar from '../components/NavBar2';

export default function InicioEstudiante() {
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
            
            <Link to={'/ActividadesPublicadas'}state= {Persona}>
                <Button type='button' size='large'>Calendario de Actividades</Button>
            </Link>
            <Link to={'/SiguienteActividad'}state= {Persona}>
                <Button type='button' size='large'>Siguiente Actividad </Button>
                </Link>
            <Link to={'/Chats'}state= {Persona}>
                <Button type='button' size='large'>Ver Chats </Button>
            </Link>
        </div>
        </div>

        </section>
    </div>    
    );
    };
