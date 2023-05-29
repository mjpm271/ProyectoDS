import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../index.css";

function NavBar(props) {
	const navRef = useRef();
    console.log('props', props.Persona.Persona)
	const Persona1 = JSON.parse(props.Persona.Persona)
	console.log(Persona1.Carnet)
	
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			{/* <h3>LOGO</h3> */}
			<nav ref={navRef}>
				<Link to={`/modificarPerfil/${Persona1.Carnet}` }state= {props.Persona.Persona}>Perfil</Link>
				<Link to={`/cambiarContra/${Persona1.Carnet}`}state= {props.Persona.Persona}>Cambiar Contraseña</Link>
				<Link to={`/`}>Cerrar Sesion</Link>
				
			</nav>
			
		</header>
	);
}

export default NavBar;