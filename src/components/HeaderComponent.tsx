import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={""}>Home</Link>
        </li>
        <li>
          <Link to={"users"}>Users</Link>
        </li>
        <li>
          <Link to={"posts"}>Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
