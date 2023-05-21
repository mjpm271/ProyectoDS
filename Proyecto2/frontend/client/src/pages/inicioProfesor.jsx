import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useLocation , useParams} from 'react-router-dom';
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
        {/* {info.map((infor) => (
            <p>{infor.NombreCompleto}</p>
        ))} */}
        <p>{Persona}</p>
        <p>{info.NombreCompleto}</p>
        
        
        
        </div>
        </section>
    </div>    
    );
    };