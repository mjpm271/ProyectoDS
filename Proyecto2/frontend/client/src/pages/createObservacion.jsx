import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import DateTimePicker from 'react-datetime-picker'
import Footer from '../components/Footer';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export default function CrearObservacion() {
    const [Fecha, setFecha] = useState(new Date());
    const [Observacion, setObservacion] = useState();
    const [IDactividad, setIDactividad] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/coordinador/CrearObservacion', {
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
                <div>
                    <label>Fecha</label>
                    <DateTimePicker onChange={setFecha} value={Fecha} />
                </div>
            <Form className="create-form">

                <Form.Field>
                    <label>Observacion </label>
                    <input placeholder='Observacion' onChange={(e) => setObservacion(e.target.value)}/>
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
