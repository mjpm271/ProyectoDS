import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { useLocation, useParams, useNavigate} from 'react-router-dom';


export default function HabilitarProfesor() {
      /* IMPORTANTE PASAR */
      const location = useLocation();
      const Persona = location.state;
      /* IMPORTANTE PASAR */

    const { Carnet } = useParams();
    const navigate = useNavigate();
    // const [APIData, setAPIData] = useState([]);
    useEffect(() => {
      axios.put('http://localhost:4000/asistente/InhabilitarProfesorEquipo', {
            Carnet:Carnet
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              console.log(response.data);
            }).catch(error => {
                console.log(error)
            });
            navigate('/consultarMiembrosEquipo',{ state: Persona });
    })

}
