import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Grid, ListItem, Segment , List, Button} from 'semantic-ui-react';
import Comments from "../comentarios/Comments";
import Navbar from '../components/Navbar'
import axios from 'axios';

export default function Actividad() {
  const { planId, activityId } = useParams();
  const [actividad, setActividad] = useState([]);
  const [actividadInfo, setActividadInfo] = useState({
    IDmodalidad: null,
    IDtipoActividad: null,
    IDestado: null
  });
  const [Modalidad, setModalidad] = useState([]);
  const [TipoActividad, setTipoActividad] = useState([]);
  const [Estado, setEstado] = useState([]);
  const [Responsables, setResponsables] = useState([]);

  useEffect(() => {
    axios
      .post(
        'http://localhost:4000/profesor/VerActividad',
        { IDactividad: activityId },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => {
        console.log(response.data);
        setActividad(response.data);

        const informacion = response.data[0];
        setActividadInfo({
          IDmodalidad: informacion?.IDmodalidad,
          IDtipoActividad: informacion?.IDtipoActividad,
          IDestado: informacion?.IDtipoEstado
        });
        buscarResponsables();
        console.log(actividadInfo);
      });
  }, []);

  useEffect(() => {
    definirModalidad();
    definirTipoActividad();
    definirEstado();
    
  }, [actividadInfo]);

  const buscarResponsables = () => {

    axios.post(`http://localhost:4000/coordinador/VerResponsables`,{IDactividad:activityId})
        .then(response => {
            const items = response.data
            setResponsables(items)
            // console.log(response.data)
            
            
        }).catch(error => {
            console.log(error)
        });
}

  const definirModalidad = () => {
    switch (actividadInfo?.IDmodalidad) {
      case 1:
        setModalidad('PRESENCIAL');
        break;
      case 2:
        setModalidad('VIRTUAL');
        break;
      default:
        console.log('default');
    }
  };

  const definirTipoActividad = () => {
    switch (actividadInfo?.IDtipoActividad) {
      case 1:
        setTipoActividad('ORIENTADORA');
        break;
      case 2:
        setTipoActividad('MOTIVACIONAL');
        break;
      case 3:
        setTipoActividad('APOYO_VIDA_ESTUDIANTIL');
        break;
      case 4:
        setTipoActividad('ORDEN_TECNICO');
        break;
      case 5:
        setTipoActividad('RECREACION');
        break;
      default:
        console.log('default');
    }
  };

  const definirEstado = () => {
    switch (actividadInfo?.IDestado) {
      case 1:
        setEstado('PLANEADA');
        break;
      case 2:
        setEstado('NOTIFICADA');
        break;
      case 3:
        setEstado('REALIZADA');
        break;
      case 4:
        setEstado('CANCELADA');
        break;
      default:
        console.log('default');
    }
  };


  return (
    
    <div>
      <Navbar/>
      {actividad.map((info)=>(

      
    <Grid columns='equal'>
    <Grid.Row>
        <Grid.Column>
          <Segment>Nombre Actividad: {info.Nombre} </Segment>
        </Grid.Column>
        <Grid.Column>
          
        </Grid.Column>
        <Grid.Column>
          <Segment>Semana: {info.Semana} </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Fecha Publicacion: {info.FechaPublicacion} </Segment>
        </Grid.Column>
        

      </Grid.Row>
      
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment >
          <h4>Seccion 1</h4>
          <p>Fecha Actividad: {info.Fecha}  </p>
          <p>Dias Previos: {info.Cantidaddiasprevios} </p>
          <p>Dias requeridos: {info.Cantidaddiasrequeridos}  </p>
          <p>Tipo Actividad: {TipoActividad}  </p>
          <p> Modalidad: {Modalidad}  </p>
          <p>Lugar o enlace: </p>
          <p> Estado: {Estado}  </p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <h2>Responsables</h2>
            {Responsables.map((responsable)=>(
            <List>
            
                <ListItem>{responsable.IDpersona}</ListItem>
            
            </List>
            ))}
          </Segment>
          <Segment>
              {{Estado} === 'REALIZADA' && <Link to='/verEvidencias'><Button>Evidencias</Button></Link>}
              {{Estado} === 'CANCELADA' && <Link to='/verObservacion'><Button>Observaciones</Button></Link>}
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment style={{ overflow: 'auto', maxHeight: '50vh' }}>
            {/* <p>Historial de Comentarios</p> */}
            <Comments
        commentsUrl="http://localhost:3000/comentario"
        currentUserId="1"
        IDpersona = {2}
        IDactividad ={activityId}
      />
          </Segment>
          
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Grid>
    ))}
    {/* // ESTO ES PARA LOS COMENTARIOS
    // <div>
    //   <h1>Actividad: {activity.name}</h1>
    //   <h2>Comentarios:</h2>
    //   <ul>
    //     {filteredComments.map((comment) => (
    //       <li key={comment.id}>{comment.text}</li>
    //     ))}
    //   </ul>
    // </div> */}

    </div>
  );
};


