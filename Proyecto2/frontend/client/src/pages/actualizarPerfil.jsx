import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router';

export default function ModificarPerfil() {
    // let history = useHistory();
    const { id } = useParams();
    const [Perfil, setPerfil] = useState({
        carnet:null,
        nombreCompleto:null,
        correo:null,
        contra:null,
        foto:null,
        habilitado:null,
        coordinador:null,
        telefono:null,
        telefonoOficina:null,
        sede:null,
        iDtipo:null
      });
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
        axios
        .post(
          'http://localhost:4000/profesor/VerPerfil',
          { Carnet: id },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((response) => {
          console.log(response.data);
        //   setPerfil(response.data);
  
          const informacion = response.data[0];
          setPerfil({
            carnet: informacion?.Carnet,
            nombreCompleto: informacion?.NombreCompleto,
            correo: informacion?.Correo,
            contra: informacion?.Contra,
            foto: informacion?.Foto,
            habilitado: informacion?.Habilitado,
            coordinador: informacion?.Coordinador,
            telefono: informacion?.Telefono,
            telefonoOficina: informacion?.TelefonoOficina,
            sede: informacion?.Sede,
            iDtipo: informacion?.IDtipo,
          });



          console.log(Perfil);
        });
    }, []);

    useEffect(() => {
        setCarnet(Perfil?.carnet);
        setNombreCompleto(Perfil?.nombreCompleto);
        setContra(Perfil?.contra);
        setCorreo(Perfil?.correo);
        setFoto(Perfil?.foto);
        setHabilitado(Perfil?.habilitado);
        setCoordinador(Perfil?.coordinador);
        setTelefono(Perfil?.telefono);
        setTelefonoOficina(Perfil?.telefonoOficina);
        setSede(Perfil?.sede);
        setIDtipo(Perfil?.iDtipo);
      }, [Perfil]);

    const updateAPIData = () => {
        axios.put('http://localhost:4000/profesor/ModificarPerfil', {
            Carnet:Perfil?.carnet,
            NombreCompleto:Perfil?.nombreCompleto,
            Correo:Perfil?.correo,
            Contra:Perfil?.contra,
            Foto:Perfil?.foto,
            Habilitado:Perfil?.habilitado,
            Coordinador:Perfil?.coordinador,
            Telefono:Perfil?.telefono,
            TelefonoOficina:Perfil?.telefonoOficina,
            Sede:Perfil?.sede,
            IDtipo:Perfil?.iDtipo

        }          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(response => {
            console.log(response.data);
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