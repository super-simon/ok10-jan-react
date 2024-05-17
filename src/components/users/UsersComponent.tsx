import { useEffect, useState } from "react";
import { IUserModel } from "../../models/UserModel";
import { apiSerivce } from "../../services/api.service";
import UserComponent from "./UserComponent";
import "./UsersComponent.css";

const UsersComponent = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);
  useEffect(() => {
    apiSerivce.getAllUsers().then((val) => {
      setUsers(val.data);
    });
  }, []);

  return (
    <div>
      <ul className="usersList">
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;
