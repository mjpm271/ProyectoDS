import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button,  Form , Table, Header, Image, Message} from 'semantic-ui-react';
import Navbar from "../components/Navbar";

export default function ConsultarMiembrosEquipo() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    const [Error, setError] = useState('')
    /* IMPORTANTE PASAR */
    const [Nombre, setNombre] = useState();
    const Lugar = ['Cartago', 'San Jose', 'Alajuela', 'San Carlos', 'Limon'];
    const MyEnum = {
        true: 'Si',
        false: 'No'
      };
    const [items, setItems] = useState([]);

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
            if(!response.data[0]){
              setError('No existe ese equipo')
            }
            setItems(items)
          }).catch(error => {
              console.log(error)
          });


  }

 
    return (
        <div>
            <Navbar />
          {Error && <Message negative>{Error}</Message>}
        <div className='container'>
            <Form className="create-form">
                <h1>Consultar Miembros de un Equipo Guia</h1>
                <Form.Field>
                    <label>Nombre </label>
                    <input placeholder='Nombre Equipo Guia' onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>

                <Button onClick={buscar} type='submit'>Submit</Button>

            </Form>
            <div> 
            <Table textAlign='center' singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Foto </Table.HeaderCell>
                        <Table.HeaderCell>Carnet </Table.HeaderCell>
                        <Table.HeaderCell>Nombre Completo </Table.HeaderCell>
                        <Table.HeaderCell>Correo </Table.HeaderCell>
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
                                    <Image src={item.Foto} rounded size='medium' /> 
                                </Table.Cell>
                                <Table.Cell>{item.Carnet}</Table.Cell>
                                <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                <Table.Cell>{item.Correo}</Table.Cell>
                                <Table.Cell>{MyEnum[item.Coordinador]}</Table.Cell>
                                <Table.Cell>{item.Telefono}</Table.Cell>
                                <Table.Cell>{item.TelefonoOficina}</Table.Cell>
                                <Table.Cell>{Lugar[item.Sede - 1]}</Table.Cell>
                                <Table.Cell>{item.IDtipo}</Table.Cell>
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
