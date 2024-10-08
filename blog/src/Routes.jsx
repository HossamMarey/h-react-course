import { createBrowserRouter, Outlet, RouterProvider , redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import MainLayout from "./pages/MainLayout";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import { useToken } from "./App";
import { useMemo } from "react";

const Routes = () => {
  const { token } = useToken();


  

  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
            // lazy: () => import("./pages/HomePage"),
          },
          {
            path: "/blog",
            element: token?  <BlogPage /> : redirect('./'),
            // loader: blogLoader,
          },
          {
            path: "/blog/:slug",
            element: <PostPage />,
          },
        ],
      },
      {
        path: "/",
        element: (
          <div>
            Extra <Outlet />
          </div>
        ),
        children: [{ path: "/login", element: <LoginPage /> }],
      },
    ]);
  }, []);

  return <RouterProvider router={router} />;
};

export default Routes;
