import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Button,  Form , Table, Header, Image} from 'semantic-ui-react'

export default function BuscarProfesor() {

    const [Carnet, setCarnet] = useState();
    const [Lugar, setLugar] = useState([]);
    const [items, setItems] = useState([]);

    const buscar = () => {

      axios.post(`http://localhost:4000/asistente/BuscarProfesor`, {
          Carnet:Carnet,
          Lugar:Lugar
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
        useEffect(() => {
        definirSede();
      });

      const definirSede = () => {
        switch (items.Sede){
          case 1:
            setLugar('Cartago');
            break;
          case 2:
            setLugar('San Jose');
            break;
          case 3:
            setLugar('Alajuela');
            break;
          case 4:
            setLugar('San Carlos');
            break;
          case 5:
            setLugar('Limon');
            break;
          default:
            console.log(items.Sede)
            setLugar('casa');
            break;
        }
      };
    return (
        <div>
            <Form className="create-form">
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
                                  <Image src={item.Foto} rounded size='huge' /> 
                                </Header>
                                </Table.Cell>
                                <Table.Cell>{item.Carnet}</Table.Cell>
                                <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                <Table.Cell>{item.Correo}</Table.Cell>
                                <Table.Cell>{item.Habilitado}</Table.Cell>
                                <Table.Cell>{item.Coordinador}</Table.Cell>
                                <Table.Cell>{item.Telefono}</Table.Cell>
                                <Table.Cell>{item.TelefonoOficina}</Table.Cell>
                                <Table.Cell>{Lugar}</Table.Cell>
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
