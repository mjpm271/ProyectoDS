import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function CrearPlan() {
        /* IMPORTANTE PASAR */
        const location = useLocation();
        const Persona = location.state;
        /* IMPORTANTE PASAR */
    const [Nombre, setNombre] = useState();
    const [Abreviacion, setAbreviacion] = useState();
    const [IDequipoGuia, setIDequipoGuia] = useState();
    const navigate = useNavigate();
    const postData = () => {
        
        axios.post('http://localhost:4000/coordinador/CrearPlan', {
            Nombre:Nombre,
            Abreviacion:Abreviacion,
            IDequipoGuia:IDequipoGuia
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              console.log(response.data);
              navigate('/InicioCoordinador')
            }).catch(error => {
                console.log(error)
            });


    }
    return (
        <div>
            <Navbar />
            <Form className="create-form">
                <Form.Field>
                    <label>Nombre </label>
                    <input placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Abreviacion </label>
                    <input placeholder='Abreviacion' onChange={(e) => setAbreviacion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>IDequipoGuia </label>
                    <input placeholder='IDequipoGuia' onChange={(e) => setIDequipoGuia(parseInt(e.target.value))}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}

