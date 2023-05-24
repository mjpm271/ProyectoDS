import axios from 'axios';
import React, { useState } from 'react';
import { Button,  Form , Table} from 'semantic-ui-react'
import { useLocation, Link } from 'react-router-dom';

export default function VerPlan() {
    const location = useLocation();
    const Persona = location.state;
    const [IDplanTrabajo, setIDplanTrabajo] = useState();
    const [items, setItems] = useState([]);
    console.log(Persona)

    const buscar = () => {

      axios.post(`http://localhost:4000/profesor/VerPlanTrabajo`, {
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
            
          }).catch(error => {
              console.log(error)
          });


  }

  const setData = (data) => {
    let { IDplanTrabajo, Nombre, Abreviacion, IDcoordinador } = data;

}

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>IDplanTrabajo </label>
                    <input placeholder='IDplanTrabajo' onChange={(e) => setIDplanTrabajo(e.target.value)}/>
                </Form.Field>

                <Button onClick={buscar} type='submit'>Submit</Button>

            </Form>
            <div> 
            <Table class="ui blue table"  singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID Plan Trabajo </Table.HeaderCell>
                        <Table.HeaderCell>Nombre </Table.HeaderCell>
                        <Table.HeaderCell>Abreviacion </Table.HeaderCell>
                        <Table.HeaderCell>Modificar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>

                                <Table.Cell>{item.IDplanTrabajo}</Table.Cell>
                                <Table.Cell>{item.Nombre}</Table.Cell>
                                <Table.Cell>{item.Abreviacion}</Table.Cell>
                                <Link to='/read'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(item)} > Actualizar </Button>
                                    </Table.Cell>
                                </Link>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                </div>
        </div>
    )
}