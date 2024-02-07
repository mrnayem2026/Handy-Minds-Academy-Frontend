export const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: "<AdminDashboardPage />",
    },
    {
      name: 'User Management',
      children: [
        {
          name: 'Create Admin',
          path: 'create-admin',
          element: "<CreateAdmin />",
        },
        {
          name: 'Create Faculty',
          path: 'create-faculty',
          element: "<CreateFaculty />",
        },
        {
          name: 'Create Student',
          path: 'create-student',
          element: "<CreateStudent />",
        },
        {
          name: 'Create Member',
          path: 'create-member',
          element: "<CreateStudent />",
        },
      ],
    },
  ];