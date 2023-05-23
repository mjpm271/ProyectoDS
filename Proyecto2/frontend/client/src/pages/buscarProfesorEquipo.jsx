import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Button,  Form , Table, Header, Image} from 'semantic-ui-react'

export default function BuscarProfesorEquipo() {
    const [Nombre, setNombre] = useState();
    const [Carnet, setCarnet] = useState();
    const [items, setItems] = useState([]);

    const buscar = () => { 
        axios.post('http://localhost:4000/asistente/BuscarProfesorEquipo', {
            Nombre:Nombre,
            Carnet:Carnet
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              console.log(response.data);
            }).catch(error => {
                console.log(error)
            });

        // fetch('http://localhost:4000/ejemplo/asistente/AgregarProfesor',{
        //     method : 'post',
        //     mode: 'cors',
        //     body: formData,
        //     headers: { "Content-Type": "multipart/form-data" }
        // })

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,Carnet,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})

    }
 
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nombre </label>
                    <input placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Carnet </label>
                    <input placeholder='Carnet' onChange={(e) => setCarnet(e.target.value)}/>
                </Form.Field>

                <Button onClick={buscar} type='submit'>Submit</Button>

            </Form>
            <div> 

            <Table class="ui blue table" singleLine>
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
                                  <Image src="https://i.postimg.cc/tCZ8XhHm/alba-photo-003.png" rounded size='huge' /> 
                                </Header>
                                </Table.Cell>
                                <Table.Cell>{item.Carnet}</Table.Cell>
                                <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                <Table.Cell>{item.Correo}</Table.Cell>
                                <Table.Cell>{item.Habilitado}</Table.Cell>
                                <Table.Cell>{item.Coordinador}</Table.Cell>
                                <Table.Cell>{item.Telefono}</Table.Cell>
                                <Table.Cell>{item.TelefonoOficina}</Table.Cell>
                                <Table.Cell>{item.Sede}</Table.Cell>
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
