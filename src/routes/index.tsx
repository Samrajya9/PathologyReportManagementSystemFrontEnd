import Dashboard from "@/pages/Admin/Dashboard";
import NotFound from "@/pages/NotFound";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
  { path: "/", element: <Dashboard /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
