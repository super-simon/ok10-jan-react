import { FC } from "react";
import { useContextProvider } from "../context/ContextProvider";
import { IUserModel } from "../models/IUserModel";

const UserComponent: FC<{ user: IUserModel }> = ({ user }) => {
  const {
    usersStore: { setFavoriteUser },
  } = useContextProvider();
  return (
    <div>
      {user.name}{" "}
      <button onClick={() => setFavoriteUser(user)}>Set as favorite</button>
    </div>
  );
};

export default UserComponent;
