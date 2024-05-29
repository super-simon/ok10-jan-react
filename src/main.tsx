import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routerConfig } from "./router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routerConfig}></RouterProvider>
);
