import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar2';

export default function ModificarActividad() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
     /* IMPORTANTE PASAR */    
    const navigate = useNavigate();
    const { IDactividad } = useParams();
    const [actividad, setActividad] = useState({
        nombre: null,
        semana: null,
        fecha: null,
        cantidaddiasprevios: null,
        cantidaddiasrequeridos: null,
        fechaPublicacion: null,
        linkReunion: null,
        afiche: null,
        iDmodalidad: null,
        iDtipoActividad: null,
        iDtipoAfiche: null,
        iDtipoEstado: null,
        idplanTrabajo: null
    });

    useEffect(() => {
        axios
        .post(
            'http://localhost:4000/asistente/Actividad',
            { IDactividad: IDactividad },
            {
            headers: {
                'Content-Type': 'application/json'
            }
            }
        )
        .then((response) => {
            const informacion = response.data[0];
            setActividad({
            nombre: informacion?.Nombre,
            semana: informacion?.Semana,
            fecha: informacion?.Fecha,
            cantidaddiasprevios: informacion?.Cantidaddiasprevios,
            cantidaddiasrequeridos: informacion?.Cantidaddiasrequeridos,
            fechaPublicacion: informacion?.FechaPublicacion,
            linkReunion: informacion?.LinkReunion,
            afiche: informacion?.Afiche,
            iDmodalidad: informacion?.IDmodalidad,
            iDtipoActividad: informacion?.IDtipoActividad,
            iDtipoAfiche: informacion?.IDtipoAfiche,
            iDtipoEstado: informacion?.IDtipoEstado,
            iDtipoEstado: informacion?.IDplanTrabajo,
            });
        });
    }, [IDactividad]);

    const updateAPIData = () => {
        axios
        .put(
            'http://localhost:4000/asistente/ModificarActividad',
            {
            Nombre: actividad.nombre,
            Semana: actividad.semana,
            Fecha: actividad.fecha,
            Cantidaddiasprevios: actividad.cantidaddiasprevios,
            Cantidaddiasrequeridos: actividad.cantidaddiasrequeridos,
            FechaPublicacion: actividad.fechaPublicacion,
            LinkReunion: actividad.linkReunion,
            Afiche: actividad.afiche,
            IDmodalidad: actividad.iDmodalidad,
            IDtipoActividad: actividad.iDtipoActividad,
            IDtipoAfiche: actividad.iDtipoAfiche,
            IDtipoEstado: actividad.iDtipoEstado
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
        setActividad(prevPerfil => ({
        ...prevPerfil,
        [name]: value
        }));
    };

    return (
        <div>
        <NavBar Persona={{Persona}}/>
        <div className="container">
            
            <h1 >Modificar Actividad</h1>
        <Form className="create-form">
            <Form.Field>
            <label>Nombre</label>
            <input
                placeholder='Nombre'
                name="nombre"
                value={actividad.nombre || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>Semana</label>
            <input
                placeholder='Semana'
                name="semana"
                value={actividad.semana || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>Fecha</label>
            <input
                placeholder='Fecha'
                name="fecha"
                value={actividad.fecha || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <label>Cantidaddiasprevios</label>
            <input
                placeholder='Cantidaddiasprevios'
                name="cantidaddiasprevios"
                value={actividad.cantidaddiasprevios || ''}
                onChange={handleInputChange}
            />
            <Form.Field>
            <label>Cantidad dias requeridos</label>
            <input
                placeholder='Cantidad dias requeridos'
                name="cantidaddiasrequeridos"
                value={actividad.cantidaddiasrequeridos || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>IDmodalidad</label>
            <input
                placeholder='IDmodalidad'
                name="iDmodalidad"
                value={actividad.iDmodalidad || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>IDtipoActividad</label>
            <input
                placeholder='IDtipoActividad'
                name="iDtipoActividad"
                value={actividad.iDtipoActividad || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>FechaPublicacion</label>
            <input
                placeholder='FechaPublicacion'
                name="fechaPublicacion"
                value={actividad.fechaPublicacion || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>IDtipoAfiche</label>
            <input
                placeholder='IDtipoAfiche'
                name="IDtipoAfiche"
                value={actividad.IDtipoAfiche || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>IDtipoEstado</label>
            <input
                placeholder='IDtipoEstado'
                name="IDtipoEstado"
                value={actividad.IDtipoEstado || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>ID plan Trabajo</label>
            <input
                placeholder='IDplanTrabajo'
                name="IDplanTrabajo"
                value={actividad.IDplanTrabajo || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Button type='submit' onClick={updateAPIData}>Update</Button>
        </Form>
        </div>
        </div>
    );
    }
