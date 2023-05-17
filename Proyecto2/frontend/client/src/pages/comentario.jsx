import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CommentList(){
  const { planId, activityId } = useParams();
  const [activities] = useState([
    { id: 1, name: 'Actividad 1', planId: 1 },
    { id: 2, name: 'Actividad 2', planId: 1 },
    { id: 3, name: 'Actividad 3', planId: 2 },
    { id: 4, name: 'Actividad 4', planId: 2 },
  ]);

  const [comments] = useState([
    { id: 1, text: 'Comentario 1', activityId: 1 },
    { id: 2, text: 'Comentario 2', activityId: 1 },
    { id: 3, text: 'Comentario 3', activityId: 2 },
    { id: 4, text: 'Comentario 4', activityId: 2 },
  ]);

  const activity = activities.find((activity) => activity.id === Number(activityId));
  const filteredComments = comments.filter((comment) => comment.activityId === Number(activityId));

  return (
    <div>
      <h1>Actividad: {activity.name}</h1>
      <h2>Comentarios:</h2>
      <ul>
        {filteredComments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};


