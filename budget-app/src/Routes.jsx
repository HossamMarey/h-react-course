import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";

import { useMemo } from "react";

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
        ],
      },
    ]);
  }, []);

  return <RouterProvider router={router} />;
};

export default Routes;
