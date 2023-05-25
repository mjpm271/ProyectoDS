import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Button,  Form , Table, Header, Image} from 'semantic-ui-react'

export default function SiguienteActividad() {
    const [FechaActual, setFechaActual] = useState(new Date());
    const Modalidad = ['Presencial', 'Remoto'];
    const TipoAct = ['Orientadora', 'Motivacional', 'Apoyo Vida Estudiantil', 'Orden Tecnico', 'Recreacion'];
    const Estado = ['Planeada', 'Notificada', 'Realizada', 'Cancelada'];
    const [items, setItems] = useState([]);

    useEffect(() => { 
        axios.post('http://localhost:4000/asistente/SiguienteActividad', {
            FechaActual:FechaActual
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              setItems(response.data);
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

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,FechaActual,Fecha,Contra,Cantidaddiasprevistos,Cantidaddiasrequeridos,Afiche,IDtipo})

    },[]
);
 
    return ( 
        <div>

            <div> 

            <Table class="ui blue table" singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>IDactividad </Table.HeaderCell>
                        <Table.HeaderCell>Nombre </Table.HeaderCell>
                        <Table.HeaderCell>Semana </Table.HeaderCell>
                        <Table.HeaderCell>Fecha </Table.HeaderCell>
                        <Table.HeaderCell>Cantidad dias previos </Table.HeaderCell>
                        <Table.HeaderCell>Cantidad dias requeridos </Table.HeaderCell>
                        <Table.HeaderCell>Fecha Publicacion </Table.HeaderCell>
                        <Table.HeaderCell>Link reunion </Table.HeaderCell>
                        <Table.HeaderCell>Afiche </Table.HeaderCell>
                        <Table.HeaderCell>Modalidad </Table.HeaderCell>
                        <Table.HeaderCell>Tipo Actividad </Table.HeaderCell>
                        <Table.HeaderCell>Tipo Estado </Table.HeaderCell>
                        <Table.HeaderCell>ID Plan de Trabajo </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{item.IDactividad}</Table.Cell>
                                <Table.Cell>{item.Nombre}</Table.Cell>
                                <Table.Cell>{item.Semana}</Table.Cell>
                                <Table.Cell>{item.Fecha}</Table.Cell>
                                <Table.Cell>{item.Cantidaddiasprevios}</Table.Cell>
                                <Table.Cell>{item.Cantidaddiasrequeridos}</Table.Cell>
                                <Table.Cell>{item.FechaPublicacion}</Table.Cell>
                                <Table.Cell>{item.Linkreunion}</Table.Cell>
                                <Table.Cell>{item.Afiche}</Table.Cell>
                                <Table.Cell>{Modalidad[item.IDmodalidad]}</Table.Cell>
                                <Table.Cell>{TipoAct[item.IDtipoActividad]}</Table.Cell>
                                <Table.Cell>{Estado[item.IDtipoEstado]}</Table.Cell>
                                <Table.Cell>{item.IDplanTrabajo}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            </div>
        </div>
    )
}
