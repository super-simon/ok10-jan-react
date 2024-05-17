import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUserModel } from "../../models/UserModel";

interface IProps {
  user: IUserModel;
}

const UserComponent: FC<IProps> = ({ user }) => {
  const navigate = useNavigate();
  return (
    <li>
      <Link to={`${user.id}`} state={{ foo: "barrr" }}>
        {user.name}
      </Link>{" "}
      <button
        onClick={() => {
          navigate(user.id.toString(), { state: { foo: "bar" } });
        }}
      >
        Show posts
      </button>
    </li>
  );
};

export default UserComponent;
