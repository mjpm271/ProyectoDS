import React, { useState, useEffect } from 'react';
import { Comment, Header, Form, Button } from 'semantic-ui-react';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('http://localhost:4000/profesor/VerComentariosActividad');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: newComment })
      });

      if (response.ok) {
        fetchComments();
        setNewComment('');
      } else {
        console.log('Error al enviar el comentario');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comentarios
      </Header>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <Comment.Content>
            <Comment.Author>{comment.author}</Comment.Author>
            <Comment.Metadata>{comment.date}</Comment.Metadata>
            <Comment.Text>{comment.content}</Comment.Text>
          </Comment.Content>
          <Comment.Actions>
            <Comment.Action>Responder</Comment.Action>
          </Comment.Actions>
          <Comment.Group>
            {comment.replies.map((reply) => (
              <Comment key={reply.id}>
                <Comment.Content>
                  <Comment.Author>{reply.author}</Comment.Author>
                  <Comment.Metadata>{reply.date}</Comment.Metadata>
                  <Comment.Text>{reply.content}</Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
          </Comment.Group>
          <Form reply>
            <Form.TextArea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Responder..."
            />
            <Button content="Responder" primary onClick={handleCommentSubmit} />
          </Form>
        </Comment>
      ))}
    </Comment.Group>
  );
};

export default CommentList;
