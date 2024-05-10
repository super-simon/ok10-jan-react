import { FC, useEffect, useState } from "react";
import { PostModel } from "../../models/PostModel";
import { getAllPosts } from "../../services/jph.api.service";
import PostComponent from "../post/PostComponent";

const PostsComponent: FC = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    getAllPosts().then((res) => setPosts(res.data));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <PostComponent post={post} />
      ))}
    </div>
  );
};

export default PostsComponent;
