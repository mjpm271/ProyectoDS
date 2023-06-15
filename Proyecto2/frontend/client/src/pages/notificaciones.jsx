import NavBar from '../components/NavBar2';
import { useLocation, Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Button } from 'semantic-ui-react';

export default function Notificaciones() {
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

const postData = () => {

        axios.post('http://localhost:4000/notificacion/BorrarBuzon', {
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

  const getIconName = (visto) => {
    console.log(visto)
    if (visto === false || visto === null) {
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
                        name={getIconName(item.visto)} // Cambiar por visto
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
                <Button onClick={postData} type='Submit'>Borrar Buzon</Button>
            </div>
    </div>  
  );
};

