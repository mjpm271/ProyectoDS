import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Button,  Form , List} from 'semantic-ui-react'

export default function ReadPersona() {
    const [IDpersona, setIDpersona] = useState();
    const [APIData, setAPIData] = useState([]);

    useEffect( () => {
      fetchItems();
    }, []);

    const fetchItems = async () => {
      const data = await fetch('http://localhost:4000/ejemplo/asistente/BuscarProfesor');
      const items = await data.json();
      setAPIData(items);
  };
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
    const ListExampleBasic = () => (
      <List>
        <List.Item>(NombreCompleto: APIData.NombreCompleto)</List.Item>
        {/* <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item> */}
      </List>
    )
    
    
    // useEffect(() => (
    //   (async () => {
    //     const resp = await axios.get(`http://localhost:4000/ejemplo/asistente/BuscarProfesor`)
    //   //   const data1 = await JSON.stringify(resp)
    //     .then((resp) =>{
    //       setAPIData(resp.data)
    //     })

    //   })

    // ), []);
 
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>IDpersona </label>
                    <input placeholder='IDpersona' onChange={(e) => setIDpersona(parseInt( e.target.value))}/>
                </Form.Field>

                <Button onClick={postData} type='submit'>Submit</Button>

            </Form>
            <div role="list" class="ui list">
              <div role="listitem" class="item">NombreCompleto</div>
              {/* <div role="listitem" class="item">Pears</div>
              <div role="listitem" class="item">Oranges</div> */}
            </div>
        </div>
    )
}