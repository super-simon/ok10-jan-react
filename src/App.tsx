import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

export default App;
