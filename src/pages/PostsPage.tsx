import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PostsComponent from "../components/PostsComponent";
import { IPostModel } from "../models/PostModel";
import { userApiSerivce } from "../services/api.service";

const PostsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const [posts, setPosts] = useState<IPostModel[]>([]);

  useEffect(() => {
    if (id) {
      userApiSerivce.getPostsByUser(id).then((val) => setPosts(val.data));
    }
  }, [id]);

  return (
    <div>
      <PostsComponent posts={posts} />
    </div>
  );
};

export default PostsPage;
