import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Grid, Segment} from 'semantic-ui-react'
import Navbar from '../components/Navbar'
import NavBar from '../components/NavBar2';
export default function SiguienteActividad() {
    const [FechaActual, setFechaActual] = useState(new Date());
    const Actividad = null
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
              Actividad = response.data[0].IDactividad
              console.log(response.data[0].IDactividad);
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

/*RESPONSABLES */
// useEffect(() => {
//     axios
//       .post(
//         'http://localhost:4000/profesor/ResponsableActividad',
//         { IDactividad: Actividad },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//         setActividad(response.data);

//         const informacion = response.data[0];
//         setActividadInfo({
//           IDmodalidad: informacion?.IDmodalidad,
//           IDtipoActividad: informacion?.IDtipoActividad,
//           IDestado: informacion?.IDtipoEstado
//         });

//         console.log(actividadInfo);
//       });
//   }, []);
 
    return ( 
        <div>
            <Navbar/>
            <div> 
            {items.map((item)=>(

            <Grid columns='equal'>
    <Grid.Row>
        <Grid.Column>
          <Segment>Numero Actividad: {item.IDactividad} </Segment>
        </Grid.Column>
        <Grid.Column>
          
        </Grid.Column>
        <Grid.Column>
          <Segment>Semana: {item.Semana} </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Fecha Publicacion: {item.FechaPublicacion} </Segment>
        </Grid.Column>
        

      </Grid.Row>
      
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment >
          <h4>Seccion 1</h4>
          <p>Fecha Actividad: {item.Fecha}  </p>
          <p>Dias Previos: {item.Cantidaddiasprevios} </p>
          <p>Dias requeridos: {item.Cantidaddiasrequeridos}  </p>
          <p>Tipo Actividad: {TipoAct[item.IDtipoActividad]} </p>
          <p> Modalidad: {Modalidad[item.IDmodalidad]}  </p>
          <p>Lugar o enlace: </p>
          <p> Estado: {Estado[item.IDtipoEstado]} </p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Responsables</Segment>
          <Segment>Afiche</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Grid>
    ))}
            {/* <Table class="ui blue table" singleLine>
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
            </Table> */}
            </div>
        </div>
    )
}
