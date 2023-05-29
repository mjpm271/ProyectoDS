import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Grid, Segment, List} from 'semantic-ui-react'
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar2';

export default function SiguienteActividad() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    /* IMPORTANTE PASAR */  
    const [FechaActual, setFechaActual] = useState(new Date());
    const Actividad = null
    const Modalidad = ['Presencial', 'Remoto'];
    const TipoAct = ['Orientadora', 'Motivacional', 'Apoyo Vida Estudiantil', 'Orden Tecnico', 'Recreacion'];
    const Estado = ['Planeada', 'Notificada', 'Realizada', 'Cancelada'];
    const [items, setItems] = useState([]);
    const [Responsables, setResponsables] = useState([]);

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

            })
            buscarResponsables();

    },[]
);


const buscarResponsables = () => {

  axios.post(`http://localhost:4000/coordinador/VerResponsables`,{IDactividad:Actividad})
      .then(response => {
          const items = response.data
          setResponsables(items)
          // console.log(response.data)
          
          
      }).catch(error => {
          console.log(error)
      });
}
 
    return ( 
      <div>
      <NavBar Persona={{Persona}}/>
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
              <p>Tipo Actividad: {TipoAct[item.IDtipoActividad - 1]} </p>
              <p>Modalidad: {Modalidad[item.IDmodalidad - 1]}  </p>
              <p>Lugar o enlace: <a href={item.Linkreunion}>Link</a></p>
              <p>Estado: {Estado[item.IDtipoEstado - 1]} </p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
              <h2>Responsables</h2>
              {Responsables.map((responsable)=>(
              <List>
                <List.Item>
                  <List.Icon name='angle right'/>
                  <List.Content >{responsable.Carnet}-{responsable.NombreCompleto}</List.Content>
                </List.Item>
              </List>
              ))}
            </Segment>
                <Segment>
                    <h2>Afiche</h2>
                    <a href={item.Afiche}>Enlace afiche</a>
                </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Grid>
        ))}

            </div>
        </div>
    )
}
