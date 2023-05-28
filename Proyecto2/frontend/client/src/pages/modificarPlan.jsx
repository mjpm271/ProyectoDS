import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar"

export default function ModificarPlan() {
    const navigate = useNavigate();
    const { IDPlan } = useParams();
    const [PlanTrabajo, setPlanTrabajo] = useState({
        idPlanTrabajo: null,
        nombre: null,
        abreviacion: null,
        iDcoordinador: null
    });
    console.log(IDPlan)
    
    useEffect(() => {
        axios
        .post(
            'http://localhost:4000/profesor/VerPlanTrabajo',
            { IDplanTrabajo: IDPlan },
            {
            headers: {
                'Content-Type': 'application/json'
            }
            }
        )
        .then((response) => {
            const informacion = response.data[0];
            setPlanTrabajo({
            idplanTrabajo: informacion?.IDplanTrabajo,
            nombre: informacion?.Nombre,
            abreviacion: informacion?.Abreviacion,
            iDcoordinador: informacion?.IDcoordinador
            });
        });
    }, [IDPlan]);

    const updateAPIData = () => {
        axios
        .post(
            'http://localhost:4000/coordinador/ModificarPlan',
            {
            IDplanTrabajo: IDPlan,
            Nombre: PlanTrabajo.nombre,
            Abreviacion: PlanTrabajo.abreviacion,
            IDcoordinador: PlanTrabajo.iDcoordinador
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
        setPlanTrabajo(prevPlanTrabajo => ({
        ...prevPlanTrabajo,
        [name]: value
        }));
    };

    return (
        <div>
            <Navbar />
        <div className='container'>
            <h1>Modificar Plan de Trabajo</h1>
        <Form className="create-form">
            {/* <Form.Field>
            <label>IDplanTrabajo</label>
            <input
                placeholder='IDplanTrabajo'
                name="IDplanTrabajo"
                value={PlanTrabajo.idPlanTrabajo || ''}
                onChange={handleInputChange}
            />
            </Form.Field> */}
            <Form.Field>
            <label>Nombre</label>
            <input
                placeholder='Nombre'
                name="nombre"
                value={PlanTrabajo.nombre || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            <Form.Field>
            <label>Abreviacion</label>
            <input
                placeholder='Abreviacion'
                name="abreviacion"
                value={PlanTrabajo.abreviacion || ''}
                onChange={handleInputChange}
            />
            </Form.Field>
            
            <Button type='submit' onClick={updateAPIData}>Update</Button>
        </Form>
        </div>
        </div>
    );
    }
