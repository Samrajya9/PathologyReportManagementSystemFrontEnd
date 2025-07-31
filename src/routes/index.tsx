import AdminLayout from "@/components/layouts/AdminLayout";
import Dashboard from "@/pages/Admin/Dashboard";
import NotFound from "@/pages/NotFound";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [{ path: "dashboard", element: <Dashboard /> }],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
