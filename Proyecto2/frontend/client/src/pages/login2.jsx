import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Message ,Button} from 'semantic-ui-react';

const Login = () => {
  const [Correo, setCorreo] = useState('');
  const [Contra, setContra] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleContraChange = (event) => {
    setContra(event.target.value);
  };

  const handleLogin = async () => {
    if(Contra === '' || Correo === ''){
      setError('Debe de llenar todos los espacios para realizar el inicio de sesion')
    }else{
      try {
        const response = await fetch('http://localhost:4000/index/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ Correo, Contra }),
        })
        
          // El procedimiento almacenado devuelve 0 para un inicio de sesión exitoso
          const result = await response.json();
          const Status = parseInt(result.output.Exito); // Leer el valor del output recibido
          const Persona = JSON.stringify(result.recordset[0])
          console.log(Persona)
          if (Status === 1) {
              console.log("EXITOOOOO")
            // Inicio de sesión exitoso
  
            setError('');
            // Redirigir a la página deseada después del inicio de sesión exitoso
            navigate('/InicioCoordinador',{ state: Persona });  // Ruta a la página de dashboard o la que desees
            
          } else if (Status === 2)  {
            console.log("EXITOOOOO")
            // Inicio de sesión exitoso
  
            setError('');
  
            // Redirigir a la página deseada después del inicio de sesión exitoso
  
            navigate('/IncioProfesor',{ state: Persona });  // Ruta a la página de dashboard o la que desees
          }else if (Status === 3)  {
            console.log("EXITOOOOO")
            // Inicio de sesión exitoso
  
            setError('');
  
            // Redirigir a la página deseada después del inicio de sesión exitoso
            navigate('/InicioAsistente',{ state: Persona }); // Ruta a la página de dashboard o la que desees
          }else if (Status === 4)  {
            //ASISTENTE CARTAGO
            console.log("EXITOOOOO")
            // Inicio de sesión exitoso
  
            setError('');
  
            // Redirigir a la página deseada después del inicio de sesión exitoso
            navigate('/InicioAsistente',{ state: Persona });
          }else if (Status === 5)  {
            console.log("EXITOOOOO")
            // Inicio de sesión exitoso
  
            setError('');
  
            // Redirigir a la página deseada después del inicio de sesión exitoso
            navigate('/InicioEstudiante',{ state: Persona }); // Ruta a la página de dashboard o la que deseeselse {
            // Error de inicio de sesión, el procedimiento almacenado devolvió un valor diferente de 0
          }
      } catch (error) {
        console.error('Error:', error);
        setError('Credenciales incorrectas');
      }
    }
    
  };

  return (
    <div className='main'>
      <h1>Iniciar sesión</h1>

      {error && <Message negative>{error}</Message>}

      <div>
        <label>Correo:</label>
        <p></p>
        <input value={Correo} onChange={handleCorreoChange} />
      </div>
      <div>
        <label>Contraseña:</label>
        <p></p>
        <input value={Contra} onChange={handleContraChange} />
      </div>
      <p></p>
      <Button onClick={handleLogin}>Iniciar sesión</Button>
    </div>
  );
};

export default Login;
