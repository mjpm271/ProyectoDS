import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function AgregarProfesor() {
    const [Carnet, setCarnet] = useState();
    const [NombreCompleto, setNombreCompleto] = useState();
    const [Correo, setCorreo] = useState();
    const [Contra, setContra] = useState();
    const Habilitado = true;
    const Coordinador = false;
    const [Telefono, setTelefono] = useState();
    const [TelefonoOficina, setTelefonoOficina] = useState();
    const [Sede, setSede] = useState();
    const [IDtipo, setIDtipo] = useState(1);
<<<<<<< HEAD
    const [Foto, setFoto] = useState(null);
=======
    const [Foto, setFoto] = useState();
>>>>>>> a7017c519dd17dd2378979fdf033121465d693b2
    const [Fecha, SetFecha] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/asistente/AgregarProfesor', {
            Carnet:Carnet,
            NombreCompleto:NombreCompleto,
            Correo:Correo,
            Contra:Contra,
            Habilitado:true,
            Coordinador:false,
            Telefono:Telefono,
            TelefonoOficina:TelefonoOficina,
            Sede:Sede,
            IDtipo:1,
            Foto:Foto
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
        console.log(typeof Carnet);
        console.log(NombreCompleto);
        console.log(typeof Sede);
    }

    const convert2base64 = e =>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend =() =>{
            setFoto(reader.result.toString())
        }
        reader.readAsDataURL(file);
    }

 
    return (
        <div>
            <Navbar />
            <Form className="create-form">
                
                <Form.Field>
                    <label>Carnet </label>
                    <input placeholder='Carnet' onChange={(e) => setCarnet(e.target.value)}/>
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
                <Form.Field>
                    <label>Telefono</label>
                    <input placeholder='TelefonoOficina' onChange={(e) => setTelefono(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sede</label>
                    <input placeholder='Sede' onChange={(e) => setSede(parseInt( e.target.value))}/>
                </Form.Field>
                <div>
                <label>Foto</label>
                {Foto ? (
                    <img src = {Foto} />
                ) : (
                    <div>
                        <input id = 'fileupload' className='hidden' type='file' onChange={(e) => convert2base64(e)}/>
                        <label htmlFor='fileupload' ></label>
                    </div>
                )}
                </div>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}
