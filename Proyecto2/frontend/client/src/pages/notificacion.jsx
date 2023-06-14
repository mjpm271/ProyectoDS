import NavBar from '../components/NavBar2';
import { useLocation, useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Segment , List, Button, ListDescription} from 'semantic-ui-react';
import axios from 'axios';
export default function Notificacion() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    const info = JSON.parse(Persona)
    const id = info.Carnet
    /* IMPORTANTE PASAR */
    const { IDnotificacion } = useParams();
    const [items, setitems] = useState([])

    useEffect(() => {
        axios
        .post(
            'http://localhost:4000/index/VerNotificacion',
            { IDnotificacion: IDnotificacion },
            {
            headers: {
                'Content-Type': 'application/json'
            }
            }
        )
        .then((response) => {
            const informacion = response.data[0];
            setitems(response.data);
        });
    }, [IDnotificacion]);

    return (
        <div>
        <NavBar Persona={{Persona}}/>
            <div  className="container" >
                <h1>Notificacion</h1>
                <p></p>
                <Segment>
                <List celled >
                {items.map((item, index) => (
                    <List.Item key={index}>
                    
                    <List.Content>
                        <List.Header >
                        {item.Titulo}
                        </List.Header>
                        <ListDescription>{item.Fecha} - {item.Emisor}</ListDescription>
                        <List.Content>
                            {item.Contenido}
                            
                        </List.Content>
                    </List.Content>
                    </List.Item>
                ))}
                </List>
                </Segment>
            </div>
        </div>    
    )
}