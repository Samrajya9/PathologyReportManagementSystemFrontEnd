import Dashboard from "@/pages/Admin/Dashboard";
import NotFound from "@/pages/NotFound";
import type { RouteObject } from "react-router";
import { lazy, Suspense } from "react";
import Container from "@/pages/Admin/Container";
import { paths } from "@/constanst/navigationItems";
import TestUnit from "@/pages/Admin/TestUnit";
import Specimens from "@/pages/Admin/Specimen";
import NewAdminLayout from "@/components/layouts/NewAdminLayout";
import Login from "@/pages/Auth/Login";
import UserLogin from "@/pages/Auth/UserLogin";
import OrderPage from "@/pages/Admin/Orders/page";

const Department = lazy(() => import("@/pages/Admin/Department"));
const Test = lazy(() => import("@/pages/Admin/Test"));

export const routes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  {
    path: paths.admin.index,
    element: (
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
        path: paths.admin.specimens.index,
        children: [{ index: true, element: <Specimens /> }],
      },

      {
        path: paths.admin.test.index,
        children: [{ index: true, element: <Test /> }],
      },

      {
        path: "/admin/orders",
        children: [
          {
            index: true,
            element: (
              <>
                <OrderPage />
              </>
            ),
          },
        ],
      },
    ],
  },

  {
    path: "user",
    element: (
      <Suspense fallback={<div>Loading </div>}>
        <NewAdminLayout />
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: (
          <>
            <UserLogin />
          </>
        ),
      },
    ],
  },

  {
    path: "",
    element: <NewAdminLayout />,
  },

  { path: "*", element: <NotFound /> },
];
