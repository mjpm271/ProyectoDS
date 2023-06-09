import axios from 'axios';
import React, { useState} from 'react';
import { Button,  Form } from 'semantic-ui-react'
import NavBar from '../components/NavBar2';
export default function EliminarActividad() {
    const [IDactividad, setIDactividad] = useState();

    const buscar = () => { 
        axios.delete('http://localhost:4000/coordinador/EliminarActividad', {
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

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,Carnet,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})

    }
 
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>IDactividad </label>
                    <input placeholder='IDactividad' onChange={(e) => setIDactividad(parseInt(e.target.value))}/>
                </Form.Field>
                <Button onClick={buscar} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
