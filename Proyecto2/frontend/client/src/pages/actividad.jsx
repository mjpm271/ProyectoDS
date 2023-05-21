import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import Navbar from '../components/Navbar'
import axios from 'axios';

export default function Actividad(){
  const { planId, activityId } = useParams();
  const [actividad, setActividad] = useState([]);

  const [IDmodalidad, setIDmodalidad] = useState([]);
  const [Modalidad, setModalidad] = useState([]);

  const [IDtipoActividad, setIDtipoActividad] = useState([]);
  const [TipoActividad, setTipoActividad] = useState([]);

  const [Coordinador, setCoordinador] = useState([]);


  const [IDestado, setIDestado] = useState([]);
  const [Estado, setEstado] = useState([]);

  useEffect(() => {
    axios.post(`http://localhost:4000/profesor/VerActividad`, {
      IDactividad:activityId
      }
      , {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
          .then((response) => {
              console.log(response.data)
              setActividad(response.data)

              actividad.map((informacion)=>(
                setIDmodalidad(informacion.IDmodalidad),
                setIDestado(informacion.IDtipoEstado),
                setIDtipoActividad(informacion.IDtipoActividad)
              ))

              console.log(IDestado)
              

          })
  }, []);

const definiciones = () =>{
  definirModalidad();
  definirTipoActividad();
  definirEstado();
}
  const definirModalidad = () => {

    switch (IDmodalidad) {
      case 1:
        setModalidad('PRESENCIAL')
        break;
      case 2: 
      setModalidad('VIRTUAL')
        break;
      default:
        console.log('default');
    }
 }

 const definirTipoActividad = () => {
  //  ORIENTADORA;
  //  MOTIVACIONAL;
  //  APOYO_VIDA_ESTUDIANTIL;
  //  ORDEN_TECNICO;
  //  RECREACION;
  console.log("Actividad", IDtipoActividad)
  switch (IDtipoActividad) {
    case 1:
      setTipoActividad('ORIENTADORA')
      break;
    case 2: 
    setTipoActividad('MOTIVACIONAL')
      break;
    case 3: 
    setTipoActividad('APOYO_VIDA_ESTUDIANTIL')
      break;
    case 4: 
    setTipoActividad('ORDEN_TECNICO')
      break;  
    case 5: 
    setTipoActividad('RECREACION')
      break;                 
    default:
      console.log('default');
  }
}

const definirEstado = () => {
  //  PLANEADA;
  //  NOTIFICADA;
  //  REALIZADA;
  //  CANCELADA;
  switch (IDestado) {
    case 1:
      setEstado('PLANEADA')
      break;
    case 2: 
      setEstado('NOTIFICADA')
        break;
    case 3: 
      setEstado('REALIZADA')
        break;   
    case 4: 
      setEstado('CANCELADA')
        break;         
    default:
      console.log('default');
  }
}

 definiciones();
  return (
    
    <div>
      <Navbar/>
      {actividad.map((info)=>(

      
    <Grid columns='equal'>
    <Grid.Row>
        <Grid.Column>
          <Segment>Numero Actividad: {info.IDactividad} </Segment>
        </Grid.Column>
        <Grid.Column>
          
        </Grid.Column>
        <Grid.Column>
          <Segment>Semana: {info.Semana} </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Fecha Publicacion: {info.FechaPublicacion} </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Coordinador:  </Segment>
        </Grid.Column>

      </Grid.Row>
      
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment>
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


