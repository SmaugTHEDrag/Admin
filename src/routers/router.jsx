import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import UploadBook from "../Dashboard/UploadBook";
import Dashboard from "../Dashboard/Dashboard";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";

import Favorite from "../Dashboard/Favorite";
const router = createBrowserRouter([

  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
      { path: "/upload", element: <UploadBook /> },
      { path: "/manage", element: <ManageBooks /> },
      { path: "/favorite", element: <Favorite /> },
      { path: "/edit-books/:id", element: <EditBooks />,
      loader: ({ params }) => fetch(`https://book-management-4qw7.onrender.com/book/${params.id}`)
    },
    ],
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "/create-user",
    element: <Signup/>
  },
  {
    path:"/logout",
    element: <Logout/>
  }
]);

export default router;