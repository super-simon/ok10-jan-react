import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { IPostModel } from "../../models/PostModel";
import "./PostsComponent.css";

interface IProps {
  posts: IPostModel[];
}

const PostsComponent: FC<IProps> = ({ posts }) => {
  const { userId } = useParams();
  return (
    <div>
      <ul className="postList">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
            <br />
            <div>
              <Link to={`/users/${userId}/${post.id}`}>Comments</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
