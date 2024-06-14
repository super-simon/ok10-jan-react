import { useAppSelector } from "../redux/store";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
  const { users, isLoaded } = useAppSelector((state) => state.userSlice);
  return (
    <div>
      {isLoaded ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserComponent user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default UsersComponent;
