import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form } from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function Create() {
    const [IDpersona, setIDpersona] = useState();
    const [NombreCompleto, setNombreCompleto] = useState();
    const [Correo, setCorreo] = useState();
    const [Contra, setContra] = useState();
    // const Habilitado = true;
    // const Coordinador = false;
    const [Telefono, setTelefono] = useState();
    const [Sede, setSede] = useState();
    const [IDtipo, setIDtipo] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/ejemplo/AgregarProfesor', {
            IDpersona:IDpersona,
            NombreCompleto:NombreCompleto,
            Correo:Correo,
            Contra:Contra,
            Habilitado:true,
            Coordinador:false,
            Telefono:Telefono,
            Sede:Sede,
            IDtipo:IDtipo
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

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,NombreCompleto,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})
        console.log(typeof IDpersona);
        console.log(NombreCompleto);
        console.log(typeof Sede);
    }
 
    return (
        <div>
            <Navbar />
            <Form className="create-form">
                
                <Form.Field>
                    <label>IDpersona </label>
                    <input placeholder='IDpersona' onChange={(e) => setIDpersona(parseInt( e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>NombreCompleto </label>
                    <input placeholder='NombreCompleto' onChange={(e) => setNombreCompleto(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Correo</label>
                    <input placeholder='Correo' onChange={(e) => setCorreo(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Contra</label>
                    <input placeholder='Contra' onChange={(e) => setContra(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Telefono</label>
                    <input placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)}/>
                </Form.Field>
                {/* <Form.Field>
                    <label>Habilitado</label>
                    <input placeholder='Habilitado' onChange={(e) => setHabilitado(parseInt( e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Coordinador</label>
                    <input placeholder='Coordinador' onChange={(e) => setCoordinador(parseInt( e.target.value))}/>
                </Form.Field> */}
                <Form.Field>
                    <label>Sede</label>
                    <input placeholder='Sede' onChange={(e) => setSede(parseInt( e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>IDtipo</label>
                    <input placeholder='IDtipo' onChange={(e) => setIDtipo(parseInt( e.target.value))}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}