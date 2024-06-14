import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postActions } from "../redux/slices/postSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { post } = useAppSelector((store) => store.postSlice);

  useEffect(() => {
    dispatch(postActions.loadPostById(id));
  }, [id]);
  return (
    <div>
      {post && (
        <>
          {post.title}
          <br />
          {post.body}
        </>
      )}
    </div>
  );
};

export default PostPage;
