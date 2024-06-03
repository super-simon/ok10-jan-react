import { useContextProvider } from "../context/ContextProvider";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
  const {
    usersStore: { allUsers },
  } = useContextProvider();

  return (
    <div>
      {allUsers.map((user) => (
        <UserComponent user={user} />
      ))}
    </div>
  );
};

export default UsersComponent;
