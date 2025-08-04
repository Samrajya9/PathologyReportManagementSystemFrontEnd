import AdminLayout from "@/components/layouts/AdminLayout";
import Dashboard from "@/pages/Admin/Dashboard";
import NotFound from "@/pages/NotFound";
import type { RouteObject } from "react-router";
import { lazy, Suspense } from "react";

const CreateDepartment = lazy(() => import("@/pages/Admin/Department/create"));

const Department = lazy(() => import("@/pages/Admin/Department"));

const routes: RouteObject[] = [
  {
    path: "admin",
    element: (
      <Suspense fallback={<div>Loading </div>}>
        <AdminLayout />
      </Suspense>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "reports/financial", element: <Dashboard /> },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "department/create",
        element: <CreateDepartment />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
