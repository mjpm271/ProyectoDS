import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function CrearEquipoGuia() {
    const [Nombre, setNombre] = useState();
    const showAlert = (Result) => {
      switch (Result){
        case 1:
          window.alert('El nombre ya existe');
          break 
        default:
          window.alert('ha Creado el equipo Guia')
          
    }};
    const postData = () => {
        
        axios.post('http://localhost:4000/asistente/CrearEquipoGuia', {
            Nombre:Nombre
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              console.log(response.data);
              showAlert(response.data[0][""])
            }).catch(error => {
                console.log(error)
            });

        // fetch('http://localhost:4000/ejemplo/asistente/AgregarProfesor',{
        //     method : 'post',
        //     mode: 'cors',
        //     body: formData,
        //     headers: { "Content-Type": "multipart/form-data" }
        // })

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,Nombre,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})
    }
    return (
        <div>
            <Navbar />
            <div className='container'>
            <h1>Crear Equipo Guia</h1>
            
            <Form className="create-form">
                <Form.Field>
                    <label>Nombre </label>
                    <input placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
        </div>
    )
}
