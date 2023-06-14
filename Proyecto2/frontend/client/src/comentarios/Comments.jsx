import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api";

const Comments = ({ commentsUrl, IDpersona, IDactividad }) => {
  console.log(IDactividad)
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  // const rootComments = backendComments.filter(
  //   (backendComment) => backendComment.parentId === null
  // );

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replies, setReplies] = useState({});
  const rootComments2 = comments.filter(
    (backendComment) => backendComment.IDcomentarioPadre === null &&
    backendComment.IDactividad == IDactividad
  );
    const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:4000/profesor/ComentariosxActividad`,{method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        IDactividad: IDactividad, // Reemplaza con el ID de actividad adecuado
      })});
      const data = await response.json();
      setComments(data);

    }catch (error) {
      console.log(error);
    }
  };
  const getReplies = (IDcomentario) =>
    comments
      .filter((backendComment) => backendComment.IDcomentarioPadre === IDcomentario)
      .sort(
        (a, b) =>
          new Date(a.Fecha).getTime() - new Date(b.Fecha).getTime()
      );
  // const addComment = (text, parentId) => {
  //   createCommentApi(text, parentId).then((comment) => {
  //     setBackendComments([comment, ...backendComments]);
  //     setActiveComment(null);
  //   });
  // };
  const handleCommentSubmit = async (newComment, IDcomentarioPadre) => {
    console.log(newComment)
    try {
      const response = await fetch(`http://localhost:4000/profesor/Comentar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          IDpersona: IDpersona, // Reemplaza con el ID de persona adecuado
          IDactividad: IDactividad, // Reemplaza con el ID de actividad adecuado
          IDcomentarioPadre: IDcomentarioPadre, // Puedes establecer el ID de comentario padre si se está respondiendo a un comentario existente
          // Hora: new Date().toLocaleTimeString(), // Obtén la hora actual en el formato adecuado
          Fecha: new Date().toISOString(),//new Date().toLocaleDateString(), // Obtén la fecha actual en el formato adecuado
          Contenido: newComment
        })
      });

      if (response.ok) {
        // setBackendComments([comment, ...backendComments]);
        // setActiveComment(null);
        createCommentApi(newComment, IDcomentarioPadre,IDactividad,IDpersona).then((comment) => {
          setBackendComments([comment, ...comments]);
          setActiveComment(null);});
        fetchComments();
        setNewComment('');
      } else {
        console.log('Error al enviar el comentario');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateComment = (text, IDcomentario) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = comments.map((backendComment) => {
        if (backendComment.IDcomentario === IDcomentario) {
          return { ...backendComment, Contenido: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (IDcomentario) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = comments.filter(
          (backendComment) => backendComment.IDcomentario !== IDcomentario
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    fetchComments()
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <div className="comment-form-title">Comentarios</div>
      <CommentForm submitLabel="Comentar" handleSubmit={handleCommentSubmit} />
      <div className="comments-container">
        {rootComments2.map((rootComment) => (
          <Comment
            key={rootComment.IDcomentario}
            comment={rootComment}
            replies={getReplies(rootComment.IDcomentario)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            handleCommentSubmit={handleCommentSubmit}
            deleteComment={deleteComment}
            updateComment={updateComment}
            IDpersona={IDpersona}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;