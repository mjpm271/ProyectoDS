import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import { Button,  Form, Dropdown, DropdownItem, DropdownMenu, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

export default function AgregarProfesor() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
        /* IMPORTANTE PASAR */
    const [Carnet, setCarnet] = useState();
    const [NombreCompleto, setNombreCompleto] = useState();
    const [Correo, setCorreo] = useState();
    const [Contra, setContra] = useState();
    const Habilitado = true;
    const Coordinador = false;
    const [Telefono, setTelefono] = useState();
    const [TelefonoOficina, setTelefonoOficina] = useState();
    const [Sede, setSede] = useState();
    const [IDtipo, setIDtipo] = useState(1);
    const [Foto, setFoto] = useState();
    const [selectedValues, setSelectedValues] = useState({});
    // const [APIData, setAPIData] = useState([]);
    const postData = () => {
        
        axios.post('http://localhost:4000/asistente/AgregarProfesor', {
            Carnet:Carnet,
            NombreCompleto:NombreCompleto,
            Correo:Correo,
            Contra:Contra,
            Habilitado:true,
            Coordinador:false,
            Telefono:Telefono,
            TelefonoOficina:TelefonoOficina,
            Sede:Sede,
            IDtipo:1,
            Foto:Foto
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

        // fetch('http://localhost:4000/ejemplo/asistente/AgregarProfesor',{
        //     method : 'post',
        //     mode: 'cors',
        //     body: formData,
        //     headers: { "Content-Type": "multipart/form-data" }
        // })

        //axios.post(`http://localhost:4000/ejemplo/asistente/AgregarProfesor`,{ID,NombreCompleto,Correo,Contra,Habilitado,Coordinador,Sede,IDtipo})
        console.log(typeof Carnet);
        console.log(NombreCompleto);
        console.log(typeof Sede);
    }
    useEffect(() => {
        const selectedDropdownValues = Object.values(selectedValues);
        // Assign the selected values to a constant variable
        const selectedValuesConst = selectedDropdownValues.map((value) => parseInt(value));
        // Do something with the constant variable
        setSede(selectedValuesConst[0])
        console.log(selectedValuesConst);
    }, [selectedValues]);
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
    const convert2base64 = e =>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend =() =>{
            setFoto(reader.result.toString())
        }
        reader.readAsDataURL(file);
    }
    const dropdownOptionsSede = [
        { id: 1, value: 1, label: 'Cartago' },
        { id: 2, value: 2, label: 'San Jose' },
        { id: 3, value: 3, label: 'Alajuela' },
        { id: 4, value: 4, label: 'San Carlos' },
        { id: 5, value: 5, label: 'Limon' },
    ];
 
    return (
        <div>
        <div>
            <Navbar />
        </div>    
        <div className="container">
            <Form className="create-form">
                
                <Form.Field>
                    <label>Carnet </label>
                    <input placeholder='Carnet' onChange={(e) => setCarnet(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nombre Completo </label>
                    <input placeholder='Nombre Completo' onChange={(e) => setNombreCompleto(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Correo</label>
                    <input placeholder='Correo' onChange={(e) => setCorreo(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Contra</label>
                    <input placeholder='Contra' onChange={(e) => setContra(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Telefono</label>
                    <input placeholder='Telefono' onChange={(e) => setTelefono(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Telefono Oficina</label>
                    <input placeholder='Telefono Oficina' onChange={(e) => setTelefonoOficina(e.target.value)}/>
                </Form.Field>
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
                    <label>Foto</label>
                    <input placeholder='Foto' onChange={(e) => setFoto(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <Footer/>
        </div>
        </div>
    )
}
