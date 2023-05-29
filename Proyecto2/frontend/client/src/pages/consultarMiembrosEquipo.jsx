import axios from 'axios';
import React, { useState  } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Button,  Form , Table, Image, Message} from 'semantic-ui-react';
import Navbar from "../components/Navbar";
import NavBar from '../components/NavBar2';

export default function ConsultarMiembrosEquipo() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    console.log('p1',Persona)
    const [Error, setError] = useState('')
    const info = JSON.parse(Persona)
    const tipo = info.IDtipo
    const sede = info.Sede
    const [AsistenteCartago, setAsistenteCartago] = useState(false);
    /* IMPORTANTE PASAR */
    const [Nombre, setNombre] = useState();
    const Lugar = ['Cartago', 'San Jose', 'Alajuela', 'San Carlos', 'Limon'];
    const MyEnum = {
        true: 'Si',
        false: 'No'
      };
    const [items, setItems] = useState([]);
    const [Carnet, setCarnet] = useState([])
    const navigate = useNavigate();

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
            console.log(items)
            if(sede===1 && tipo===2){
              setAsistenteCartago(true)
            }
          }).catch(error => {
              console.log(error)
          });


  }
  const Habilitar = () => {
    setError('')
    axios.put(`http://localhost:4000/asistente/HabilitarProfesor`, {
        Carnet:Carnet
      }
      , {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
        .then(response => {
          console.log(response)

        }).catch(error => {
            console.log(error)
        });
     
}
const Inhabilitar = () => {
  setError('')
  axios.put(`http://localhost:4000/asistente/InhabilitarProfesor`, {
      Carnet:Carnet
    }
    , {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => {
        console.log(response)

      }).catch(error => {
          console.log(error)
      });
   
}  
 
    return (
        <div>
        <NavBar Persona={{Persona}}/>
          {Error && <Message negative>{Error}</Message>}
        <div className='container'>
            <Form className="create-form">
                <h1>Consultar Miembros de un Equipo Guia</h1>
                <Form.Field>
                    <label>Nombre Equipo Guia</label>
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
                                    <Image src={item.Foto} rounded size='medium' /> 
                                </Table.Cell>
                                
                              <Table.Cell >{item.Carnet}</Table.Cell>
                                <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                <Table.Cell>{item.Correo}</Table.Cell>
                                <Table.Cell>{MyEnum[item.Coordinador]}</Table.Cell>
                                <Table.Cell>{item.Telefono}</Table.Cell>
                                <Table.Cell>{item.TelefonoOficina}</Table.Cell>
                                <Table.Cell>{Lugar[item.Sede - 1]}</Table.Cell>
                                <Table.Cell> 
                                {AsistenteCartago && item.Habilitado === true &&
                                    (<Link to={`/habilitarProfesor/${item.Carnet}`}state= {Persona}>
                                    <Button  > Inhabilitar </Button></Link> )}
                                </Table.Cell>
                                
                                <Table.Cell> 
                                {AsistenteCartago && item.Habilitado === false &&
                                    (<Link to={`/inhabilitarProfesor/${item.Carnet}`}state= {Persona}>
                                    <Button  > Habilitar </Button></Link> )}
                                </Table.Cell>
                                <Table.Cell> 
                                {AsistenteCartago ? (<Link to={`/modificarProfesor/${item.Carnet}`}state= {Persona}>
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
