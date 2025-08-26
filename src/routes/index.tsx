import Dashboard from "@/pages/Admin/Dashboard";
import NotFound from "@/pages/NotFound";
import type { RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import Container from "@/pages/Admin/Container";
import { paths } from "@/constanst/navigationItems";
import TestUnit from "@/pages/Admin/TestUnit";
import TestCategory from "@/pages/Admin/TestCategory";
import Specimens from "@/pages/Admin/Specimen";
import ResultValueTypes from "@/pages/Admin/ResultValueTypes";
import NewAdminLayout from "@/components/layouts/NewAdminLayout";

const Department = lazy(() => import("@/pages/Admin/Department"));
const Test = lazy(() => import("@/pages/Admin/Test"));

export const routes: RouteObject[] = [
  {
    path: paths.admin.index,
    element: (
      // This suspense Will trigger when department and Test is loading
      <Suspense fallback={<div>Loading </div>}>
        <NewAdminLayout />
      </Suspense>
    ),
    children: [
      { path: paths.admin.dashboard.index, element: <Dashboard /> },
      {
        path: paths.admin.department.index,
        children: [{ index: true, element: <Department /> }],
      },
      {
        path: paths.admin.container.index,
        children: [{ index: true, element: <Container /> }],
      },
      {
        path: paths.admin.test_unit.index,
        children: [{ index: true, element: <TestUnit /> }],
      },

      {
        path: paths.admin.test_category.index,
        children: [{ index: true, element: <TestCategory /> }],
      },
      {
        path: paths.admin.specimens.index,
        children: [{ index: true, element: <Specimens /> }],
      },
      {
        path: paths.admin.resultValueTypes.index,
        children: [{ index: true, element: <ResultValueTypes /> }],
      },
      {
        path: paths.admin.test.index,
        children: [{ index: true, element: <Test /> }],
      },
    ],
  },

  {
    path: "",
    element: <NewAdminLayout />,
  },

  { path: "*", element: <NotFound /> },
];
