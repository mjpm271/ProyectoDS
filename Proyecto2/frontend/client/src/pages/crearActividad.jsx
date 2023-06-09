import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import { Button,  Form, Grid, Segment} from 'semantic-ui-react'
// import Navbar from "../components/Navbar"
import NavBar from '../components/NavBar2';
import DateTimePicker from 'react-datetime-picker'
import DatePicker from 'react-date-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Footer from '../components/Footer';

export default function CrearActividad() {
        /* IMPORTANTE PASAR */
        const location = useLocation();
        const Persona = location.state;
        const info = JSON.parse(Persona)
        const id = info.Carnet
        /* IMPORTANTE PASAR */
        
    const utcTime = {timeZone: 'CST' };
    const [Nombre, setNombre] = useState();
    const [Semana, setSemana] = useState();
    const [Fecha, setFecha] = useState(new Date().toLocaleString('en-US', utcTime));
    const [Cantidaddiasprevios, setCantidaddiasprevios] = useState();
    const [Cantidaddiasrequeridos, setCantidaddiasrequeridos] = useState();
    const [FechaPublicacion, setFechaPublicacion] = useState(new Date());
    const [Linkreunion, setLinkreunion] = useState();
    const [Afiche, setAfiche] = useState();
    const [IDmodalidad, setModalidad] = useState();
    const [IDtipoActividad, setIDtipoActividad] = useState();
    const [IDtipoAfiche, setIDtipoAfiche] = useState();
    const [IDtipoEstado, setIDtipoEstado] = useState(1);
    const [IDplanTrabajo, setIDplanTrabajo] = useState();
    const [selectedValues, setSelectedValues] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const showAlert = (Result) => {
      switch (Result){
        case 0:
          window.alert('Ese nombre ya esta en uso');
          break 
        case 1:
          window.alert('La fecha de publicacion tiene que ser menor a la de ejecucion');
          break 
        case 2:
          window.alert('la cantidad de recordatorios no puede ser mayor a la diferencia entre las fechas');
          break
        default:
          window.alert('ha creado la actividad')
          
    }};

    // const [APIData, setAPIData] = useState([]);
    const postData = () => {

        axios.post('http://localhost:4000/coordinador/CrearActividad', {
            Nombre:Nombre,
            Semana:Semana,
            Fecha:Fecha,
            Cantidaddiasprevios:Cantidaddiasprevios,
            Cantidaddiasrequeridos:Cantidaddiasrequeridos,
            FechaPublicacion:FechaPublicacion,
            Linkreunion:Linkreunion,
            Afiche:Afiche,
            IDmodalidad:IDmodalidad,
            IDtipoActividad:IDtipoActividad,
            IDtipoAfiche: IDtipoAfiche,
            IDtipoEstado:IDtipoEstado,
            IDplanTrabajo:IDplanTrabajo
          }
          , {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
            .then(response => {
              console.log(response.data[0][""]);
              showAlert(response.data[0][""])
              if (response.data[0][""] === 3){
                navigate('/definirResponsable',{ state: Persona } )
              }
            }).catch(error => {
                console.log(error)
            });

        // fetch('http://localhost:4000/ejemplo/asistente/CrearActividad',{
        //     method : 'post',
        //     mode: 'cors',
        //     body: formData,
        //     headers: { "Content-Type": "multipart/form-data" }
        // })

        //axios.post(`http://localhost:4000/ejemplo/asistente/CrearActividad`,{ID,Semana,Fecha,Cantidaddiasprevios,Cantidaddiasrequeridos,Fechapublicacion,IDmodalidad,IDtipoActividad})
        //console.log(typeof Semana);
        //console.log(Fecha);
        //console.log(typeof Nombre);
    }
   const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    useEffect(() => {
        const selectedDropdownValues = Object.values(selectedValues);
        // Assign the selected values to a constant variable
        const selectedValuesConst = selectedDropdownValues.map((value) => parseInt(value));
        // Do something with the constant variable
        setModalidad(selectedValuesConst[0]);
        setIDtipoActividad(selectedValuesConst[1]);
        setIDtipoAfiche(selectedValuesConst[2]);
        //setIDtipoEstado(selectedValuesConst[3]);
        //console.log(selectedValuesConst);
    }, [selectedValues]);

    const handleDropdownChange = (dropdownId, value) => {
        setSelectedValues((prevState) => ({
        ...prevState,
        [dropdownId]: value,
        }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any further processing here
  };
        const dropdownOptionsModalidad = [
            { id: 1, value: 1, label: 'Presencial' },
            { id: 2, value: 2, label: 'Remoto' },
        ];
        const dropdownOptionstipoActividad = [
            { id: 1, value: 1, label: 'Orientadora' },
            { id: 2, value: 2, label: 'Motivacional' },
            { id: 3, value: 3, label: 'Apoyo vida estudiantil' },
            { id: 4, value: 4, label: 'Orden tecnico' },
            { id: 5, value: 5, label: 'Recreacion' },
        ];
        const dropdownOptionstipoAfiche = [
            { id: 1, value: 1, label: 'PDF' },
            { id: 2, value: 2, label: 'JPG' },
        ];
    return (
        <div>
        <NavBar Persona={{Persona}}/>
            <div  className="container" >
                <h1>Crear Actividad</h1>
                <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>
                        <label>Fecha </label>
                        <DateTimePicker onChange={setFecha} value={Fecha} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                        <label>Fecha Publicacion</label>
                        <DatePicker onChange={setFechaPublicacion} value={FechaPublicacion} />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            {/* <div>
                <label>Fecha </label>
                <DateTimePicker onChange={setFecha} value={Fecha} />
            </div>
            
            <div>
                <label>Fecha Publicacion</label>
                <DatePicker onChange={setFechaPublicacion} value={FechaPublicacion} />
            </div> */}

            <Form className="create-form">
                
                <Form.Field>
                    <label>Nombre </label>
                    <input placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Semana </label>
                    <input placeholder='Semana' onChange={(e) => setSemana(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Cantidad dias previos</label>
                    <input placeholder='Cantidad dias previos' onChange={(e) => setCantidaddiasprevios(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Cantidad dias requeridos</label>
                    <input placeholder='Cantidad dias requeridos' onChange={(e) => setCantidaddiasrequeridos(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field>
                    <label>Link reunion</label>
                    <input placeholder='Link reunion' onChange={(e) => setLinkreunion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Afiche</label>
                    <input placeholder='Afiche' onChange={(e) => setAfiche(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label htmlFor="Modalidad">Modalidad:</label>
                <select
                    id="Modalidad"
                    value={selectedValues.Modalidad || ''}
                    onChange={(e) => handleDropdownChange('Modalidad', e.target.value)}>
                    <option value="">Select an option</option>
                    {dropdownOptionsModalidad.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                </Form.Field>
                <Form.Field>
                <label htmlFor="TipoActividad">Tipo Actividad:</label>
                <select
                    id="TipoActividad"
                    value={selectedValues.TipoActividad || ''}
                    onChange={(e) => handleDropdownChange('TipoActividad', e.target.value)}>
                    <option value="">Select an option</option>
                    {dropdownOptionstipoActividad.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                </Form.Field>
                <Form.Field>
                <label htmlFor="TipoAfiche">Tipo Afiche:</label>
                <select
                    id="TipoAfiche"
                    value={selectedValues.TipoAfiche || ''}
                    onChange={(e) => handleDropdownChange('TipoAfiche', e.target.value)}>
                    <option value="">Select an option</option>
                    {dropdownOptionstipoAfiche.map((option) => (
                        <option key={option.id} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                </Form.Field>
                <Form.Field>
                    <label>IDplanTrabajo</label>
                    <input placeholder='IDplanTrabajo' onChange={(e) => setIDplanTrabajo(parseInt(e.target.value))}/>
                </Form.Field>
                </Form>
                <Button onClick={postData} type='Submit'>Siguiente</Button>
            {/*<Modal  closeIcon open={isOpen} onClose={() => setIsOpen(false)} onOpen={() => setIsOpen(true)}>
                        <Header content='Archive Old Messages'/>
                        <Modal.Content>
                        <p>Se creo la actividad</p>
                        </Modal.Content>
                        <Modal.Actions>
                        <Button onClick={(postData=> setIsOpen(false))}>Close</Button>
                        </Modal.Actions>
                    </Modal>*/}
    </div>
    </div>
    )
}
