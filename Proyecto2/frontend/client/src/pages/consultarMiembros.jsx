import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Button,  Form , Table} from 'semantic-ui-react'

export default function ConsultarMiembros() {

    const [IDequipoGuia, setIDequipoGuia] = useState();
    const [items, setItems] = useState([]);

    const buscar = () => {

      axios.post(`http://localhost:4000/asistente/ConsultarMiembrosEquipo`, {
          IDequipoGuia:IDequipoGuia
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
                    <label>IDequipoGuia </label>
                    <input placeholder='IDequipoGuia' onChange={(e) => setIDequipoGuia(parseInt(e.target.value))}/>
                </Form.Field>

                <Button onClick={buscar} type='submit'>Submit</Button>

            </Form>
            <div> 
            <Table singleLine>
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