import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate , useParams, useLocation} from 'react-router-dom';

export default function PlanList() {
      /* IMPORTANTE PASAR */
      const location = useLocation();
      const Persona = location.state;
      /* IMPORTANTE PASAR */
  const navigate = useNavigate();  
  const [plans, setplans] = React.useState([])
  useEffect(() => {
    axios.get(`http://localhost:4000/profesor/VerPlanesTrabajo`)
        .then((response) => {
            console.log(response.data)
            setplans(response.data);
        })
}, []);

// const navegar = () => {
//   // 👇️ navigate to /
//   navigate(`/planList/plan/${IDplanTrabajo}`)
// };

  {/* // <div key={card.IDplanTrabajo} className="card-tile">
  //     <div className="card-info">
  //         <Link to={`/planList/plan/${card.IDplanTrabajo}`}>{card.Nombre}</Link>
  //         <p>{card.Abreviacion}<span></span></p>
  //         <p>{card.IDcoordinador}<span></span></p>
  //     </div>
  // </div> */}
  return (
    <div>
    <section>
      <div className="container">
        <h1>Planes de Trabajo</h1>
        <div className="cards">
          {plans.map((plan) => (
            <div key={plan.IDplanTrabajo} className="card">
              <Link className={"link-styles"} to={`/planList/plan/${plan.IDplanTrabajo}`}>{plan.Nombre}</Link>
              
              <h3> Abreviacion:</h3>
              <p>{plan.Abreviacion}</p>
              <h3>Coordinador: </h3>
              <h4>{plan.IDcoordinador}</h4>
              
              {/* <button className="btn" onClick={navegar(plan.IDplanTrabajo)}>Explore</button> */}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>    
  );
};
