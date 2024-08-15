import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import MainLayout from "./pages/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: (
  //     <div>
  //       Extra <Outlet />{" "}
  //     </div>
  //   ),
  //   children: [{ path: "/extra", element: <div>extra</div> }],
  // },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
