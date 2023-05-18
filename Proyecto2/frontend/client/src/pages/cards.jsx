import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Read from './components/read';
// import { BrowserRouter as Router, Route } from 'react-router-dom'

// navigate('/read');

function Cards(){
    const navigate = useNavigate();  
    const [cards, setCards] = React.useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/ejemplo/tipoPersona`)
            .then((response) => {
                console.log(response.data)
                setCards(response.data);
            })
    }, []);

    const navegar = () => {
        // 👇️ navigate to /
        navigate('/read');
    };

    return (
        <div>
        <section>
          <div className="container">
            <h1>Sedes de Carrera</h1>
            <div className="cards">
              {cards.map((card) => (
                <div key={card.IDsede} className="card">
                  <h3>{card.Nombre}</h3>
                  <p>{card.Abreviacion}</p>
                  <button className="btn" onClick={navegar}>Explore</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>    
    // <div className="van-list-container">
    //     <h1>Explore our van options</h1>
    //     <div className="van-list">
    //         {cardElements}
    //     </div>
    // </div>
    );
  
}


export default Cards;