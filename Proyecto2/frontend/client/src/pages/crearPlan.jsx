import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function CrearPlan() {
    const [Nombre, setNombre] = useState();
    const [Abreviacion, setAbreviacion] = useState();
    const [IDcoordinador, setIDcoordinador] = useState();
    const navigate = useNavigate();
    const postData = () => {
        
        axios.post('http://localhost:4000/coordinador/CrearPlan', {
            Nombre:Nombre,
            Abreviacion:Abreviacion,
            IDcoordinador:IDcoordinador
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
                    <label>IDcoordinador </label>
                    <input placeholder='IDcoordinador' onChange={(e) => setIDcoordinador(parseInt(e.target.value))}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}

