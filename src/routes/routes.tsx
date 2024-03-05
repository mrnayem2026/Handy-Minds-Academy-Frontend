import App from "../App";
import {  adminPaths } from "./admin.route";
import { studentPath } from "./student.route";
import { facultyPaths } from "./faculty.route";
import { createBrowserRouter } from "react-router-dom";
import { routeGenerator } from "../utils/routesGenerator";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPaths)
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPaths)
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPath)
  },
  {
    path: "/login",
    element:<LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
]);

export default router;
