import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PlanList() {
  const [plans] = useState([
    { id: 1, name: 'Plan 1' },
    { id: 2, name: 'Plan 2' },
    { id: 3, name: 'Plan 3' },
  ]);

  return (
    <div>
      <h1>Planes de Trabajo</h1>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <Link to={`/planList/plan/${plan.id}`}>{plan.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
