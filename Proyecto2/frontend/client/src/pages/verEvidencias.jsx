import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Button,  Form , Table, Header, Image} from 'semantic-ui-react'

export default function VerEvidencias() {

    const [IDactividad, setIDactividad] = useState();
    const [items, setItems] = useState([]);

    const buscar = () => {

      axios.post('http://localhost:4000/coordinador/VerEvidencias', {
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
                        <Table.HeaderCell>ID evidencia</Table.HeaderCell>
                        <Table.HeaderCell>Foto participantes </Table.HeaderCell>
                        <Table.HeaderCell>link de Grabacion </Table.HeaderCell>
                        <Table.HeaderCell>ID actividad </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{item.IDevidencia}</Table.Cell>
                                <Table.Cell>
                                <Header as='h1' image>
                                  <Image src={item.Fotoparticipantes} rounded size='tiny' /> 
                                </Header>
                                </Table.Cell>
                                <Table.Cell>{item.linkGrabacion}</Table.Cell>
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
