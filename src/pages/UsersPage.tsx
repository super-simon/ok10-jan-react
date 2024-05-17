import { Outlet } from "react-router-dom";
import UsersComponent from "../components/users/UsersComponent";
import "./UsersPage.css";

const UsersPage = () => {
  return (
    <div className="usersContainer">
      <UsersComponent />
      <Outlet />
    </div>
  );
};

export default UsersPage;
