import PostsComponent from "./components/posts/PostsComponent";

const App = () => {
  return (
    <div className="App">
      <div className="posts">
        <PostsComponent />
      </div>
      <div className="comments"></div>
    </div>
  );
};

export default App;
