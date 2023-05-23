import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [Carnet, setCarnet] = useState();
    const [NombreCompleto, setNombreCompleto] = useState();
    const [Correo, setCorreo] = useState();
    const [Contra, setContra] = useState();
    const [Habilitado, setHabilitado] = useState();
    const [Coordinador, setCoordinador] = useState();
    // const Habilitado = true;
    // const Coordinador = false;
    const [Telefono, setTelefono] = useState();
    const [TelefonoOficina, setTelefonoOficina] = useState();
    const [Sede, setSede] = useState();
    const [IDtipo, setIDtipo] = useState(1);
    const [Foto, setFoto] = useState();

    useEffect(() => {
        setCarnet(localStorage.getItem('Carnet'))
        setNombreCompleto(localStorage.getItem('NombreCompleto'))
        setCorreo(localStorage.getItem('Correo'))
        setContra(localStorage.getItem('Contra'))
        setHabilitado(localStorage.getItem('Habilitado'))
        setCoordinador(localStorage.getItem('Coordinador'))
        setTelefono(localStorage.getItem('Telefono'))
        setTelefonoOficina(localStorage.getItem('TelefonoOficina'))
        setSede(localStorage.getItem('Sede'));
        setIDtipo(localStorage.getItem('IDtipo'));
        setFoto(localStorage.getItem('Foto'));
    }, []);

    const updateAPIData = () => {
        axios.put('http://localhost:4000/profesor/ModificarPerfil', {
            Carnet:Carnet,
            NombreCompleto:NombreCompleto,
            Correo:Correo,
            Contra:Contra,
            Habilitado:Habilitado,
            Coordinador:Coordinador,
            Telefono:Telefono,
            TelefonoOficina:TelefonoOficina,
            Sede:Sede,
            IDtipo:IDtipo,
            Foto:Foto
        }          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(() => {
            console.log(response.data);
            // history.push('/read')
        }).catch(error => {
            console.log(error)
        });
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Carnet </label>
                    <input placeholder='Carnet' value={Carnet} onChange={(e) => setCarnet(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>NombreCompleto </label>
                    <input placeholder='NombreCompleto' value={NombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Correo</label>
                    <input placeholder='Correo' value={Correo} onChange={(e) => setCorreo(e.target.value)}/>
                </Form.Field>
                {/* <Form.Field>
                    <label>Contra</label>
                    <input placeholder='Contra' value={Carnet} onChange={(e) => setContra(e.target.value)}/>
                </Form.Field> */}
                <Form.Field>
                    <label>Telefono</label>
                    <input placeholder='Telefono' value={Telefono} onChange={(e) => setTelefono(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>TelefonoOficina</label>
                    <input placeholder='TelefonoOficina' value={TelefonoOficina} onChange={(e) => setTelefonoOficina(e.target.value)}/>
                </Form.Field>
                {/* <Form.Field>
                    <label>Sede</label>
                    <input placeholder='Sede' onChange={(e) => setSede(parseInt( e.target.value))}/>
                </Form.Field> */}
                <Form.Field>
                    <label>Foto</label>
                    <input placeholder='Foto' value={Foto} onChange={(e) => setFoto(e.target.value)}/>
                </Form.Field>                
                {/* <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field> */}
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}