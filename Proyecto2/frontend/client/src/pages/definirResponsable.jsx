import axios from 'axios';
import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';
import { Button,  Form} from 'semantic-ui-react'
// import Navbar from "../components/Navbar"
import NavBar from '../components/NavBar2';
import Footer from '../components/Footer';

export default function DefinirResponsable() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    // const info = JSON.parse(Persona)
    // const id = info.Carnet
    /* IMPORTANTE PASAR */
    const [Carnet, setCarnet] = useState();
    const showAlert = () => {
          window.alert('ha asignado responsable con exito')
    };
    const postData = () => {
        
        axios.post('http://localhost:4000/coordinador/DefinirResponsable', {
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
              showAlert()
            }).catch(error => {
                console.log(error)
            });


    }
    return (
      <div>
      <NavBar Persona={{Persona}}/>
            <div className='container'>
              <h1>Definir Responsable</h1>
              <p></p>
            <Form className="create-form">
                <Form.Field>
                    <label>Carnet </label>
                    <input placeholder='Carnet' onChange={(e) => setCarnet(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
            </div>
        </div>
    )
}

