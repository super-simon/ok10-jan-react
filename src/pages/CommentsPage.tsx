import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsByPostComponent from "../components/comments/CommentsByPostComponent";
import { ICommentModel } from "../models/CommentModel";
import { apiSerivce } from "../services/api.service";

const CommentsPage = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState<ICommentModel[]>([]);

  useEffect(() => {
    if (postId) {
      apiSerivce.getCommentsByPost(postId).then((val) => setComments(val.data));
    }
  }, [postId]);

  return (
    <div>
      <CommentsByPostComponent comments={comments} />
    </div>
  );
};

export default CommentsPage;
