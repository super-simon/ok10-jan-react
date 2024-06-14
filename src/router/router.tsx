import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";
import UserPage from "../pages/UserPage";
import UsersPage from "../pages/UsersPage";

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      { path: "users", element: <UsersPage /> },
      { path: "users/:id", element: <UserPage /> },
      { path: "posts", element: <PostsPage /> },
      { path: "posts/:id", element: <PostPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
