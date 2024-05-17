import { useEffect, useState } from "react";
import { IUserModel } from "../models/UserModel";
import { userApiSerivce } from "../services/api.service";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);
  useEffect(() => {
    userApiSerivce.getAllUsers().then((val) => {
      console.log(val.data);
      setUsers(val.data);
    });
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;
