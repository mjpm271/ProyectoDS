import axios from 'axios';
import React, { useState } from 'react';
import { Button,  Form , Table} from 'semantic-ui-react';
import NavBar from '../components/NavBar2';
export default function VerResponsables() {
    const [IDactividad, setIDactividad] = useState();
    const Lugar = ['Cartago', 'San Jose', 'Alajuela', 'San Carlos', 'Limon'];
    const [items, setItems] = useState([]);

    const Responsable = () => {

      axios.post(`http://localhost:4000/coordinador/VerResponsables`, {
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
        <div className="container">
            <h1>Buscar Actividad</h1>
            <Form className="create-form">
                <Form.Field>
                    <label>IDactividad </label>
                    <input placeholder='IDactividad' onChange={(e) => setIDactividad(parseInt(e.target.value))}/>
                </Form.Field>

                <Button onClick={Responsable} type='submit'>Submit</Button>

            </Form>
            <div> 

            <Table textAlign='center' singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Carnet </Table.HeaderCell>
                        <Table.HeaderCell>Nombre Completo </Table.HeaderCell>
                        <Table.HeaderCell>Correo </Table.HeaderCell>
                        <Table.HeaderCell>Sede </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{item.Carnet}</Table.Cell>
                                <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                <Table.Cell>{item.Correo}</Table.Cell>
                                <Table.Cell>{Lugar[item.Sede - 1]}</Table.Cell>
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
