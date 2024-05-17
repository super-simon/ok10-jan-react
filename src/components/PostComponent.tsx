import { FC } from "react";
import { IPostModel } from "../models/PostModel";

interface IProps {
  post: IPostModel;
}

const PostComponent: FC<IProps> = ({ post }) => {
  return <div>{post.title}</div>;
};

export default PostComponent;
