import { useAppSelector } from "../redux/store";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
  const { posts, isLoaded } = useAppSelector((state) => state.postSlice);
  return (
    <div>
      {isLoaded ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <PostComponent post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default PostsComponent;
