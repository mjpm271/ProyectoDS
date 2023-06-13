import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table} from 'semantic-ui-react'
import { useLocation, Link } from 'react-router-dom';
import NavBar from '../components/NavBar2';
export default function ActividadesPublicadas() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    /* IMPORTANTE PASAR */    

    const [actividades, setActividades] = useState([])
    useEffect(() => {
      axios.get(`http://localhost:4000/estudiante/VerActividadesPublicadas`)
          .then((response) => {
              console.log(response.data)
              setActividades(response.data);
          })
  }, []);


    return (
        <div>
        <NavBar Persona={{Persona}}/>
        <div className="container">
            <h1>Actividades Publicadas</h1>
            
            <div> 
            
            <Table textAlign='center' singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID Actividad</Table.HeaderCell>
                        <Table.HeaderCell>Nombre </Table.HeaderCell>

                        <Table.HeaderCell>Fecha de la Actividad</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {actividades.map((actividad) => {
                        
                        return (
                            
                            <Table.Row>

                                <Table.Cell>{actividad.IDactividad}</Table.Cell>
                                <Table.Cell>{actividad.Nombre}</Table.Cell>
                                <Table.Cell>{actividad.Fecha}</Table.Cell> 
                               
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                </div>
        </div>
        </div>
    )
}