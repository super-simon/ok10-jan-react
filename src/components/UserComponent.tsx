import { FC } from "react";
import { IUserModel } from "../models/IUserModel";

const UserComponent: FC<{ user: IUserModel }> = ({ user }) => {
  return <div>{user.name}</div>;
};

export default UserComponent;
