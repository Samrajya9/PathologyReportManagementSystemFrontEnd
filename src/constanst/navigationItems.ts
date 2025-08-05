import { BarChart3, CreditCard, CreditCard as Card } from "lucide-react";

export function getActiveMenuLabel(
  url: string,
  items: MenuItem[]
): string | undefined {
  for (const item of items) {
    if (item.url === url) return item.label;
    if (item.children) {
      const result = getActiveMenuLabel(url, item.children);
      if (result) return result;
    }
  }
  return undefined;
}

// Route graph types
type RouteNode = {
  path: string;
  [key: string]: string | RouteNode;
};

type Routes = {
  [key: string]: RouteNode;
};

// Your route graph
export const routeGraph: Routes = {
  admin: {
    path: "admin",
    dashboard: {
      path: "dashboard",
    },
    department: {
      path: "department",
      create: {
        path: "create",
      },
    },
    container: {
      path: "container",
      create: {
        path: "create",
      },
    },
  },
  user: {
    path: "user",
    profile: {
      path: "profile",
    },
  },
};

// Helper function to get nested path (alternative approach)
export function getPath(obj: any): string {
  return obj.path;
}

export function buildPath(routes: Routes, ...keys: string[]): string {
  let current: any = routes;
  const pathSegments: string[] = [];

  for (const key of keys) {
    if (
      current[key] &&
      typeof current[key] === "object" &&
      "path" in current[key]
    ) {
      current = current[key];
      pathSegments.push(current.path);
    } else {
      throw new Error(`Invalid route key: ${key}`);
    }
  }

  return "/" + pathSegments.join("/");
}

export const paths = {
  admin: {
    index: buildPath(routeGraph, "admin"),
    dashboard: { index: buildPath(routeGraph, "admin", "dashboard") },
    department: {
      index: buildPath(routeGraph, "admin", "department"),
      create: buildPath(routeGraph, "admin", "department", "create"),
    },
    container: {
      index: buildPath(routeGraph, "admin", "container"),
      create: buildPath(routeGraph, "admin", "container", "create"),
    },
    test_unit: {
      index: "/admin/test_unit",
      create: "/admin/test_unit/create",
    },
    test_category: {
      index: "/admin/test_category",
      create: "/admin/test_category/create",
    },
  },
  user: {
    profile: buildPath(routeGraph, "user", "profile"),
  },
};

export interface MenuItem {
  icon: any;
  label: string;
  url: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  { icon: BarChart3, label: "Dashboard", url: paths.admin.dashboard.index },

  {
    icon: CreditCard,
    label: "Department",
    url: paths.admin.department.index,
    children: [
      { icon: Card, label: "Create", url: paths.admin.department.create },
    ],
  },
  {
    icon: CreditCard,
    label: "Container",
    url: paths.admin.container.index,
    children: [
      { icon: Card, label: "Create", url: paths.admin.container.create },
    ],
  },
  {
    icon: CreditCard,
    label: "Test Unit",
    url: paths.admin.test_unit.index,
    children: [
      { icon: Card, label: "Create", url: paths.admin.test_unit.create },
    ],
  },
  {
    icon: CreditCard,
    label: "Test Category",
    url: paths.admin.test_category.index,
    children: [
      { icon: Card, label: "Create", url: paths.admin.test_category.create },
    ],
  },
];
