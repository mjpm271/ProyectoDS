// import axios from 'axios';
// import React, { useState , useEffect } from 'react';
// import { Button,  Form , Table} from 'semantic-ui-react'

// export default function readEvidencias() {

//     const [IDactividad, setIDactividad] = useState();
//     const [items, setItems] = useState([]);

//     const buscar = () => {

//       axios.post(`http://localhost:4000/coordinador/readEvidencias`, {
//           IDactividad:IDactividad
//         }
//         , {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//         )
//           .then(response => {
//             const items = response.data
//             setItems(items)
//           }).catch(error => {
//               console.log(error)
//           });
//   }

 
//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                     <label>IDactividad </label>
//                     <input placeholder='IDactividad' onChange={(e) => setIDactividad(parseInt(e.target.value))}/>
//                 </Form.Field>

//                 <Button onClick={buscar} type='submit'>Submit</Button>

//             </Form>
//             <div> 
//             <Table color={"blue"} singleLine>
//                 <Table.Header>
//                     <Table.Row>
//                         <Table.HeaderCell>IDevidencia</Table.HeaderCell>
//                         <Table.HeaderCell>Fotos  </Table.HeaderCell>
//                         <Table.HeaderCell>Link Grabacion </Table.HeaderCell>
//                         <Table.HeaderCell>IDactividad </Table.HeaderCell>
//                     </Table.Row>
//                 </Table.Header>

//             <Table.Body>
//                     {items.map((item) => {
//                         return (
//                             <Table.Row>
//                                 <Table.Cell>{item.IDevidencia}</Table.Cell>
//                                 <Table.Cell>
//                                 <Header as='h4' image>
//                                   <Image src={item.Fotoparticipantes} rounded size='huge' /> 
//                                 </Header>
//                                 </Table.Cell>
//                                 <Table.Cell>{item.Linkgrabacion}</Table.Cell>
//                             </Table.Row>
//                         )
//                     })}
//                 </Table.Body>
//                 </Table>
//                 </div>
//         </div>
//     )
// }
