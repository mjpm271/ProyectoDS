import axios from 'axios';
import React, { useState } from 'react';
import { Button,  Form , Table, Message} from 'semantic-ui-react'
import { useLocation, Link } from 'react-router-dom';

export default function VerEstudiantes() {
    const location = useLocation();
    const Persona = location.state;
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');
    const options = [
        { key: 'A', text: 'Alfabetico', value: 'Alfabetico' },
        { key: 'S', text: 'Sede', value: 'Sede' },
        { key: 'C', text: 'Carnet', value: 'Carnet' },
      ]
    console.log(Persona)

    const EstudiantesAlf = () => {
        setError('')
        axios.get(`http://localhost:4000/profesor/VerEstudiantesAlf`)
            .then(response => {
                const items = response.data
                setItems(items)
                // console.log(response.data)
                if(response.data.length === 0){
                    setError('No existe registro del plan consultado')
                }
                
            }).catch(error => {
                console.log(error)
            });
  }

  const EstudiantesSede = () => {
    setError('')
    axios.post(`http://localhost:4000/profesor/VerEstudiantesSede`)
        .then(response => {
            const items = response.data
            setItems(items)
            // console.log(response.data)
            if(response.data.length === 0){
                setError('No existe registro del plan consultado')
            }
            
        }).catch(error => {
            console.log(error)
        });
}

const EstudiantesCarnet = () => {
    setError('')
    axios.get(`http://localhost:4000/profesor/VerEstudianteCarnet`)
        .then(response => {
            const items = response.data
            setItems(items)
            // console.log(response.data)
            if(response.data.length === 0){
                setError('No existe registro del plan consultado')
            }
            
        }).catch(error => {
            console.log(error)
        });
}


//   const setData = (item) => {
//     let { IDplanTrabajo, Nombre, Abreviacion, IDcoordinador } = item;
//     console.log('item',item)

// }
const handleOptionChange = (event, data) => {
    // Aquí puedes manejar la opción seleccionada
    console.log(data.value);

    if(data.value === 'Alfabetico'){
        EstudiantesAlf()
    }if(data.value === 'Sede'){
        EstudiantesSede()
    }if(data.value ==='Carnet'){
        EstudiantesCarnet()
    }
    // ...
  };

    return (
        <div className="container">
            <h1>Ver Estudiantes</h1>
            <Form className="create-form">
            <Form.Select
            fluid
            label='MostrarContenido'
            options={options}
            onChange={handleOptionChange}
            placeholder='Contenido'
          />
            </Form>
            <div> 
            {error && <Message negative>{error}</Message>}
            <Table textAlign='center'  singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Carnet </Table.HeaderCell>
                        <Table.HeaderCell>Nombre Completo </Table.HeaderCell>
                        <Table.HeaderCell>Correo </Table.HeaderCell>
                        <Table.HeaderCell>Telefono</Table.HeaderCell>
                        <Table.HeaderCell>Sede</Table.HeaderCell>

                        <Table.HeaderCell>Modificar</Table.HeaderCell>
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
                                <Link to={`/modificarEstudiante/${item.IDplanTrabajo}`}>
                                    <Table.Cell> 
                                        <Button  > Modificar </Button>
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