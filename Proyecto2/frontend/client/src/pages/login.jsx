import axios from 'axios';
import React, { useState  } from 'react';
import { useNavigate } from "react-router-dom";
import { Button,  Form } from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function Login() {
    const navigate = useNavigate();
    const [Correo, setCorreo] = useState();
    const [Contra, setContra] = useState();
    const [items, setItems] = useState([]);

    // const [APIData, setAPIData] = useState([]);

    const Autenticar = (items) =>{
        if (items.recordset.length === 0 ){
            navigate("/ReadPersona")
        }
        else{
            navigate('/create')
        }
    }
    const postData = () => {
        
        axios.post('http://localhost:4000/index/login', {

            Correo:Correo,
            Contra:Contra,
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              console.log(response.data)
              const items = response.data
              setItems(items)
              Autenticar(items);
              
            }).catch(error => {
                console.log(error)
            });
    }
 
    return (
        <div>
            <Navbar />
            <Form className="create-form">
                <Form.Field>
                    <label>Correo</label>
                    <input placeholder='Correo' onChange={(e) => setCorreo(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Contra</label>
                    <input placeholder='Contra' onChange={(e) => setContra(e.target.value)}/>
                </Form.Field>

                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
    )
}