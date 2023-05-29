import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import NavBar from '../components/NavBar2';
import Footer from '../components/Footer';

export default function AgregarProfesorEquipo() {
    const [Nombre, setNombre] = useState();
    const [Carnet, setCarnet] = useState();
    const Habilitado = true;
    const showAlert = (Result) => {
      switch (Result){
        case 1:
          window.alert('Seleccione alguien que no sea Coordinador');
          break 
        case 2:
          window.alert('El equipo ya se encuentra completo');
          break 
        case 3:
          window.alert('Inserte de Sede Distinta');
          break
        default:
          window.alert('ha insertado al profesor en el equipo')
          
    }};
    const postData = () => { 
        axios.post('http://localhost:4000/asistente/AgregarProfesorEquipo', {
            Nombre:Nombre,
            Carnet:Carnet,
            Habilitado:true
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              console.log(response.data[0][""]);
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

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,Carnet,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})

    }
 
    return (
        <div>
            <Navbar />
          <div className="container">
                <h1>Agregar profesor a un equipo</h1>
            <Form className="create-form">
                <Form.Field>
                    <label>Nombre </label>
                    <input placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
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
