import AdminLayout from "@/components/layouts/AdminLayout";
import Dashboard from "@/pages/Admin/Dashboard";
import NotFound from "@/pages/NotFound";
import type { RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import Container from "@/pages/Admin/Container";
import CreateContainer from "@/pages/Admin/Container/create";
import { paths } from "@/constanst/navigationItems";
import CreateTestUnit from "@/pages/Admin/TestUnit/create";
import TestUnit from "@/pages/Admin/TestUnit";
import TestCategory from "@/pages/Admin/TestCategory";
import CreateTestCategory from "@/pages/Admin/TestCategory/create";

const CreateDepartment = lazy(() => import("@/pages/Admin/Department/create"));
const Department = lazy(() => import("@/pages/Admin/Department"));

export const routes: RouteObject[] = [
  {
    path: paths.admin.index,
    element: (
      <Suspense fallback={<div>Loading </div>}>
        <AdminLayout />
      </Suspense>
    ),
    children: [
      { path: paths.admin.dashboard.index, element: <Dashboard /> },
      {
        path: paths.admin.department.index,
        children: [
          { index: true, element: <Department /> },
          {
            path: paths.admin.department.create,
            element: <CreateDepartment />,
          },
        ],
      },
      {
        path: paths.admin.container.index,
        children: [
          { index: true, element: <Container /> },
          { path: paths.admin.container.create, element: <CreateContainer /> },
        ],
      },
      {
        path: paths.admin.test_unit.index,
        children: [
          { index: true, element: <TestUnit /> },
          { path: paths.admin.test_unit.create, element: <CreateTestUnit /> },
        ],
      },

      {
        path: paths.admin.test_category.index,
        children: [
          { index: true, element: <TestCategory /> },
          {
            path: paths.admin.test_category.create,
            element: <CreateTestCategory />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];
