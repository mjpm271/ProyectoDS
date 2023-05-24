import axios from 'axios';
import React, { useState } from 'react';
import { Button,  Form , Table} from 'semantic-ui-react'
import { useLocation } from 'react-router-dom';
export default function ConsultarMiembros() {
    const location = useLocation();
    const Persona = location.state;
    const [Nombre, setNombre] = useState();
    const [items, setItems] = useState([]);
    console.log(Persona)

    const buscar = () => {

      axios.post(`http://localhost:4000/asistente/ConsultarMiembrosEquipo`, {
          Nombre:Nombre
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
            
          }).catch(error => {
              console.log(error)
          });


  }

 
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nombre </label>
                    <input placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>

                <Button onClick={buscar} type='submit'>Submit</Button>

            </Form>
            <div> 
            <Table class="ui blue table"  singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Carnet </Table.HeaderCell>
                        <Table.HeaderCell>Nomre Completo </Table.HeaderCell>
                        <Table.HeaderCell>Sede </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>

                                <Table.Cell>{item.Carnet}</Table.Cell>
                                <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                <Table.Cell>{item.Sede}</Table.Cell>
                                
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                </div>
        </div>
    )
}