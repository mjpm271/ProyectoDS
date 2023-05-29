import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Grid, Segment} from 'semantic-ui-react'
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

            </div>
        </div>
    )
}
