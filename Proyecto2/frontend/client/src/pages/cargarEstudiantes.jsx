import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label, Message} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function CargarEstudiantes() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
        /* IMPORTANTE PASAR */

    const [Sede, setSede] = useState();
    const [Ruta, setRuta] = useState();
    const [selectedValues, setSelectedValues] = useState({});

    useEffect(() => {
        const selectedDropdownValues = Object.values(selectedValues);
        // Assign the selected values to a constant variable
        const selectedValuesConst = selectedDropdownValues.map((value) => parseInt(value));
        // Do something with the constant variable
        setSede(selectedValuesConst[0])
        //console.log(selectedValuesConst);
    }, [selectedValues]);
    
    
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/asistente//SubirInformacionEstudiantes', {
            rutaExcel:Ruta,
            sede:Sede
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          ).then(response => {
              console.log(response.data[0][""]); // Leer el valor del output recibido
              console.log(response.data[0]);
            //   showAlert((response.data[0]))
            }).catch(Error => {
                console.log('hay Error')
                console.log(Error)
            });

    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any further processing here
    };
    const handleDropdownChange = (dropdownId, value) => {
        setSelectedValues((prevState) => ({
        ...prevState,
        [dropdownId]: value,
        }));
    };

    const dropdownOptionsSede = [
        { id: 1, value: 1, label: 'Cartago' },
        { id: 2, value: 2, label: 'San Jose' },
        { id: 3, value: 3, label: 'Alajuela' },
        { id: 4, value: 4, label: 'San Carlos' },
        { id: 5, value: 5, label: 'Limon' },
    ];
 
    return (
        <div>
            <Navbar />
          

        <div className="container">
            <h1> Cargar Estudiantes</h1>
            <Form className="create-form">
                
                <label htmlFor="Sede">Sede:</label>
                <select
                    id="Sede"
                    value={selectedValues.Sede || ''}
                    onChange={(e) => handleDropdownChange('Sede', e.target.value)}>
                    <option value="">Select an option</option>
                    {dropdownOptionsSede.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <Form.Field>
                    <label>Ruta</label>
                    <input placeholder='Ruta' onChange={(e) => setRuta(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
        </div>
    )
}
