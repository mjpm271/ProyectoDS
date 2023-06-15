import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import {  useParams , useLocation} from 'react-router-dom';
import NavBar from '../components/NavBar2';
// import Navbar from "../components/Navbar"
import DateTimePicker from 'react-datetime-picker'
import Footer from '../components/Footer';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export default function CrearObservacion() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    const info = JSON.parse(Persona);
        /* IMPORTANTE PASAR */    
    const { actividad } = useParams();
    const [Fecha, setFecha] = useState(new Date());
    const [FechaSistema, setFechaSistema] = useState(new Date());
    const [NombreActividad, setNombreActividad] = useState();
    const [Observacion, setObservacion] = useState();
    const [IDactividad, setIDactividad] = useState();
    const showAlert = (Result) => {
        switch (Result){
            case 1: 
                window.alert('ha insertado la observacion con exito')
                break
            case 2:
                window.alert('Se ha cancelado la actividad con exito')
        }
    };
    // const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.put('http://localhost:4000/coordinador/CancelarActividad',
            {IDactividad: actividad},
            {
            headers: {
                'Content-Type': 'application/json'
            }
            }
        )
            .then((response) => {
                showAlert(2)
            })
    }, [actividad]);

    useEffect(() => {
        axios.post('http://localhost:4000/coordinador/ReadNombreActividad',
            {IDactividad: actividad},
            {
            headers: {
                'Content-Type': 'application/json'
            }
            }
        )
            .then((response) => {
                setNombreActividad(response.data[0].Nombre)
            })
    }, [actividad]);

    useEffect(() => {
        axios.post('http://localhost:4000/notificacion/NotificarCancelacion',
            {IDactividad: actividad,
            IDpersona: info.IDpersona,
            FechaSistema: FechaSistema,
            Nombre: NombreActividad,
            NombreCompleto: info.NombreCompleto},

            {
            headers: {
                'Content-Type': 'application/json'
            }
            }
        )
            .then((response) => {
                console.log(response.data[0].Nombre)
                setNombreActividad(response.data[0].Nombre)
            })
    }, [actividad]);

    const postData = () => {
        
        axios.post('http://localhost:4000/coordinador/CrearObservacion', {
            Fecha:Fecha,
            Observacion:Observacion,
            IDactividad:actividad,
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              console.log(response.data);
              showAlert(1)
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
 
    return (
        <div>
        <NavBar Persona={{Persona}}/>
            <div className='container'>
                <h1>Crear Observacion</h1>
                <div>
                    <label>Fecha</label>
                    <DateTimePicker onChange={setFecha} value={Fecha} />
                </div>
            <Form className="create-form">

                <Form.Field>
                    <label>Observacion </label>
                    <input placeholder='Observacion' onChange={(e) => setObservacion(e.target.value)}/>
                </Form.Field>
                
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
        </div>
    )
}
