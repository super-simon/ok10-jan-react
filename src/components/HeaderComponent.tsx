import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <NavLink to="/">Home pge</NavLink>
      <br />
      <NavLink to="/users">Users pge</NavLink>
      <hr />
    </div>
  );
};

export default HeaderComponent;
