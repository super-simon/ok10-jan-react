import { FC } from "react";
import { IPostModel } from "../models/IPostModel";

const PostComponent: FC<{ post: IPostModel }> = ({ post }) => {
  return <div>{post.title}</div>;
};

export default PostComponent;
