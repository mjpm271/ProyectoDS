import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function CrearEvidencia() {
    const [Fotoparticipantes, setFotoparticipantes] = useState();
    const [Linkgrabacion, setLinkgrabacion] = useState();
    const [IDactividad, setIDactividad] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/coordinador/crearEvidencia', {
            Fotoparticipantes:Fotoparticipantes,
            Linkgrabacion:Linkgrabacion,
            IDactividad:IDactividad
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
        console.log(typeof Linkgrabacion);
        console.log(IDactividad);
    }

    const convert2base64 = e =>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend =() =>{
            setFotoparticipantes(reader.result.toString())
        }
        reader.readAsDataURL(file);
    }

 
    return (
        <div>
            <Navbar />
            <Form className="create-form">
                <Form.Field>
                    <label>Foto participantes</label>
                    <input placeholder='Foto participantes' onChange={(e) => setFotoparticipantes(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Link Grabacion </label>
                    <input placeholder='Link Grabacion' onChange={(e) => setLinkgrabacion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>IDactividad </label>
                    <input placeholder='IDactividad' onChange={(e) => setIDactividad(parseInt(e.target.value))}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}
