import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CambioContra() {
  const { id } = useParams();
  const [Contra, setContra] = useState();
  const postData = () => {
      
      axios.post('http://localhost:4000/index/CambiarContraseña', {
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
          }).catch(error => {
              console.log(error)
          });


  }
  return (
      <div>
          <Navbar />
          <Form className="create-form">
              <Form.Field>
                  <label>Contra </label>
                  <input placeholder='Contra' onChange={(e) => setContra(e.target.value)}/>
              </Form.Field>
              <Button onClick={postData} type='submit'>Submit</Button>
          </Form>
          <Footer/>
      </div>
  )
}
