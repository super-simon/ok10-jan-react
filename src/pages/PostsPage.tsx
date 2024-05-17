import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import PostsComponent from "../components/posts/PostsComponent";
import { IPostModel } from "../models/PostModel";
import { apiSerivce } from "../services/api.service";
import "./PostsPage.css";

const PostsPage = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState<IPostModel[]>([]);

  useEffect(() => {
    if (userId) {
      apiSerivce.getPostsByUser(userId).then((val) => setPosts(val.data));
    }
  }, [userId]);

  return (
    <div className="postsContainer">
      <PostsComponent posts={posts} />
      <Outlet />
    </div>
  );
};

export default PostsPage;
