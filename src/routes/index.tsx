import AdminLayout from "@/components/layouts/AdminLayout";
import Dashboard from "@/pages/Admin/Dashboard";
import CreateDepartment from "@/pages/Admin/Department/create";
import NotFound from "@/pages/NotFound";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "reports/financial", element: <Dashboard /> },
      { path: "department", element: <Dashboard /> },
      { path: "department/create", element: <CreateDepartment /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
