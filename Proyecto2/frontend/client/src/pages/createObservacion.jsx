import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function CrearObservacion() {
    const [Fecha, setFecha] = useState();
    const [Observacion, setObservacion] = useState();
    const [IDactividad, setIDactividad] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/profesorCoordinador/CrearObservacion', {
            Fecha:Fecha,
            Observacion:Observacion,
            IDactividad:IDactividad,
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

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,IDactividad,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})
        console.log(typeof Observacion);
        console.log(IDactividad);
        console.log(typeof Sede);
    }

    const convert2base64 = e =>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend =() =>{
            setFecha(reader.result.toString())
        }
        reader.readAsDataURL(file);
    }

 
    return (
        <div>
            <Navbar />
            <Form className="create-form">
                <Form.Field>
                    <label>Fecha</label>
                    <input placeholder='Fecha' onChange={(e) => setFecha(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Observacion </label>
                    <input placeholder='Observacion' onChange={(e) => setObservacion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>IDactividad </label>
                    <input placeholder='IDactividad' onChange={(e) => setIDactividad(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}