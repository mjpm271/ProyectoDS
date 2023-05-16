import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
// import Read from './components/read';
// import { BrowserRouter as Router, Route } from 'react-router-dom'



function Read(){

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/ejemplo/tipoPersona`)
        .then((response) => {
            console.log(response.data)
            setAPIData(response.data);
        })
}, []);



    return (
      <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>IDSede </Table.HeaderCell>
                        <Table.HeaderCell>Nombre </Table.HeaderCell>
                        <Table.HeaderCell>Abreviacion </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>

                                <Table.Cell>{data.IDsede}</Table.Cell>
                                <Table.Cell>{data.Nombre}</Table.Cell>
                                <Table.Cell>{data.Abreviacion}</Table.Cell>
                                
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    );
  
}


export default Read;