import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function DefinirResponsable() {
    /* IMPORTANTE PASAR */
    // const location = useLocation();
    // const Persona = location.state;
    // const info = JSON.parse(Persona)
    // const id = info.Carnet
    /* IMPORTANTE PASAR */
    const [Carnet, setCarnet] = useState();
    const showAlert = (Result) => {
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
              showAlert(0)
            }).catch(error => {
                console.log(error)
            });


    }
    return (
        <div>
            <Navbar />
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

