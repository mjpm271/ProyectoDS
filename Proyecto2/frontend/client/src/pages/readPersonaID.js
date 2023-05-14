import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Button,  Form , Table} from 'semantic-ui-react'

export default function ReadPersona() {

    const [IDpersona, setIDpersona] = useState();
    const [items, setItems] = useState([]);
  //   useEffect( () => {
  //     fetchItems();
  // }, []);



  //   const fetchItems = async() => {
  //     const data = await axios.post(`http://localhost:4000/ejemplo/asistente/BuscarProfesor`, {IDpersona:IDpersona});
  //     const items = await data.json();
  //     setItems(items);
  //   }
  // useEffect(() => (
    //   (async () => {
    //     const resp = await axios.get(`http://localhost:4000/ejemplo/asistente/BuscarProfesor`)
    //   //   const data1 = await JSON.stringify(resp)
    //     .then((resp) =>{
    //       setAPIData(resp.data)
    //     })
  
    //   })
  
    // ), []);
    const buscar = () => {

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
            const items = response.data
            setItems(items)
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

                <Button onClick={buscar} type='submit'>Submit</Button>

            </Form>
            <div> 
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>IDpersona </Table.HeaderCell>
                        <Table.HeaderCell>Nomre Completo </Table.HeaderCell>
                        <Table.HeaderCell>Sede </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>

                                <Table.Cell>{item.IDpersona}</Table.Cell>
                                <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                <Table.Cell>{item.Sede}</Table.Cell>
                                
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                </div>
        </div>
    )
}