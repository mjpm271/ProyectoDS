import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function Create() {
    const [IDperson, setCarnet] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/asistente/AgregarProfesor', {
            Carnet:Carnet,
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
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}
