import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../models/IUser";

interface IProps {
  user: IUser;
}

const UserComponent: FC<IProps> = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div>
      {user.id} - {user.name} ({user.email})
      <button
        onClick={() => {
          navigate(user.id.toString());
        }}
      >
        Details
      </button>
    </div>
  );
};

export default UserComponent;
