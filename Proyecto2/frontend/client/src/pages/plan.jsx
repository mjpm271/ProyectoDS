import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  useLocation} from 'react-router-dom';
import NavBar from '../components/NavBar2';

export default function PlanList() {
      /* IMPORTANTE PASAR */
      let { state } = useLocation();

      const Persona = state;
      console.log(Persona)
      /* IMPORTANTE PASAR */
 
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
      <NavBar Persona={{Persona}}/>
    <section>
      <div className="container">
        <h1>Planes de Trabajo</h1>
        <div className="cards">
          {plans.map((plan) => (
            <div key={plan.IDplanTrabajo} className="card">
              <Link className={"link-styles"} to={`/planList/plan/${plan.IDplanTrabajo}`} state={Persona}>{plan.Nombre}</Link>
              
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
