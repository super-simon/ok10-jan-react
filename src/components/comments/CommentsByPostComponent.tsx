import { FC } from "react";
import { ICommentModel } from "../../models/CommentModel";
import "./CommentsByPostComponent.css";

interface IProps {
  comments: ICommentModel[];
}

const CommentsByPostComponent: FC<IProps> = ({ comments }) => {
  return (
    <div>
      <ul className="commentList">
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>
              {comment.name} <i>{comment.email}</i>
            </h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsByPostComponent;
