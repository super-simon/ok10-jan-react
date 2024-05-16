import { FC } from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import "./MainLayout.css";

const MainLayout: FC = () => {
  return (
    <div className="layout">
      <div className="layoutHeader">
        <HeaderComponent />
      </div>
      <div className="layoutOutlet">
        <Outlet />
      </div>
      <div className="layoutFooter">
        <FooterComponent />
      </div>
    </div>
  );
};

export default MainLayout;
