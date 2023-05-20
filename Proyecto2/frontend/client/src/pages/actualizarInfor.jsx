import React, { useState, useEffect } from 'react';

const ProfileUpdatePage = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    age: '',
    // Agrega aquí más campos necesarios para el perfil
  });

  // Simula la carga inicial de los datos del perfil desde una API o almacenamiento
  useEffect(() => {
    // Aquí deberías llamar a tu API o servicio para obtener los datos del perfil
    // y luego establecer los valores en el estado utilizando setProfileData
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.log('Error al obtener los datos del perfil:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí deberías enviar los datos actualizados del perfil a tu API o servicio
    // utilizando el valor de profileData

    console.log('Datos actualizados:', profileData);
  };

  return (
    <div>
      <h1>Actualizar Perfil</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="number"
            name="age"
            value={profileData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Agrega aquí más campos del perfil */}
        <br />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default ProfileUpdatePage;