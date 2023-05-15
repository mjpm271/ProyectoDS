import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function Plantilla() {
    const [IDpersona, setIDpersona] = useState();
    const [NombreCompleto, setNombreCompleto] = useState();
    const [Correo, setCorreo] = useState();
    const [Contra, setContra] = useState();
    const [Telefono, setTelefono] = useState();
    const [Sede, setSede] = useState();
    const [IDtipo, setIDtipo] = useState();
    const [Foto, setFoto] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/asistente/AgregarProfesor', {
            IDpersona:IDpersona,
            NombreCompleto:NombreCompleto,
            Correo:Correo,
            Contra:Contra,
            Habilitado:true,
            Coordinador:false,
            Telefono:Telefono,
            Sede:Sede,
            IDtipo:IDtipo,
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
        console.log(typeof IDpersona);
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
                    <label>Sede</label>
                    <input placeholder='Sede' onChange={(e) => setSede(parseInt( e.target.value))}/>
                </Form.Field> */}
                <Form.Field>
                    <label>IDtipo</label>
                    <input placeholder='IDtipo' onChange={(e) => setIDtipo(parseInt( e.target.value))}/>
                </Form.Field>

                <Label>Sede </Label>
                <div className="container p-2">
                    <select
                        className="custom-select"
                        value={Sede}
                        onChange={(e) => {
                        const SedeSeleccionada = e.target.value;
                        setSede(SedeSeleccionada);
                        }}
                    >
                        <option value={1}>Cartago</option>
                        <option value={2}>San Jose</option>
                        <option value={3}>Alajuela</option>
                    </select>
                    </div>
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