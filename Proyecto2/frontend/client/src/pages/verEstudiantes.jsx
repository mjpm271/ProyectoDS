import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button,  Form , Table, Message} from 'semantic-ui-react'
import { useLocation, Link } from 'react-router-dom';

export default function VerEstudiantes() {
    const location = useLocation();
    const Persona = location.state;

    const info = JSON.parse(Persona)
    const sede = info.Sede

    const [rutaGuardado, setrutaGuardado] = useState();
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');
    const [seleccionSede,setSeleccionSede] = useState(false)
    const [selectedValues, setSelectedValues] = useState({});
    const [Sede, setSede] = useState(0);
    const [codSede, setcodSede] = useState()
    const options = [
        { key: 'A', text: 'Alfabetico', value: 'Alfabetico' },
        { key: 'S', text: 'Sede', value: 'Sede' },
        { key: 'C', text: 'Carnet', value: 'Carnet' },
      ]
      const dropdownOptionsSede = [
        { id: 1, value: 1, label: 'Cartago', abreviacion: 'CA' },
        { id: 2, value: 2, label: 'San Jose', abreviacion: 'SJ' },
        { id: 3, value: 3, label: 'Alajuela', abreviacion: 'AL' },
        { id: 4, value: 4, label: 'San Carlos', abreviacion: 'SC' },
        { id: 5, value: 5, label: 'Limon', abreviacion: 'LM' },
    ];

    
    const handleDropdownChange = (dropdownId, value) => {
        setSelectedValues((prevState) => ({
        ...prevState,
        [dropdownId]: value,
        }));
        setSede(value)
        
    };



    const EstudiantesAlf = () => {
        setError('')
        axios.get(`http://localhost:4000/profesor/VerEstudiantesAlf`)
            .then(response => {
                const items = response.data
                setItems(items)
                // console.log(response.data)
                if(response.data.length === 0){
                    setError('')
                }
                
            }).catch(error => {
                console.log(error)
            });
  }

  const EstudiantesSede = () => {
    setError('')
    axios.post(`http://localhost:4000/profesor/VerEstudiantesSede`,{Sede:Sede})
        .then(response => {
            const items = response.data
            setItems(items)
            // console.log(response.data)
            if(response.data.length === 0){
                setError('No hay estudiantes de esta Sede')
            }
            
        }).catch(error => {
            console.log(error)
        });
}

const EstudiantesCarnet = () => {
    setError('')
    axios.get(`http://localhost:4000/profesor/VerEstudianteCarnet`)
        .then(response => {
            const items = response.data
            setItems(items)
            // console.log(response.data)
            if(response.data.length === 0){
                setError('No existe registro del plan consultado')
            }
            
        }).catch(error => {
            console.log(error)
        });
}

const DescargarExcelSede = () => {
    setError('')
    axios.post(`http://localhost:4000/asistente//DescargarInformacionEstudiantes`,
        {sede:sede, 
        codSede: dropdownOptionsSede[sede - 1]['abreviacion'], 
        rutaGuardado: rutaGuardado})
        .then(response => {
            const items = response.data
            setItems(items)
            // console.log(response.data)
            if(response.data.length === 0){
                setError('No hay estudiantes de esta Sede')
            }
            
        }).catch(error => {
            console.log(error)
        });
}
const DescargarExcelTodos = () => {
    setError('')
    axios.post(`http://localhost:4000/asistente//DescargarInformacionEstudiantes`,
        {sede:0, 
        codSede: 'Todas_las_Sedes', 
        rutaGuardado: rutaGuardado})
        .then(response => {
            const items = response.data
            setItems(items)
            // console.log(response.data)
            if(response.data.length === 0){
                setError('No hay estudiantes de esta Sede')
            }
            
        }).catch(error => {
            console.log(error)
        });
}
//   const setData = (item) => {
//     let { IDplanTrabajo, Nombre, Abreviacion, IDcoordinador } = item;
//     console.log('item',item)

// }
const handleOptionChange = (event, data) => {
    // Aquí puedes manejar la opción seleccionada
    console.log(data.value);

    if(data.value === 'Alfabetico'){
        setSeleccionSede(false)
        EstudiantesAlf()
    }if(data.value === 'Sede'){
        setSeleccionSede(true)
        // EstudiantesSede()
    }if(data.value ==='Carnet'){
        setSeleccionSede(false)
        EstudiantesCarnet()
    }
    // ...
  };
  useEffect(() => {
    const selectedDropdownValues = Object.values(selectedValues);
    // Assign the selected values to a constant variable
    const selectedValuesConst = selectedDropdownValues.map((value) => parseInt(value));
    // Do something with the constant variable
    setSede(selectedDropdownValues.map((value) => parseInt(value)))
    EstudiantesSede();
    console.log(selectedValuesConst);
    console.log("SEDE",Sede)
}, [selectedValues]);

    return (
        <div className="container">
            
            <h1>Ver Estudiantes</h1>
            <div>
            <Button.Group>
            <Button  onClick={DescargarExcelSede} > Descargar por Sede</Button>    
            <p></p>
            
            <Button  onClick={DescargarExcelTodos} > Descargar Todos</Button>    
            <p></p>
            </Button.Group>{' '}
            <Form>
                <Form.Field>
                <label>Ruta </label>
                <input placeholder='Ruta' onChange={(e) => setrutaGuardado(e.target.value)}/>
                </Form.Field>
            </Form>

            </div>
            <Form className="create-form">
                <Form.Select
                fluid
                label='MostrarContenido'
                options={options}
                onChange={handleOptionChange}
                placeholder='Contenido'
            />
           
            </Form>
            {seleccionSede && <select
                    id="Sede"
                    value={selectedValues.Sede || ''}
                    onChange={(e) => handleDropdownChange('Sede', e.target.value)}>
                    <option value="">Seleccione una Sede</option>
                    {dropdownOptionsSede.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>}
            
            <div> 
            {error && <Message negative>{error}</Message>}
            <Table textAlign='center'  singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Carnet </Table.HeaderCell>
                        <Table.HeaderCell>Nombre Completo </Table.HeaderCell>
                        <Table.HeaderCell>Correo </Table.HeaderCell>
                        <Table.HeaderCell>Telefono</Table.HeaderCell>
                        <Table.HeaderCell>Sede</Table.HeaderCell>

                        <Table.HeaderCell>Modificar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

            <Table.Body>
                    {items.map((item) => {
                        return (
                            <Table.Row>

                                <Table.Cell>{item.Carnet}</Table.Cell>
                                <Table.Cell>{item.NombreCompleto}</Table.Cell>
                                <Table.Cell>{item.Correo}</Table.Cell>
                                <Table.Cell>{item.Telefono}</Table.Cell>
                                <Table.Cell>{item.Sede}</Table.Cell>
                                {item.Sede === sede && <Link to={`/modificarEstudiante/${item.Carnet}`}>
                                    <Table.Cell> 
                                        <Button  > Modificar </Button>
                                    </Table.Cell>
                                </Link> }
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
                </div>
        </div>
    )
}