import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form} from 'semantic-ui-react'
// import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import NavBar from '../components/NavBar2';
import { useLocation } from 'react-router-dom';
export default function CancelarActividad() {
  const location = useLocation();
  const Persona = location.state;
    const [IDactividad, setIDactividad] = useState();
    const Exito = useState(4)
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.put('http://localhost:4000/coordinador/CancelarActividad', {
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

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,NombreCompleto,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})
        console.log(typeof IDactividad);
    }
    return (
      <div>
      <NavBar Persona={{Persona}}/>
            <Form className="create-form">
                <Form.Field>
                    <label>IDactividad </label>
                    <input placeholder='IDactividad' onChange={(e) => setIDactividad(parseInt( e.target.value))}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}
