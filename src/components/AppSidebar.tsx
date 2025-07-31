import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { navigationItems } from "@/constanst/navigationItems";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={cn(
        "bg-sidebar-background text-sidebar-foreground relative transition-all duration-300 ease-in-out flex flex-col border-r",
        "border-sidebar-border",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-center ">
        <h2
          className={cn(
            "font-semibold tracking-tight transition-opacity duration-200",
            isCollapsed ? "opacity-0" : "opacity-100"
          )}
        >
          System
        </h2>

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={cn(
            "text-accent h-8 w-8 absolute transition-all duration-300",
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
          {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.url;
            return (
              <Link
                key={index}
                to={item.url}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground "
                    : "text-sidebar-accent",
                  isCollapsed && "justify-center px-0"
                )}
              >
                <item.icon className={cn("h-5 w-5 shrink-0")} />
                <span
                  className={cn(
                    "text-sm font-medium transition-opacity duration-200",
                    isCollapsed ? "opacity-0 w-0" : "opacity-100"
                  )}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
}
