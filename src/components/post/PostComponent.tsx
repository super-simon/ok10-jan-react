import { FC } from "react";
import { PostModel } from "../../models/PostModel";

interface IProps {
  post: PostModel;
}

type IPropTypes = IProps & { children?: React.ReactNode };

const PostComponent: FC<IPropTypes> = ({ post }) => {
  return (
    <div>
      {post.id} {post.title}
      <p>{post.body}</p>
      <div>
        <button>Show Comments</button>
      </div>
      <hr />
    </div>
  );
};

export default PostComponent;
