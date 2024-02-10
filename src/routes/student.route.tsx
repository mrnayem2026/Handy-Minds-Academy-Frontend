import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const  studentPath = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard />,
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <OfferedCourse />,
      },
]