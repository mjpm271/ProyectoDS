import NavBar from '../components/NavBar2';
import { useLocation, Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Button } from 'semantic-ui-react';

export default function Chats() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const navigate = useNavigate();
    const Persona = location.state;
    const info = JSON.parse(Persona)
    const id = info.IDpersona
    /* IMPORTANTE PASAR */
    const [items, setitems] = useState([])
    useEffect(() => {
        axios.post(`http://localhost:4000/index/VerNotificacionesUsuario`, {
          IDpersona:id
        }
        , {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        )
            .then((response) => {
                console.log(response.data)
                setitems(response.data);
            })
    }, [id]);

    return (
        <div>
            <NavBar Persona={{Persona}}/>
                <div  className="container" >
                    <h1 >Buzon Notificaciones</h1>
                    
                    <List divided relaxed>
                    {items.map((item, index) => (
                        <List.Item key={index}>
                        <List.Icon
                            name= 'comments outline' // Cambiar por visto
                            size="large"
                            verticalAlign="middle"
                        />
                        <List.Content>
                            <List.Header as={Link} to={`/Notificacion/${item.IDnotificacion}`} state= {Persona}>
                            {item.Titulo}
                            </List.Header>
                            
                        </List.Content>
                        </List.Item>
                    ))}
                    </List>
                    {/* <Button onClick={postData} type='Submit'>Borrar Buzon</Button> */}
                </div>
        </div>  
      );

}