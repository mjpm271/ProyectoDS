import axios from 'axios';
import React, { useState } from 'react';
import { Button,  Form , Table,Header, Image} from 'semantic-ui-react'
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar2';
export default function ConsultarMiembros() {
    const location = useLocation();
    const Persona = location.state;
    const [Nombre, setNombre] = useState();
    const [items, setItems] = useState([]);
    const MyEnum = {
        true: 'Si',
        false: 'No'
      };
    const Lugar = ['Cartago', 'San Jose', 'Alajuela', 'San Carlos', 'Limon'];
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
            <Table class="ui blue table" textAlign='center' singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Foto </Table.HeaderCell>
                        <Table.HeaderCell>Carnet </Table.HeaderCell>
                        <Table.HeaderCell>Nombre Completo </Table.HeaderCell>
                        <Table.HeaderCell>Correo </Table.HeaderCell>
                        <Table.HeaderCell>Habilitado </Table.HeaderCell>
                        <Table.HeaderCell>Coordinador </Table.HeaderCell>
                        <Table.HeaderCell>Telefono </Table.HeaderCell>
                        <Table.HeaderCell>Telefono Oficina </Table.HeaderCell>
                        <Table.HeaderCell>Sede </Table.HeaderCell>
                        <Table.HeaderCell>Tipo </Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                
            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>
                                <Table.Cell>
                                <Header as='h4' image>
                                  <Image src={item.Foto} rounded size='huge' /> 
                                </Header>
                                </Table.Cell>
                                <Table.Cell>{item.Carnet}</Table.Cell>
                                <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                <Table.Cell>{item.Correo}</Table.Cell>
                                <Table.Cell>{MyEnum[item.Habilitado]}</Table.Cell>
                                <Table.Cell>{MyEnum[item.Coordinador]}</Table.Cell>
                                <Table.Cell>{item.Telefono}</Table.Cell>
                                <Table.Cell>{item.TelefonoOficina}</Table.Cell>
                                <Table.Cell>{Lugar[item.Sede - 1]}</Table.Cell>
                                <Table.Cell>Profesor</Table.Cell>
                                
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                </div>
        </div>
    )
}