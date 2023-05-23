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
    const [IDtipoAfiche, setIDtipoAfiche] = useState();
    const [IDtipoEstado, setIDtipoEstado] = useState();
    const [IDplanTrabajo, setIDplanTrabajo] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/coordinador/CrearActividad', {
            Nombre:Nombre,
            Semana:Semana,
            Fecha:Fecha,
            Cantidaddiasprevios:Cantidaddiasprevios,
            Cantidaddiasrequeridos:Cantidaddiasrequeridos,
            FechaPublicacion:FechaPublicacion,
            Linkreunion:Linkreunion,
            Afiche:Afiche,
            IDmodalidad:IDmodalidad,
            IDtipoActividad:IDtipoActividad,
            IDtipoAfiche: IDtipoAfiche,
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
        console.log(typeof Semana);
        console.log(Semana);
        console.log(typeof Nombre);
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
                    <label>Cantidad dias previos</label>
                    <input placeholder='Cantidad dias previos' onChange={(e) => setCantidaddiasprevios(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Cantidad dias requeridos</label>
                    <input placeholder='Cantidad dias requeridos' onChange={(e) => setCantidaddiasrequeridos(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Fecha Publicacion</label>
                    <input placeholder='Fecha Publicacion' onChange={(e) => setFechaPublicacion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Link reunion</label>
                    <input placeholder='Link reunion' onChange={(e) => setLinkreunion(e.target.value)}/>
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
                    <label>IDtipoAfiche</label>
                    <input placeholder='IDtipoAfiche' onChange={(e) => setIDtipoAfiche(parseInt(e.target.value))}/>
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
