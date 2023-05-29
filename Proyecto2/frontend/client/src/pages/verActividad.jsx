import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button,  Form , Table, Message} from 'semantic-ui-react'
import { useLocation, Link } from 'react-router-dom';
import NavBar from '../components/NavBar2';
export default function VerActividad() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    /* IMPORTANTE PASAR */    

    const [Variable,setVariable]  = useState([]);
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

  useEffect(() => {
    
    
  }, []);
//   const setData = (item) => {
//     let { IDplanTrabajo, Nombre, Abreviacion, IDcoordinador } = item;
//     console.log('item',item)

// }

    return (
        <div>
        <NavBar Persona={{Persona}}/>
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
                        {/* <Table.HeaderCell>Modificar</Table.HeaderCell> */}
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        
                        return (
                            
                            <Table.Row>

                                <Table.Cell>{item.IDactividad}</Table.Cell>
                                <Table.Cell>{item.Nombre}</Table.Cell>
                                <Table.Cell>{item.IDtipoEstado !== 3 && item.IDtipoEstado !== 4 && <Link to={`/crearEvidencia/${item.IDactividad}`}state= {Persona}> <Button>Realizar</Button></Link>}</Table.Cell> 
                                <Table.Cell>{item.IDtipoEstado !== 4 && item.IDtipoEstado !== 3 &&<Link to={`/createObservacion/${item.IDactividad}`}state= {Persona}> <Button>Cancelar</Button></Link>}</Table.Cell> 
                                {/* <Table.Cell>{item.IDtipoEstado !== 4 && item.IDtipoEstado !== 3 &&<Link to={`/modificarActividad/${item.IDactividad}`}state= {Persona}> <Button>Modifcar</Button></Link>}</Table.Cell>  */}

                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                </div>
        </div>
        </div>
    )
}