import { createBrowserRouter } from "react-router-dom";
import AnotherLayout from "../layout/AnotherLayout";
import MainLayout from "../layout/MainLayout";
import CommentsPage from "../pages/CommentsPage";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Fuck You!</h1>,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [
          {
            path: ":userId",
            element: <PostsPage />,
            children: [
              {
                path: ":postId",
                element: <CommentsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  { path: "/okten", element: <AnotherLayout /> },
]);
