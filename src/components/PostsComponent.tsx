import { useEffect, useState } from "react";
import { IPostModel } from "../models/PostModel";
import { userApiSerivce } from "../services/api.service";

const PostsComponent = () => {
  const [posts, setPosts] = useState<IPostModel[]>([]);
  useEffect(() => {
    userApiSerivce.getAllPosts().then((val) => {
      console.log(val.data);
      setPosts(val.data);
    });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
