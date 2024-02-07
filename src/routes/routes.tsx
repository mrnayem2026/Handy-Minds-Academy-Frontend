import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/About";
import AdminDashboardPage from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <AboutPage></AboutPage>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: [
      {
        path: "/admin",
        element: <AdminDashboardPage></AdminDashboardPage>,
      },
      {
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
]);

export default router;
