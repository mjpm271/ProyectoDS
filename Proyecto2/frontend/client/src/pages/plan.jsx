import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PlanList() {
  const [cards, setCards] = React.useState([])
  useEffect(() => {
    axios.get(`http://localhost:4000/profesor/VerPlanesTrabajo`)
        .then((response) => {
            console.log(response.data)
            setCards(response.data);
        })
}, []);

const cardElements = cards.map(card => (
  <div key={card.IDplanTrabajo} className="card-tile">
      <div className="card-info">
          <Link to={`/planList/plan/${card.IDplanTrabajo}`}>{card.Nombre}</Link>
          <p>{card.Abreviacion}<span></span></p>
          <p>{card.IDcoordinador}<span></span></p>
      </div>
  </div>
))

  const [plans] = useState([
    { id: 1, name: 'Plan 1' },
    { id: 2, name: 'Plan 2' },
    { id: 3, name: 'Plan 3' },
  ]);

  return (
    <div>
      <div className="card-list-container">
        <h1>Planes de Trabajo</h1>
        <div className="card-list">
            {cardElements}
        </div>
      </div>
    </div>
  );
};
