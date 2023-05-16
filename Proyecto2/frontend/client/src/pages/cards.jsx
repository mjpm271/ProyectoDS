import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Card, CardContent } from 'semantic-ui-react';
// import Read from './components/read';
// import { BrowserRouter as Router, Route } from 'react-router-dom'



function Cards(){
  const [cards, setCards] = React.useState([])
  useEffect(() => {
    axios.get(`http://localhost:4000/ejemplo/tipoPersona`)
        .then((response) => {
            console.log(response.data)
            setCards(response.data);
        })
}, []);

const cardElements = cards.map(card => (
    <div key={card.IDsede} className="card-tile">
        <div className="card-info">
            <h3>{card.Nombre}</h3>
            <p>${card.Abreviacion}<span>/day</span></p>
        </div>
        <i className={`card-type ${card.type} selected`}>{card.type}</i>
    </div>
))


    return (
        
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
            {cardElements}
        </div>
    </div>
    );
  
}


export default Cards;