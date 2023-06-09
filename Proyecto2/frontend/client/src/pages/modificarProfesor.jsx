import React, { useState, useEffect } from 'react';
import { Button,  Form } from 'semantic-ui-react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar2';

export default function ModificarProfesor() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    console.log('p',Persona)
    /* IMPORTANTE PASAR */    
    const navigate = useNavigate();
    const { id } = useParams();
    const [perfil, setPerfil] = useState({
        carnet: null,
        nombreCompleto: null,
        correo: null,
        contra: null,
        foto: null,
        habilitado: null,
        coordinador: null,
        telefono: null,
        telefonoOficina: null,
        sede: null,
        iDtipo: null
    });
    const showAlert = (Result) => {
        window.alert('Se modifica al profesor con exito');
    };

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
        });
    }, [id]);

    const updateAPIData = () => {
        axios
        .put(
            'http://localhost:4000/asistente/modificarProfesor',
            {
            Carnet: perfil.carnet,
            NombreCompleto: perfil.nombreCompleto,
            Correo: perfil.correo,
            Contra: perfil.contra,
            Foto: perfil.foto,
            Habilitado: perfil.habilitado,
            Coordinador: perfil.coordinador,
            Telefono: perfil.telefono,
            TelefonoOficina: perfil.telefonoOficina,
            Sede: perfil.sede,
            IDtipo: perfil.iDtipo
            },
            {
            headers: {
                'Content-Type': 'application/json'
            }
            }
        )
        .then(response => {
            console.log('adentro')
            console.log(response.data);
            showAlert(0);
            
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPerfil(prevPerfil => ({
        ...prevPerfil,
        [name]: value
        }));
    };

    return (
        <div>
            <NavBar Persona={{Persona}}/>
        <div className="container">
            <h1>Modificar Profesor</h1>
        <Form className="create-form">
            <Form.Field>
            <label>NombreCompleto</label>
            <input
                placeholder='NombreCompleto'
                name="nombreCompleto"
                value={perfil.nombreCompleto || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>Correo</label>
            <input
                placeholder='Correo'
                name="correo"
                value={perfil.correo || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>Telefono</label>
            <input
                placeholder='Telefono'
                name="telefono"
                value={perfil.telefono || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>TelefonoOficina</label>
            <input
                placeholder='TelefonoOficina'
                name="telefonoOficina"
                value={perfil.telefonoOficina || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>Foto</label>
            <input
                placeholder='Foto'
                name="foto"
                value={perfil.foto || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Button type='submit' onClick={updateAPIData}>Update</Button>
        </Form>
        </div>
        </div>
    );
    }
