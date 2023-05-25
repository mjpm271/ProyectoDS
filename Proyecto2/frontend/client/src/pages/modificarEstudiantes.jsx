import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ModificarEstudiante() {
    const navigate = useNavigate();
    const { IDEstudiante } = useParams();
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

    useEffect(() => {
        axios
        .post(
            'http://localhost:4000/profesor/VerPerfil',
            { Carnet: IDEstudiante },
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
    }, [IDEstudiante]);

    const updateAPIData = () => {
        axios
        .put(
            'http://localhost:4000/profesor/ModificarProfesorPerfil',
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
            console.log(response.data);
            
        })
        .catch(error => {
            console.log(error);
        });
        navigate('/');
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPerfil(prevPerfil => ({
        ...prevPerfil,
        [name]: value
        }));
    };

    return (
        <div className="container">
            
            <h1 >Modificar Estudiante</h1>
        <Form className="create-form">
            <Form.Field>
            <label>Carnet</label>
            <input
                placeholder='Carnet'
                name="carnet"
                value={perfil.carnet || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
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
    );
    }
