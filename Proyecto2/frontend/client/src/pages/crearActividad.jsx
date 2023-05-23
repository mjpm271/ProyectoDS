import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function CrearActividad() {
    const [Nombre, setNombre] = useState();
    const [Semana, setSemana] = useState();
    const [Fecha, setFecha] = useState(new Date());
    const [Cantidaddiasprevios, setCantidaddiasprevios] = useState();
    const [Cantidaddiasrequeridos, setCantidaddiasrequeridos] = useState();
    const [FechaPublicacion, setFechaPublicacion] = useState(new Date());
    const [Linkreunion, setLinkreunion] = useState();
    const [Afiche, setAfiche] = useState();
    const [IDmodalidad, setModalidad] = useState();
    const [IDtipoActividad, setIDtipoActividad] = useState();
    const [IDtipoEstado, setIDtipoEstado] = useState();
    const [IDplanTrabajo, setIDplanTrabajo] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/coordinador/CrearActividad', {
            Nombre:Nombre,
            Semana:Semana,
            Fecha:null,
            Cantidaddiasprevios:Cantidaddiasprevios,
            Cantidaddiasrequeridos:Cantidaddiasrequeridos,
            FechaPublicacion:null,
            Linkreunion:Linkreunion,
            Afiche:Afiche,
            IDmodalidad:IDmodalidad,
            IDtipoActividad:IDtipoActividad,
            IDtipoEstado:IDtipoEstado,
            IDplanTrabajo:IDplanTrabajo
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

        // fetch('http://localhost:4000/ejemplo/asistente/CrearActividad',{
        //     method : 'post',
        //     mode: 'cors',
        //     body: formData,
        //     headers: { "Content-Type": "multipart/form-data" }
        // })

        //axios.post(`http://localhost:4000/ejemplo/asistente/CrearActividad`,{ID,Semana,Fecha,Cantidaddiasprevios,Cantidaddiasrequeridos,Fechapublicacion,IDmodalidad,IDtipoActividad})
        console.log(typeof Nombre);
        console.log(Semana);
        console.log(typeof Semana);
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
                    <label>Semana </label>
                    <input placeholder='Semana' onChange={(e) => setSemana(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Fecha</label>
                    <input placeholder='Fecha' onChange={(e) => setFecha(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Cantidaddiasprevios</label>
                    <input placeholder='Cantidaddiasprevios' onChange={(e) => setCantidaddiasprevios(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Cantidaddiasrequeridos</label>
                    <input placeholder='Cantidaddiasrequeridos' onChange={(e) => setCantidaddiasrequeridos(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Fechapublicacion</label>
                    <input placeholder='FechaPublicacion' onChange={(e) => setFechaPublicacion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Linkreunion</label>
                    <input placeholder='Linkreunion' onChange={(e) => setLinkreunion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Afiche</label>
                    <input placeholder='Afiche' onChange={(e) => setAfiche(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>IDmodalidad</label>
                    <input placeholder='IDmodalidad' onChange={(e) => setModalidad(parseInt( e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>IDtipoActividad</label>
                    <input placeholder='IDtipoActividad' onChange={(e) => setIDtipoActividad(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>IDtipoEstado</label>
                    <input placeholder='IDtipoEstado' onChange={(e) => setIDtipoEstado(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>IDplanTrabajo</label>
                    <input placeholder='IDplanTrabajo' onChange={(e) => setIDplanTrabajo(parseInt(e.target.value))}/>
                </Form.Field>

                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}
