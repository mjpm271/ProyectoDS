import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form} from 'semantic-ui-react'
import NavBar from '../components/NavBar2';
import Footer from '../components/Footer';
import {useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Message } from 'semantic-ui-react';

export default function CambioContra() {
   /* IMPORTANTE PASAR */
   const location = useLocation();
   const Persona = location.state;
   const info = JSON.parse(Persona);
   const tipo = info.IDtipo;
   const coordinador = info.Coordinador
  //  const info = JSON.parse(Persona)
   console.log(Persona)
   // const id = info.IDpersona
  const { id } = useParams();
  const [Contra, setContra] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const verificacion = () =>{
    console.log(Contra.length)
    if(Contra.length <8 ){
      setError('Debe tener al menos 8 digitos');
    }else{
      setError('')
      postData()
    }

  }
  const postData = () => {
      
      axios.put('http://localhost:4000/index/CambiarContra', {
          Carnet: id,
          Contra:Contra
        }
        , {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        )
          .then(response => {
            console.log(response.data);
            if(tipo === 1 && coordinador===true){
              console.log('coordinador')
              navigate('/InicioCoordinador',{ state: Persona }); 
          }if(tipo === 1 && coordinador===false){
              navigate('/IncioProfesor',{ state: Persona });
          }if(tipo === 2 ){
              navigate('/InicioAsistente',{ state: Persona })
          }
          }).catch(error => {
              console.log(error)
          });
          

  }
  return (
    <div>
        <NavBar Persona={{Persona}}/>
          {error && <Message negative>{error}</Message>}
          <Form className="create-form">
              <Form.Field>
                  <label>Contra </label>
                  <input placeholder='Contra' onChange={(e) => setContra(e.target.value)}/>
              </Form.Field>
              <Button onClick={verificacion} type='submit'>Submit</Button>
          </Form>
          <Footer/>
      </div>
  )
}
