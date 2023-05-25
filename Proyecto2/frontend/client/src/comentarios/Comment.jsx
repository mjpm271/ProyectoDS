import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  handleCommentSubmit,
  IDcomentarioPadre = null,
  currentUserId,
  IDpersona
}) => {
  const isEditing =
    activeComment &&
    activeComment.IDcomentario === comment.IDcomentario &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.IDcomentario === comment.IDcomentario &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.Fecha) > fiveMinutes;
  const canDelete =
    IDpersona === comment.IDpersona && replies.length === 0 && !timePassed;
  const canReply = Boolean(IDpersona);
  const canEdit = IDpersona === comment.IDpersona && !timePassed;
  const replyId = IDcomentarioPadre ? IDcomentarioPadre : comment.IDcomentario;
  const createdAt = new Date(comment.Fecha).toLocaleDateString();
  // const Fecha =  new Date(comment.Fecha).toLocaleTimeString()// Obtén la Fecha actual en el formato adecuado
  const Fecha= new Date(comment.Fecha).toLocaleDateString()// Obtén la fecha actual en el formato adecuado
  return (
    <div key={comment.IDcomentario} className="comment">
      {/* <div className="comment-image-container">
        <img src="/user-icon.png" />
      </div> */}
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.IDpersona}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.Contenido}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.Contenido}
            handleSubmit={(text) => updateComment(text, comment.IDcomentario)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ IDcomentario: comment.IDcomentario, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ IDcomentario: comment.IDcomentario, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.IDcomentario)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => handleCommentSubmit(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.IDcomentario}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                handleCommentSubmit={handleCommentSubmit}
                IDcomentarioPadre={comment.IDcomentario}
                replies={[]}
                IDpersona={IDpersona}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
