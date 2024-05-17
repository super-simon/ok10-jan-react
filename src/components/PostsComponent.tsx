import { FC } from "react";
import { useParams } from "react-router-dom";
import { IPostModel } from "../models/PostModel";
import PostComponent from "./PostComponent";

interface IProps {
  posts: IPostModel[];
}

const PostsComponent: FC<IProps> = ({ posts }) => {
  console.log(useParams());
  return (
    <div>
      {posts.map((post) => (
        <PostComponent post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsComponent;
