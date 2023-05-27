import axios from 'axios';
import React, { useState } from 'react';
import { Button,  Form , Table, Message} from 'semantic-ui-react'
import { useLocation, Link } from 'react-router-dom';

export default function VerActividad() {
    const location = useLocation();
    const Persona = location.state;
    const [IDplanTrabajo, setIDplanTrabajo] = useState();
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

    console.log(Persona)

    const buscar = () => {
        setError('')
        axios.post(`http://localhost:4000/profesor/VerActividadxPlan`, {
            IDplanTrabajo:IDplanTrabajo
            }
            , {
            headers: {
                'Content-Type': 'application/json'
            }
            }
            )
            .then(response => {
                const items = response.data
                setItems(items)
                // console.log(response.data)
                if(response.data.length === 0){
                    setError('No existe registro del plan consultado')
                }
                
            }).catch(error => {
                console.log(error)
            });


  }

//   const setData = (item) => {
//     let { IDplanTrabajo, Nombre, Abreviacion, IDcoordinador } = item;
//     console.log('item',item)

// }

    return (
        <div className="container">
            <h1>Consultar Actividades</h1>
            <Form className="create-form">
                <Form.Field>
                    <label>Ingrese un plan de trabajo</label>
                    <input placeholder='IDplanTrabajo' onChange={(e) => setIDplanTrabajo(e.target.value)}/>
                </Form.Field>

                <Button onClick={buscar} type='submit'>Submit</Button>

            </Form>
            <div> 
            {error && <Message negative>{error}</Message>}
            <Table textAlign='center' singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID Actividad</Table.HeaderCell>
                        <Table.HeaderCell>Nombre </Table.HeaderCell>

                        <Table.HeaderCell>Realizar</Table.HeaderCell>
                        <Table.HeaderCell>Cancelar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>

                                <Table.Cell>{item.IDactividad}</Table.Cell>
                                <Table.Cell>{item.Nombre}</Table.Cell>
                                {item.tipoEstado != 3 && <Table.Cell><Link to={`/crearEvidencia`}> <Button>Realizar</Button></Link></Table.Cell> }
                                {item.tipoEstado != 4 && <Table.Cell><Link to={`/createObservacion`}> <Button>Cancelar</Button></Link></Table.Cell> }
                                

                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                </div>
        </div>
    )
}