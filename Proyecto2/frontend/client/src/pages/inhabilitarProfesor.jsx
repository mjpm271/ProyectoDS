import axios from 'axios';
import React, { useState  } from 'react';
import { useLocation} from 'react-router-dom';
import { Button,  Form} from 'semantic-ui-react'

import NavBar from '../components/NavBar2';
import Footer from '../components/Footer';

export default function InhabilitarProfesor() {
      /* IMPORTANTE PASAR */
      const location = useLocation();
      const Persona = location.state;
      /* IMPORTANTE PASAR */
    const [Carnet, setCarnet] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.put('http://localhost:4000/asistente/InhabilitarProfesor', {
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

        // fetch('http://localhost:4000/ejemplo/asistente/AgregarProfesor',{
        //     method : 'post',
        //     mode: 'cors',
        //     body: formData,
        //     headers: { "Content-Type": "multipart/form-data" }
        // })

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,NombreCompleto,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})
        console.log(typeof Carnet);
    }
    return (
      <div>
      <NavBar Persona={{Persona}}/>
            <Form className="create-form">
                <Form.Field>
                    <label>Carnet </label>
                    <input placeholder='Carnet' onChange={(e) => setCarnet(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}
