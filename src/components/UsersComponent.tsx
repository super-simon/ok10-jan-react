import { useAppSelector } from "../redux/store";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
  const { users, isLoaded } = useAppSelector((state) => state.userSlice);
  return (
    <div>
      <ul>
        {isLoaded ? (
          users.map((user) => <UserComponent user={user} key={user.id} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </ul>
    </div>
  );
};

export default UsersComponent;
