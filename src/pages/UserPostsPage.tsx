import { useContextProvider } from "../context/ContextProvider";

const UserPostsPage = () => {
  const contextProvider = useContextProvider;
  console.log("UserPostsPage");
  console.log(contextProvider());
  return <div>UserPostsPage</div>;
};

export default UserPostsPage;
