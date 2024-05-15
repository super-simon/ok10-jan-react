import { createBrowserRouter } from "react-router-dom";
import UsersComponent from "../components/UsersComponent";
import AnotherLayout from "../layout/AnotherLayout";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Fuck You!</h1>,
    children: [
      { path: "", element: <HomePage /> },
      { path: "users", element: <UsersComponent /> },
    ],
  },
  { path: "/okten", element: <AnotherLayout /> },
]);
