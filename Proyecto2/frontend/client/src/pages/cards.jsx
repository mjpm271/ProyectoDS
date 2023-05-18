import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Card, CardContent } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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

    <div class="ag-format-container">
        <div class="ag-courses_box">
            <div key={card.IDsede}  class="ag-courses_item">
                <a  class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div  class="ag-courses-item_title">
                    <Link to={`/`}>{card.Nombre}</Link>
                    
                    </div>

                    <div class="ag-courses-item_date-box">
                    Abreviacion: 
                    <span class="ag-courses-item_date">
                        {card.Abreviacion}
                    </span>
                    </div>
                </a>
            </div>
        </div>    
    </div>    

    // <div key={card.IDsede} className="card-tile">
    //     <div className="card-info">
    //         <h3>{card.Nombre}</h3>
    //         <p>{card.Abreviacion}<span></span></p>
    //     </div>
    //     <i className={`card-type ${card.type} selected`}>{card.type}</i>
    // </div>
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