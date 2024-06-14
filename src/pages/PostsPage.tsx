import { useEffect } from "react";
import PostsComponent from "../components/PostsComponent";
import { postActions } from "../redux/slices/postSlice";
import { useAppDispatch } from "../redux/store";

const PostsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postActions.loadPosts());
  }, []);
  return (
    <div>
      <PostsComponent />
    </div>
  );
};

export default PostsPage;
