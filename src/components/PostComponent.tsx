import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../models/IPost";

interface IProps {
  post: IPost;
}

const PostComponent: FC<IProps> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div>
      {post.id} - {post.title}
      <button
        onClick={() => {
          navigate(post.id.toString());
        }}
      >
        Details
      </button>
    </div>
  );
};

export default PostComponent;
