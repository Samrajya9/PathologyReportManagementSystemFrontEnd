import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useState, type HTMLAttributes } from "react";
import {
  getActiveMenuLabel,
  menuItems,
  type MenuItem,
} from "@/constanst/navigationItems";

interface AppSidebarProps extends HTMLAttributes<HTMLDivElement> {}

export function AppSidebar({ className }: AppSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={cn(
        "text-sidebar-foreground relative transition-all duration-300 ease-out flex flex-col",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex h-16 items-center justify-center">
        <h2
          className={cn(
            "font-semibold tracking-tight transition-opacity duration-200",
            isCollapsed ? "opacity-0" : "opacity-100"
          )}
        >
          {getActiveMenuLabel(location.pathname, menuItems)}
        </h2>

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={cn(
            "h-8 w-8 absolute transition-all duration-300 text-sidebar-foreground",
            isCollapsed ? "left-1/2 -translate-x-1/2" : "right-2"
          )}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          {menuItems.map((item) => (
            <NavItem
              key={item.url}
              item={item}
              isCollapsed={isCollapsed}
              location={location}
              depth={0}
            />
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}

interface NavItemProps {
  item: MenuItem;
  isCollapsed: boolean;
  location: ReturnType<typeof useLocation>;
  depth: number;
}

const NavItem = ({ item, isCollapsed, location, depth }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;
  const hasChildren = item.children && item.children.length > 0;
  const isActive =
    location.pathname === item.url ||
    (item.url !== "#" && location.pathname.startsWith(item.url));

  const toggleOpen = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="space-y-1">
      <Link
        to={item.url === "#" ? location.pathname : item.url}
        onClick={toggleOpen}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
          isActive
            ? "bg-sidebar-accent text-sidebar-accent-foreground"
            : "text-sidebar-accent hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          isCollapsed && "justify-center px-0",
          `pl-${3 + depth * 2}`
        )}
      >
        <Icon className="h-5 w-5 shrink-0" />
        {!isCollapsed && (
          <>
            <span className="text-sm font-medium flex-1">{item.label}</span>
            {hasChildren &&
              (isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              ))}
          </>
        )}
      </Link>

      {!isCollapsed && isOpen && hasChildren && (
        <nav className="grid gap-1 px-2">
          {item.children?.map((child) => (
            <NavItem
              key={child.url}
              item={child}
              isCollapsed={isCollapsed}
              location={location}
              depth={depth + 1}
            />
          ))}
        </nav>
      )}
    </div>
  );
};
