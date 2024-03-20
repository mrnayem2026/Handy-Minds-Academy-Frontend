import AdminDashboardPage from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademicSemester from "../pages/admin/academicManagment/AcademicSemester";





export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboardPage />,
  }, 
  {
    name:"Acadimic Management",
    children:[
      {
        name: "Academic Management",
        path: "academic-semesters",
        element: <AcademicSemester/>,
      },
    ]
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
];


