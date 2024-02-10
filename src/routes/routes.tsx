import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {  adminPaths } from "./admin.route";
import { routeGenerator } from "../utils/routesGenerator";

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
    children: routeGenerator(adminPaths)
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(adminPaths)
  },
  {
    path: "/login",
    element: <App></App>,
    children: routeGenerator(adminPaths)
  },
  {
    path: "/register",
    element: <App></App>,
    children: routeGenerator(adminPaths)
  },
]);

export default router;
