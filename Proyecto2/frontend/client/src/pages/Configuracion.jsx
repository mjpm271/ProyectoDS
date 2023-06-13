import NavBar from '../components/NavBar2';
import DateTimePicker from 'react-datetime-picker'
import DatePicker from 'react-date-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import { Button,  Form, Grid, Segment} from 'semantic-ui-react'
export default function Configuracion() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    const info = JSON.parse(Persona)
    const id = info.Carnet
    /* IMPORTANTE PASAR */
    const utcTime = {timeZone: 'CST' };
    const [Fecha, setFecha] = useState(new Date().toLocaleString('en-US', utcTime));


    return (
        <div>
        <NavBar Persona={{Persona}}/>
        <div  className="con" >
                <h1>Configuracion</h1>
                <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>
                        <label>Fecha del Sistema </label>
                        <p></p>
                        <DateTimePicker onChange={setFecha} value={Fecha} />
                        </Segment>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>    
        </div>    
        </div> 
    )
}