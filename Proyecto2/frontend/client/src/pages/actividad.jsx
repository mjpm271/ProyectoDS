import React, { useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
export default function ActivityList(){
  const { planId } = useParams();
  const [activities, setactivities] = useState([])
    useEffect(() => {
      axios.post(`http://localhost:4000/profesor/VerActividadxPlan`, {
        IDplanTrabajo:IDplanTrabajo
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
      <h1>Actividades del Plan {IDplanTrabajo}</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.IDactividad}>
            <Link to={`/planList/plan/${IDplanTrabajo}/activity/${activity.IDactividad}`}>{activity.Nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


