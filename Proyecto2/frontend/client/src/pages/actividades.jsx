import React, { useState , useEffect} from 'react';
import { Link, useParams , useLocation} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar2';
export default function ActivityList(){
  /* IMPORTANTE PASAR */
  let { state } = useLocation();

  const Persona = state;
  console.log(Persona)
  /* IMPORTANTE PASAR */
  const { planId } = useParams();
  const [activities, setactivities] = useState([])
    useEffect(() => {
      axios.post(`http://localhost:4000/profesor/VerActividadxPlan`, {
        IDplanTrabajo:planId
      }
      , {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
          .then((response) => {
              console.log(response.data)
              setactivities(response.data);
          })
  }, []);

  const filteredActivities = activities.filter((activity) => activity.IDplanTrabap === Number(planId));

  return (

    <div>
    <section>
      <div className="container">
        <h1>Actividades del Plan {planId}</h1>
        <div className="cards">
          {activities.map((activity) => (
            <div key={activity.IDplanTrabajo} className="card">
              <Link className={"link-styles"} to={`/planList/plan/${planId}/activity/${activity.IDactividad}`} state={Persona}>Actividad . {activity.IDactividad}</Link>
              
              <h3> Semana:</h3>
              <p>{activity.Semana}</p>
              <h3>Fecha: </h3>
              <h4>{activity.Fecha}</h4>
              
              {/* <button className="btn" onClick={navegar(plan.IDplanTrabajo)}>Explore</button> */}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  </div> 

    // <div>
    //   <h1>Actividades del Plan {planId}</h1>
    //   <ul>
    //     {activities.map((activity) => (
    //       <li key={activity.IDactividad}>
    //         <Link to={`/planList/plan/${planId}/activity/${activity.IDactividad}`}>{activity.IDactividad}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};


