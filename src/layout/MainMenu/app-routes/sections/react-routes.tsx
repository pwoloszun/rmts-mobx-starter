import React from 'react';

import Dashboard from 'src/features/00-dashboard/DashboardPage';

// import ComponentBasics 
const reactRoutes = [
  {
    path: "/",
    exact: true,
    label: 'Dashboard',
    main: () => <Dashboard />
  },
  {
    path: "/test-page",
    label: 'Test page',
    main: () => <div>Test page</div>
  },
];

export default reactRoutes;
