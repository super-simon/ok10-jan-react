import { useContext } from "react";
import { Context } from "../context/ContextProvider";

const PostsPage = () => {
  const context = useContext(Context);
  console.log("PostsPage");
  console.log(context);
  return <div>PostsPage</div>;
};

export default PostsPage;
