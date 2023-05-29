import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function DefinirCoordinador() {
    const [Carnet, setCarnet] = useState();
    const [Nombre, setNombre] = useState();
    const showAlert = (Result) => {
      switch (Result){
        case 1:
          window.alert('No pertenece a ningun equipo');
          break 
        case 2:
          window.alert('Solo puede existir un coordinador por equipo');
          break 
        case 3:
          window.alert('El profesor debe estar en el equipo elegido');
          break 
        default:
          window.alert('Se ha asignado un coordinador')
          
    }};
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.put('http://localhost:4000/asistente/DefinirCoordinador', {
            Carnet:Carnet,
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

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,NombreCompleto,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})
        console.log(typeof Carnet);
    }
    return (
        <div>
            <Navbar />
          <div className="container">
                <h1>Definir Coordinador</h1>
            <Form className="create-form">
                <Form.Field>
                    <label>Carnet </label>
                    <input placeholder='Carnet' onChange={(e) => setCarnet(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nombre de equipo </label>
                    <input placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
          </div>
        </div>
    )
}
