import NavBar from '../components/NavBar2';
import { useLocation, Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from 'semantic-ui-react';

export default function Notificaciones() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
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
    }, []);


  const getIconName = (Visto) => {
    if (Visto === 1) {
      return 'bell';
    } else {
      return 'bell outline';
    } 
  };

  return (
    <div>
        <NavBar Persona={{Persona}}/>
            <div  className="container" >
                <h1 >Buzon Notificaciones</h1>
                
                <List divided relaxed>
                {items.map((item, index) => (
                    <List.Item key={index}>
                    <List.Icon
                        name={getIconName(item.Visto)} // Cambiar por visto
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
            </div>
    </div>  
  );
};

