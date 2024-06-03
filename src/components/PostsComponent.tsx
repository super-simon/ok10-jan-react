import { useContextProvider } from "../context/ContextProvider";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
  const {
    postsStore: { allPosts },
  } = useContextProvider();
  return (
    <div>
      {allPosts.map((post) => (
        <PostComponent post={post} />
      ))}
    </div>
  );
};

export default PostsComponent;
