import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ActivityList(){
  const { planId } = useParams();
  const [activities] = useState([
    { id: 1, name: 'Actividad 1', planId: 1 },
    { id: 2, name: 'Actividad 2', planId: 1 },
    { id: 3, name: 'Actividad 3', planId: 2 },
    { id: 4, name: 'Actividad 4', planId: 2 },
  ]);

  const filteredActivities = activities.filter((activity) => activity.planId === Number(planId));

  return (
    <div>
      <h1>Actividades del Plan {planId}</h1>
      <ul>
        {filteredActivities.map((activity) => (
          <li key={activity.id}>
            <Link to={`/planList/plan/${planId}/activity/${activity.id}`}>{activity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


