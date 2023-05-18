import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';

export default function Actividad(){
  const { planId, activityId } = useParams();
  const [activities] = useState([
    { id: 1, name: 'Actividad 1', planId: 1 },
    { id: 2, name: 'Actividad 2', planId: 1 },
    { id: 3, name: 'Actividad 3', planId: 2 },
    { id: 4, name: 'Actividad 4', planId: 2 },
  ]);

  const [comments] = useState([
    { id: 1, text: 'Comentario 1', activityId: 1 },
    { id: 2, text: 'Comentario 2', activityId: 1 },
    { id: 3, text: 'Comentario 3', activityId: 2 },
    { id: 4, text: 'Comentario 4', activityId: 2 },
  ]);

  const activity = activities.find((activity) => activity.id === Number(activityId));
  const filteredComments = comments.filter((comment) => comment.activityId === Number(activityId));

  return (

    <Grid columns='equal'>
    <Grid.Row>
        <Grid.Column>
          <Segment>Numero Actividad</Segment>
        </Grid.Column>
        <Grid.Column>
          
        </Grid.Column>
        <Grid.Column>
          <Segment>Semana</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Fecha Publicacion</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Coordinador</Segment>
        </Grid.Column>

      </Grid.Row>
      
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment>
          <h4>Seccion 1</h4>
          <p>Fecha Actividad: </p>
          <p>Dias Previos: </p>
          <p>Dias requeridos: </p>
          <p>Tipo Actividad: </p>
          <p> Modalidad: </p>
          <p>Lugar o enlace: </p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Responsables</Segment>
          <Segment>Afiche</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Historial de Comentarios</Segment>
          <Segment>Comentar</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Grid>
    // ESTO ES PARA LOS COMENTARIOS
    // <div>
    //   <h1>Actividad: {activity.name}</h1>
    //   <h2>Comentarios:</h2>
    //   <ul>
    //     {filteredComments.map((comment) => (
    //       <li key={comment.id}>{comment.text}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};


