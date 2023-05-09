import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form } from 'semantic-ui-react'

export default function Create() {
    const [ID, setID] = useState();
    const [NombreCompleto, setNombreCompleto] = useState();
    const [Correo, setCorreo] = useState();
    const [Contra, setContra] = useState();
    const [Habilitado, setHabilitado] = useState();
    const [Coordinador, setCoordinador] = useState();
    const [Sede, setSede] = useState();
    const [IDtipo, setIDtipo] = useState();
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        // var formData = new FormData();
        // formData.append('ID',ID);
        // formData.append('NombreCompleto',NombreCompleto);
        // formData.append('Correo',Correo);
        // formData.append('Contra',Contra);
        // formData.append('Habilitado',Habilitado);
        // formData.append('Coordinador',Coordinador);
        // formData.append('Sede',Sede);
        // formData.append('IDtipo',IDtipo);

        axios.post('http://localhost:4000/ejemplo/asistente/AgregarProfesor', {
            ID:ID,
            NombreCompleto:NombreCompleto,
            Correo:Correo,
            Contra:Contra,
            Habilitado:Habilitado,
            Coordinador:Coordinador,
            Sede:Sede,
            IDtipo:IDtipo
          }
        //   , {
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   }
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
        console.log(typeof ID);
        console.log(NombreCompleto);
        console.log(typeof Sede);
    }
 
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>ID </label>
                    <input placeholder='ID' onChange={(e) => setID(parseInt( e.target.value))}/>
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
                    <label>Contraseña </label>
                    <input placeholder='Contra' onChange={(e) => setContra(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Habilitado</label>
                    <input placeholder='Habilitado' onChange={(e) => setHabilitado(parseInt( e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Coordinador</label>
                    <input placeholder='Coordinador' onChange={(e) => setCoordinador(parseInt( e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Sede</label>
                    <input placeholder='Sede' onChange={(e) => setSede(parseInt( e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>ID Tipo</label>
                    <input placeholder='IDtipo' onChange={(e) => setIDtipo(parseInt( e.target.value))}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}