import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import MainLayout from "./pages/MainLayout";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import { useMemo } from "react";
import CreatePostPage from "./pages/CreatePostPage";

const Routes = () => {
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
            element: <BlogPage />,
            // loader: blogLoader,
          },

          {
            path: "/blog/create",
            element: <CreatePostPage />,
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
        element: <Outlet />,
        children: [{ path: "/login", element: <LoginPage /> }],
      },
    ]);
  }, []);

  return <RouterProvider router={router} />;
};

export default Routes;
