import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Grid, Segment , List, Button} from 'semantic-ui-react';
import Comments from "../comentarios/Comments";
// import Navbar from '../components/Navbar'
import axios from 'axios';
import NavBar from '../components/NavBar2';

export default function Actividad() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    const info = JSON.parse(Persona)
    // const id = info.IDpersona
    const ID = info.IDpersona
    const tipo = info.IDtipo
    console.log("Persona",info.IDpersona)
    /* IMPORTANTE PASAR */
  const [habilitarComentarios, sethabilitarComentarios]= useState(false)  
  const { planId, activityId } = useParams();

  const Actividad = null
  const Modalidad = ['Presencial', 'Remoto'];
  const TipoAct = ['Orientadora', 'Motivacional', 'Apoyo Vida Estudiantil', 'Orden Tecnico', 'Recreacion'];
  const Estado = ['Planeada', 'Notificada', 'Realizada', 'Cancelada'];
  const [items, setItems] = useState([]);
  const [Habilitado, setHabilitado] =  useState([]);

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
        
        setItems(response.data);
        Actividad = response.data[0].IDactividad
        

      }).catch(error => {
        console.log(error)
      })
      buscarResponsables();
      Habilitados();
  }, []);



  const buscarResponsables = () => {

    axios.post(`http://localhost:4000/coordinador/VerResponsables`,{IDactividad:activityId})
        .then(response => {
            const items = response.data
            setResponsables(items)
            // console.log(response.data)
            
            
        }).catch(error => {
            console.log(error)
        })
}

  const Habilitar = () => {

      axios.post('http://localhost:4000/notificacion/HabilitarNotificaciones', {
        IDactividad: activityId,
        IDpersona:ID

        }
        , {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        )
          .then(response => {
            console.log('entre');
          }).catch(error => {
              console.log(error)
          });
  }
  const Deshabilitar = () => {

    axios.post('http://localhost:4000/notificacion/DeshabilitarNotificaciones', {
      IDactividad: activityId,
      IDpersona:ID

      }
      , {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
        .then(response => {
          console.log('entre');
        }).catch(error => {
            console.log(error)
        });
}

  const Habilitados = () => {

    axios.post('http://localhost:4000/notificacion/Habilitado', {
      IDactividad: activityId,
        IDpersona:ID

      }
      , {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
        .then(response => {
          // console.log(response.data[0].Habilitado);
          setHabilitado(response.data[0].Habilitado);
        }).catch(error => {
            console.log(error)
        });
}


  const Comentarios = () => {
    sethabilitarComentarios(true)
  };

  
  return (
    
    <div>
      <NavBar Persona={{Persona}}/>
      {items.map((info)=>(

      
    <Grid columns='equal'>
    <Grid.Row>
        <Grid.Column>
          <Segment>Nombre Actividad: {info.Nombre} </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment textAlign='center' >
            
            {Habilitado === false && <Button onClick={Habilitar} type='Submit'>Activar Notificaciones</Button>}
              
            {Habilitado === true && <Button onClick={Deshabilitar} type='Submit'>Desactivar Notificaciones</Button>} 
          </Segment>
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
          <p>Tipo Actividad: {TipoAct[info.IDtipoActividad - 1]}</p>
          <p> Modalidad: {Modalidad[info.IDmodalidad - 1]}   </p>
          <p>Lugar o enlace:  
          <a href={info.Linkreunion}>Enlace</a>
          </p>
          
          <p> Estado: {Estado[info.IDtipoEstado - 1]}  </p>
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
          <Segment>'
              <h2>Afiche</h2>
              <a href={info.Afiche}>Enlace Afiche</a>
              <p></p>
              {Estado[info.IDtipoEstado - 1] === 'Realizada' && <Link to='/verEvidencias'state={Persona}><Button>Evidencias</Button></Link>}
              {Estado[info.IDtipoEstado - 1] === 'CANCELADA' && <Link to='/verObservacion'state={Persona}><Button>Observaciones</Button></Link>}
          </Segment>
        </Grid.Column>
        {(tipo !== 2 && tipo !==3 )&& 
        <Grid.Column>
          <Segment style={{ overflow: 'auto', maxHeight: '50vh' }}>
            <Button color='blue' onClick={Comentarios}>Ver Comentarios</Button>
            {habilitarComentarios === true &&
            <Comments
        commentsUrl="http://localhost:3000/comentario"
        currentUserId="1"
        IDpersona = {ID}
        IDactividad ={activityId}
      />}
          </Segment>
          
        </Grid.Column>}
      </Grid.Row>
    </Grid>
    </Grid>
    ))}


    </div>
  );
};


