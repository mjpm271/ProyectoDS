import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Form, Table, Message } from 'semantic-ui-react'
import { useLocation, Link } from 'react-router-dom';
import NavBar from '../components/NavBar2';
import { Alert } from 'bootstrap';
export default function IniciarChat() {
    const location = useLocation();
    const Persona = location.state;

    const info = JSON.parse(Persona)
    const sede = info.Sede
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');
    const [Carnet, setCarnet] = useState(0);
    const [numSalaChat, setnumSalaChat] = useState(0);
    const [SalaChat, setSalaChat] = useState(0);
    const [numSala, setnumSala] = useState(0);
    const [IDAgregado, setIDAgregado] = useState(0);
    const VerPersonaID = () => {
        setError('')
        axios.post(`http://localhost:4000/profesor/VerPersonaPorID`, { Carnet: Carnet })
            .then(response => {
                const items = response.data
                setItems(items)
                // console.log(response.data)
                if (response.data.length === 0) {
                    setError('No existe ')
                }

            }).catch(error => {
                console.log(error)
            });
    };
    const ChatPorID = () => {
        setError('')
        axios.post(`http://localhost:4000/profesor/ChatPorID`, { numSala: numSala })
            .then(response => {
                if (response.data.length > 0) {
                    alert('Se va  agregar a una sala de chat existente');
                    AgregarAlChat()
                }
                else {
                    alert('Se va  agregar a una sala de chat nueva');
                    CrearSala()
                }
                

            }).catch(error => {

                alert('Un error ha ocurrido');
                console.log(error)
            });
    }
    const CrearSala = () => {
        setError('')
        axios.post(`http://localhost:4000/profesor/CrearSala`, { numSala:numSala ,SalaChat: SalaChat })
            .then(response => {
                // console.log(response.data)
               {AgregarAlChat()}
                
            }).catch(error => {
                alert('Un error ha ocurrido');
                console.log(error)
            });
    };

    const AgregarAlChat = () => {
        
        setError('')
        axios.post(`http://localhost:4000/profesor/AgragarAlChat`, { numSala: numSala, IDAgregado: IDAgregado })
            .then(response => {
                // console.log(response.data)
                alert('Agregado con Exito');

            }).catch(error => {
                alert('Un error ha ocurrido');
                console.log(error)
            });
    };

    return (
        <div>
            <NavBar Persona={{ Persona }} />
            <div className="container">

                <h1>Agregar al Chat</h1>
                <div>
                    <Form className="create-form">
                        <Form.Field>
                            <label>Nombre de la Sala de Chat</label>
                            <input placeholder='numero de Sala de Chat' onChange={(e) => setnumSala(e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Nombre de la Sala de Chat</label>
                            <input placeholder='Sala de Chat' onChange={(e) => setSalaChat(e.target.value)} />
                        </Form.Field>

                        <Form.Field>
                            <label>Buscar por carnet</label>
                            <input placeholder='Carnet' onChange={(e) => setCarnet(e.target.value)} />
                        </Form.Field>

                        <Button onClick={VerPersonaID} type='submit'>Buscar</Button>

                    </Form>

                </div>
                                
                <div>

                    <Table textAlign='center' singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Carnet </Table.HeaderCell>
                                <Table.HeaderCell>Nombre Completo </Table.HeaderCell>
                                <Table.HeaderCell>Correo </Table.HeaderCell>
                                <Table.HeaderCell>Telefono</Table.HeaderCell>
                                <Table.HeaderCell>Sede</Table.HeaderCell>

                                <Table.HeaderCell>Agregar</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {items.map((item) => {
                                return (
                                    <Table.Row>

                                        <Table.Cell>{item.Carnet}</Table.Cell>
                                        <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                        <Table.Cell>{item.Correo}</Table.Cell>
                                        <Table.Cell>{item.Telefono}</Table.Cell>
                                        <Table.Cell>{item.Sede}</Table.Cell>
                                        {item.Sede === sede && 
                                            <Table.Cell>
                                                <Button onClick={() => {
                                                    setIDAgregado(item.Carnet)
                                                    ChatPorID()
                                                }}> Agregar </Button>
                                            </Table.Cell>
                                        }
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