import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Button,  Form , Table, Header, Image} from 'semantic-ui-react'

export default function VerObservacion() {

    const [IDactividad, setIDactividad] = useState();
    const [items, setItems] = useState([]);

    const buscar = () => {

      axios.post('http://localhost:4000/coordinador/VerObservacion', {
          IDactividad:IDactividad
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
                    <label>IDactividad </label>
                    <input placeholder='IDactividad' onChange={(e) => setIDactividad(parseInt(e.target.value))}/>
                </Form.Field>

                <Button onClick={buscar} type='submit'>Submit</Button>

            </Form>
            <div> 
            <Table color={"blue"} singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID observacion</Table.HeaderCell>
                        <Table.HeaderCell>Fecha </Table.HeaderCell>
                        <Table.HeaderCell>Observacion</Table.HeaderCell>
                        <Table.HeaderCell>ID actividad </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{item.IDobservacion}</Table.Cell>
                                <Table.Cell>{item.Fecha}</Table.Cell>
                                <Table.Cell>{item.Observacion}</Table.Cell>
                                <Table.Cell>{item.IDactividad}</Table.Cell>
                                
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                </div>
        </div>
    )
}
