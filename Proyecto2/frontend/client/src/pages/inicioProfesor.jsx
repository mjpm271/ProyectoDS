import React, { useState , useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useLocation , useParams} from 'react-router-dom';

export default function InicioProfesor() {
    const location = useLocation();
    const Persona = location.state;
    const {info, setInfo} = useState();

    console.log(Persona)
    
    
    return(
        <div>
        <section>
        <div className="container">
        
        <h1>Welcome!</h1>
        {/* {info.map((infor) => (
            <p>{infor.NombreCompleto}</p>
        ))} */}
        <p>{Persona}</p>
        
        
        
        </div>
        </section>
    </div>    
    );
    };