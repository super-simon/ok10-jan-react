import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import { Context } from "./context/ContextProvider";
import { IPostModel } from "./models/IPostModel";
import { IUserModel } from "./models/IUserModel";
import { userApiSerivce } from "./services/api.service";

const App = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);
  const [posts, setPosts] = useState<IPostModel[]>([]);
  const [favoriteUser, setFavoriteUserState] = useState<IUserModel | null>(
    null
  );

  useEffect(() => {
    userApiSerivce.getAllUsers().then((res) => setUsers(res.data));
    userApiSerivce.getAllPosts().then((res) => setPosts(res.data));
  }, []);

  const setFavoriteUser = (obj: IUserModel) => {
    setFavoriteUserState(obj);
  };

  return (
    <div>
      <HeaderComponent />
      <Context.Provider
        value={{
          usersStore: {
            allUsers: users,
            setFavoriteUser: (obj: IUserModel) => setFavoriteUser(obj),
          },
          postsStore: { allPosts: posts },
        }}
      >
        <Outlet />
      </Context.Provider>
      {favoriteUser && <div>{favoriteUser.email}</div>}
    </div>
  );
};

export default App;
