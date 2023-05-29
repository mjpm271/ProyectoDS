import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Button,  Form , Table, Header, Image, Message} from 'semantic-ui-react'
import { useLocation , Link } from 'react-router-dom';
import Navbar from "../components/Navbar"

export default function BuscarProfesor() {
    const location = useLocation();
    const Persona = location.state;

    const info = JSON.parse(Persona)
    const tipo = info.IDtipo
    const sede = info.Sede
    const [AsistenteCartago, setAsistenteCartago] = useState(false);

    const [Carnet, setCarnet] = useState();
    const Lugar = ['Cartago', 'San Jose', 'Alajuela', 'San Carlos', 'Limon'];
    const [Error, setError] = useState('');
    const [items, setItems] = useState([]);
    const MyEnum = {
        true: 'Si',
        false: 'No'
      };
    const buscar = () => {
      setError('')
      axios.post(`http://localhost:4000/asistente/BuscarProfesor`, {
          Carnet:Carnet
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
              setError('No existe ese profesor')
            }
            setItems(items)
            if(sede===1 && tipo===2){
              setAsistenteCartago(true)
            }

          }).catch(error => {
              console.log(error)
          });
       
  }
    return (
        <div >
            <Navbar />
          {Error && <Message negative>{Error}</Message>}
            <div className="container">
                <h1>Buscar Profesor</h1>
            <Form className="create-form">
                <Form.Field>
                    <label>Carnet </label>
                    <input placeholder='Carnet' onChange={(e) => setCarnet(e.target.value)}/>
                </Form.Field>

                <Button className='button1' onClick={buscar} type='submit'>Buscar</Button>

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
                        <Table.HeaderCell>Inhabilitar</Table.HeaderCell> 
                        <Table.HeaderCell>Habilitar</Table.HeaderCell> 
                        <Table.HeaderCell>Modificar</Table.HeaderCell> 

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
                               
                                <Table.Cell> 
                                {AsistenteCartago ? (<Link to={`/modificarEstudiante/${item.Carnet}`}>
                                    <Button  className='button1'> Inhabilitar </Button></Link> ):null}
                                </Table.Cell>
                                
                                <Table.Cell> 
                                {AsistenteCartago ? (<Link to={`/modificarEstudiante/${item.Carnet}`}>
                                    <Button  > Habilitar </Button></Link> ):null}
                                </Table.Cell>
                                <Table.Cell> 
                                {AsistenteCartago ? (<Link to={`/modificarProfesor/${item.Carnet}`}>
                                    <Button  > Modifcar </Button></Link> ):null}
                                </Table.Cell>
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
