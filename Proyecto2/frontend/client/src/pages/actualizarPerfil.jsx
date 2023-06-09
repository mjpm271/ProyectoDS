import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar2';

export default function ModificarPerfil() {
    /* IMPORTANTE PASAR */
   const location = useLocation();
   const Persona = location.state;
   const info = JSON.parse(Persona);
   const tipo = info.IDtipo;
   
   const coordinador = info.Coordinador
   console.log("co", typeof coordinador)
  //  const info = JSON.parse(Persona)
   console.log(Persona)
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
        if(tipo === 1 && coordinador===true){
            console.log('coordinador')
            navigate('/InicioCoordinador',{ state: Persona }); 
        }if(tipo === 1 && coordinador===false){
            navigate('/IncioProfesor',{ state: Persona });
        }if(tipo === 2 ){
            navigate('/InicioAsistente',{ state: Persona })
        }
        
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
            <h1>Modificar Perfil</h1>
        <Form className="create-form">
            <Form.Field>
            <label>NombreCompleto</label>
            {(tipo === 3 )?
                <input
                placeholder='NombreCompleto'
                name="nombreCompleto"
                readOnly = {true}
                value={perfil.nombreCompleto || ''}
                onChange={handleInputChange}
            /> : <input
            placeholder='NombreCompleto'
            name="nombreCompleto"
            value={perfil.nombreCompleto || ''}
            onChange={handleInputChange}
        />
            }
            {/* <input
                placeholder='NombreCompleto'
                name="nombreCompleto"
                value={perfil.nombreCompleto || ''}
                onChange={handleInputChange}
            /> */}
            </Form.Field>
            <Form.Field>
            <label>Correo</label>
            {(tipo === 3 )?
            <input
                placeholder='Correo'
                name="correo"
                readOnly = {true}
                value={perfil.correo || ''}
                onChange={handleInputChange}
            />:
            <input
                placeholder='Correo'
                name="correo"
                value={perfil.correo || ''}
                onChange={handleInputChange}
             />}
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
            {(tipo !== 3 )? <label>TelefonoOficina</label> :null}
            {(tipo !== 3 )?
            <input
                placeholder='TelefonoOficina'
                name="telefonoOficina"
                value={perfil.telefonoOficina || ''}
                onChange={handleInputChange}
            />:null}
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
