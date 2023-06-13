import NavBar from '../components/NavBar2';
import { useLocation} from 'react-router-dom';
export default function Notificaciones() {
    /* IMPORTANTE PASAR */
    const location = useLocation();
    const Persona = location.state;
    const info = JSON.parse(Persona)
    const id = info.Carnet
    /* IMPORTANTE PASAR */



    return (
        <div>
        <NavBar Persona={{Persona}}/>
            <div  className="container" ></div>
        </div>    
    )
}