import { useContext } from "react";
import PostsComponent from "../components/PostsComponent";
import { Context } from "../context/ContextProvider";

const PostsPage = () => {
  const context = useContext(Context);
  console.log("PostsPage");
  console.log(context);
  return (
    <div>
      <PostsComponent />
    </div>
  );
};

export default PostsPage;
