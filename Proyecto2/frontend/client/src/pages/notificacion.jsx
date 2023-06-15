import NavBar from '../components/NavBar2';
import { useLocation, useParams, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Segment , List, Button, ListDescription} from 'semantic-ui-react';
import axios from 'axios';
export default function Notificacion() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    const info = JSON.parse(Persona)
    const id = info.IDpersona
    /* IMPORTANTE PASAR */
    const { IDNotificacion } = useParams();
    const [items, setitems] = useState([])

    useEffect(() => {
        axios
        .post(
            'http://localhost:4000/index/VerNotificacion',
            { IDnotificacion: IDNotificacion },
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
    }, [IDNotificacion]);

const postData = () => {

        axios.post('http://localhost:4000/notificacion/BorrarNotificacion', {
          IDnotificacion: IDNotificacion,
          IDpersona:id

          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              console.log('entre');
            }).catch(error => {
                console.log(error)
            });
}
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
                        <ListDescription>- {item.Fecha} - </ListDescription>
                        <List.Content>
                            {item.Contenido}
                            
                        </List.Content>
                    </List.Content>
                    </List.Item>
                ))}
                </List>
                <Button onClick={postData} type='Submit'>Borrar Notificacion</Button>
                </Segment>
            </div>
        </div>    
    )
}
