import { useRef, useState, useEffect } from "react";
	// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../index.css";

function NavBar(props) {
	const navRef = useRef();
    console.log('props', props.Persona.Persona)
	const Persona1 = JSON.parse(props.Persona.Persona)
	// console.log(Persona1.Carnet)
	const [Tipo, setTipo] = useState(0)
	useEffect(() =>  {
		if(Persona1.IDtipo === 1 && Persona1.Coordinador === true){
			setTipo(1)
		}if(Persona1.IDtipo === 1 && Persona1.Coordinador === false){
			setTipo(2)
		}if(Persona1.IDtipo === 2 ){
			setTipo(3)
		}if(Persona1.IDtipo === 3 ){
			setTipo(4)
		}
	})


	return (
		<div>
		
		<header>
		<h1></h1>
			{/* <h3>LOGO</h3> */}
			<nav ref={navRef}>
				<Link to={`/modificarPerfil/${Persona1.Carnet}` }state= {props.Persona.Persona}>Perfil</Link>
				<Link to={`/cambiarContra/${Persona1.Carnet}`}state= {props.Persona.Persona}>Cambiar Contraseña</Link>
				{Tipo===1 && <Link to={`/InicioCoordinador`}state= {props.Persona.Persona}>Inicio</Link>}
				{Tipo===2 && <Link to={`/IncioProfesor`}state= {props.Persona.Persona}>Inicio</Link>}
				{Tipo===3  && <Link to={`/InicioAsistente`}state= {props.Persona.Persona}>Inicio</Link>}
				{Tipo===4  && <Link to={`/InicioEstudiante`}state= {props.Persona.Persona}>Inicio</Link>}
				<Link to={`/Notificaciones`}state= {props.Persona.Persona}>Notificaciones</Link>
				<Link to={`/Configuracion`}state= {props.Persona.Persona}>Configuracion</Link>
				<Link to={`/`}>Cerrar Sesion</Link>

				
			</nav>
			
		</header>
		</div>
	);
}

export default NavBar;