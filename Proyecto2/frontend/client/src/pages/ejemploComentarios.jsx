import Comments from "../comentarios/Comments";

const EjemploComentario = () => {
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default EjemploComentario;


// import React, { useState, useEffect } from 'react';
// import { Comment, Header, Form, Button } from 'semantic-ui-react';

// const CommentList = () => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [replies, setReplies] = useState({});

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const fetchComments = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/profesor/ComentariosxActividad`,{method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         IDactividad: 8, // Reemplaza con el ID de actividad adecuado
//       })});
//       const data = await response.json();
//       setComments(data);
//       const repliesData = {};
//       for (const comment of data) {
//       const replyResponse = await fetchReplies({ IDcomentarioPadre: comment.IDcomentario });
//       const replyData = await replyResponse.json();
//       repliesData[comment.IDcomentario] = replyData;
//     }
//     setReplies(repliesData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchReplies = async (IDcomentarioPadre) => {
//     try {
//       const response = await fetch(`http://localhost:4000/profesor/respuestasComentario`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ IDcomentarioPadre })
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         // Aquí puedes realizar cualquier manipulación necesaria con los datos obtenidos
//         console.log(data);
//       } else {
//         console.log('Error al obtener las respuestas del comentario');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleCommentSubmit = async (IDComentario) => {
//     try {
//       const response = await fetch(`http://localhost:4000/profesor/Comentar`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           IDpersona: 1, // Reemplaza con el ID de persona adecuado
//           IDactividad: 8, // Reemplaza con el ID de actividad adecuado
//           IDcomentarioPadre: IDComentario, // Puedes establecer el ID de comentario padre si se está respondiendo a un comentario existente
//           Hora: new Date().toLocaleTimeString(), // Obtén la hora actual en el formato adecuado
//           Fecha: new Date().toLocaleDateString(), // Obtén la fecha actual en el formato adecuado
//           Contenido: newComment
//         })
//       });

//       if (response.ok) {
//         fetchComments();
//         setNewComment('');
//       } else {
//         console.log('Error al enviar el comentario');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Comment.Group>
//       <Header as="h3" dividing>
//         Comentarios
//       </Header>
//       {comments.map((comment) => (
//         <Comment key={comment.IDcomentario}>
//           <Comment.Content>
//             <Comment.Author>{comment.IDpersona}</Comment.Author>
//             <Comment.Metadata>
//               {comment.Fecha} {comment.Hora}
//             </Comment.Metadata>
//             <Comment.Text>{comment.Contenido}</Comment.Text>
//           </Comment.Content>
//           <Comment.Actions>
//             <Comment.Action>Responder</Comment.Action>
//           </Comment.Actions>
//           <Comment.Group>
//           {replies[comment.IDcomentario] &&
//           replies[comment.IDcomentario].map((reply) => {
//                 return(
//               <Comment key={reply.IDcomentario}>
//                 <Comment.Content>
//                   <Comment.Author>{reply.IDpersona}</Comment.Author>
//                   <Comment.Metadata>
//                     {reply.Fecha} {reply.Hora}
//                   </Comment.Metadata>
//                   <Comment.Text>{reply.Contenido}</Comment.Text>
//                 </Comment.Content>
//               </Comment>
//             )})}
//           </Comment.Group>
//           <Form reply>
//             <Form.TextArea
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               placeholder="Responder..."
//             />
//             <Button content="Responder" primary onClick={handleCommentSubmit(comment.IDcomentario)} />
//           </Form>
//         </Comment>
//       ))}
//     </Comment.Group>
//   );
// };

// export default CommentList;
