import { Home, Settings, User, FileText, BarChart3, Mail } from "lucide-react";

export const NAV_PATHS = {
  dashboard: "/admin/dashboard",
  analytics: "/admin/analytics",
  documents: "/admin/documents",
  messages: "/admin/messages",
  profile: "/admin/profile",
  settings: "/admin/settings",
};

export const navigationItems = [
  { title: "Dashboard", url: NAV_PATHS.dashboard, icon: Home },
  { title: "Analytics", url: NAV_PATHS.analytics, icon: BarChart3 },
  { title: "Documents", url: NAV_PATHS.documents, icon: FileText },
  { title: "Messages", url: NAV_PATHS.messages, icon: Mail },
  { title: "Profile", url: NAV_PATHS.profile, icon: User },
  { title: "Settings", url: NAV_PATHS.settings, icon: Settings },
];
