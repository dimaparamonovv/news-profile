import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import News from "../pages/News";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "news", element: <News /> },
      {
        path: "profile",
        element: <PrivateRoute />,
        children: [{ index: true, element: <Profile /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
