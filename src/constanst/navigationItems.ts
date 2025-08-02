import {
  Settings,
  FileText,
  BarChart3,
  Mail,
  TrendingUp,
  Users,
  CreditCard,
  PieChart,
  LineChart,
  Activity,
  UserCheck,
  UserPlus,
  CreditCard as Card,
} from "lucide-react";

export const NAV_PATHS = {
  // Main navigation
  home: "/home",
  dashboard: "/admin/dashboard",
  // Reports
  financialReports: "/admin/reports/financial",
  salesReports: "/reports/sales",
  performanceReports: "/reports/performance",
  // Analytics
  userAnalytics: "/analytics/users",
  revenueAnalytics: "/analytics/revenue",
  trafficAnalytics: "/analytics/traffic",
  // Community
  activeUsers: "/community/users/active",
  inviteUsers: "/community/users/invite",
  messages: "/community/messages",
  // Billing
  paymentMethods: "/billing/payment-methods",
  invoices: "/billing/invoices",
  billingHistory: "/billing/history",
  // Settings
  settings: "/settings",

  department: "/admin/department",
  departmentCreate: "/admin/department/create",
};

export interface MenuItem {
  icon: any;
  label: string;
  url: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  { icon: BarChart3, label: "Dashboard", url: NAV_PATHS.dashboard },
  {
    icon: FileText,
    label: "Reports",
    url: "/reports",
    children: [
      {
        icon: PieChart,
        label: "Finance",
        url: NAV_PATHS.financialReports,
      },
      { icon: LineChart, label: "Sales", url: NAV_PATHS.salesReports },
      {
        icon: Activity,
        label: "Performance",
        url: NAV_PATHS.performanceReports,
      },
    ],
  },
  {
    icon: TrendingUp,
    label: "Analytics",
    url: "#",
    children: [
      { icon: Activity, label: "User", url: NAV_PATHS.userAnalytics },
      {
        icon: BarChart3,
        label: "Revenue",
        url: NAV_PATHS.revenueAnalytics,
      },
      {
        icon: PieChart,
        label: "Traffic",
        url: NAV_PATHS.trafficAnalytics,
      },
    ],
  },
  {
    icon: Users,
    label: "Community",
    url: "#",
    children: [
      { icon: UserCheck, label: "Active Users", url: NAV_PATHS.activeUsers },
      { icon: UserPlus, label: "Invite Users", url: NAV_PATHS.inviteUsers },
      { icon: Mail, label: "Messages", url: NAV_PATHS.messages },
    ],
  },

  {
    icon: CreditCard,
    label: "Department",
    url: "#",
    children: [
      { icon: Card, label: "Create", url: NAV_PATHS.departmentCreate },
    ],
  },
  { icon: Settings, label: "Settings", url: NAV_PATHS.settings },
];

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
