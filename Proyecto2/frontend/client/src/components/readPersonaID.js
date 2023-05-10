import axios from 'axios';
import React, { useState  } from 'react';
import { Button,  Form } from 'semantic-ui-react'

export default function ReadPersona() {
    const [IDpersona, setIDpersona] = useState();

    // const [APIDpersonaata, setAPIDpersonaata] = useState([]);
    const postData = () => {

        axios.post(`http://localhost:4000/ejemplo/asistente/BuscarProfesor`, {
            IDpersona:IDpersona
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
            <Form className="create-form">
                <Form.Field>
                    <label>IDpersona </label>
                    <input placeholder='IDpersona' onChange={(e) => setIDpersona(parseInt( e.target.value))}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}