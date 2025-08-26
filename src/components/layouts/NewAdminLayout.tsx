import createCollapsibleBar from "../CollapsibleBar";
import { Link, Outlet, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import {
  Bell,
  Bug,
  ChevronDown,
  ChevronRight,
  ClockFading,
  PanelsTopLeft,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import { menuItems, type MenuItem } from "@/constanst/navigationItems";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarImage } from "../ui/avatar";

const LeftSidebar = createCollapsibleBar();
const RightSidebar = createCollapsibleBar();

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
  const isActive = location.pathname === item.url;

  useEffect(() => {
    setIsOpen(true);
  }, [isActive]);

  const toggleOpen = (event: React.MouseEvent) => {
    event.preventDefault;
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="space-y-1">
      <Link
        to={item.url}
        onClick={toggleOpen}
        className={cn(
          "flex items-center gap-3 rounded-md py-2 transition-all duration-300",
          isActive
            ? "bg-sidebar-accent text-sidebar-accent-foreground px-3"
            : "text-sidebar-accent hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:px-3",
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
                <ChevronDown className="h-4 w-4" onClick={toggleOpen} />
              ) : (
                <ChevronRight className="h-4 w-4" onClick={toggleOpen} />
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

const NavList = () => {
  const { useCollapsibleBarContext } = LeftSidebar;
  const { isCollapsed } = useCollapsibleBarContext();
  const location = useLocation();

  return (
    <nav className="grid gap-1">
      {menuItems.map((item) => (
        <NavItem
          key={item.label}
          item={item}
          isCollapsed={isCollapsed}
          location={location}
          depth={0}
        />
      ))}
    </nav>
  );
};

const LeftSiderBarHeader = () => {
  const { isCollapsed } = LeftSidebar.useCollapsibleBarContext();
  return (
    <div className="flex-1 flex gap-4 items-center ">
      <Avatar className="w-8 h-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
      {isCollapsed ? null : <p>Samrajya</p>}
    </div>
  );
};

const NewAdminLayout = () => {
  return (
    <LeftSidebar.Provider>
      <RightSidebar.Provider>
        <div className="flex min-h-screen">
          <LeftSidebar.Aside
            className="border-r border-r-black/10"
            collapsedWidth="w-18"
          >
            <ScrollArea className="p-4">
              <div className="flex flex-col gap-5 ">
                <LeftSiderBarHeader />
                <NavList />
              </div>
            </ScrollArea>
          </LeftSidebar.Aside>
          <div className="flex-1 flex flex-col ">
            <Header />
            <main className="flex-1 py-5 px-7">
              <Outlet />
            </main>
          </div>
          <RightSidebar.Aside
            className="border-l border-l-black/10"
            UnCollapsedWidth="w-64"
            collapsedWidth="w-0"
          >
            <ScrollArea className="p-4">
              <NotificationPanel />
              <ActivitiesPanel />
            </ScrollArea>
          </RightSidebar.Aside>
        </div>
      </RightSidebar.Provider>
    </LeftSidebar.Provider>
  );
};

export default NewAdminLayout;

const Header = () => {
  return (
    <header className="flex justify-between py-5 px-7 border-b border-b-black/10">
      <div className="flex items-center gap-2 [&>*:hover]:cursor-pointer">
        <LeftSidebar.Trigger asChild>
          <Button variant={"icon"} size={"sm"}>
            <PanelsTopLeft size={16} />
          </Button>
        </LeftSidebar.Trigger>
      </div>
      <div className="flex items-center gap-5 [&>*:hover]:cursor-pointer">
        <Input
          className="rounded-full border-0 placeholder:text-gray-500 placeholder:font-mono font-mono"
          placeholder="Search"
        />
        <ClockFading size={16} />
        <Button variant={"icon"} size={"sm"}>
          <Sun size={16} />
        </Button>
        <Bell size={16} />
        <RightSidebar.Trigger asChild>
          <Button variant={"icon"} size={"sm"}>
            <PanelsTopLeft size={16} />
          </Button>
        </RightSidebar.Trigger>
      </div>
    </header>
  );
};

const NotificationPanel = () => {
  return (
    <div className="flex flex-col gap-5 py-2 ">
      <h1>Notifications</h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-start justify-start ">
          <div className=" rounded-xl bg-[#EDEEFC] p-2">
            <Bug size={16} className="" />
          </div>
          <div className="flex-1">
            <p>You fixed a bug.</p>
            <p className="text-black/40">Just now</p>
          </div>
        </div>
        <div className="flex gap-3 items-start justify-start ">
          <div className=" rounded-xl bg-[#EDEEFC] p-2">
            <Bug size={16} className="" />
          </div>
          <div className="flex-1">
            <p>You fixed a bug.</p>
            <p className="text-black/40">Just now</p>
          </div>
        </div>
        <div className="flex gap-3 items-start justify-start ">
          <div className=" rounded-xl bg-[#EDEEFC] p-2">
            <Bug size={16} className="" />
          </div>
          <div className="flex-1">
            <p>You fixed a bug.</p>
            <p className="text-black/40">Just now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivitiesPanel = () => {
  return (
    <div className="flex flex-col gap-5 py-2 ">
      <h1>Activities</h1>
      <div className="flex flex-col gap-5 items-start">
        <div className="flex gap-3 items-start justify-start ">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div className="flex-1">
            <p>Changed the style.</p>
            <p className="text-black/40">Just now</p>
          </div>
        </div>
        <div className="flex gap-3 items-start justify-start ">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div className="flex-1">
            <p>Changed the style.</p>
            <p className="text-black/40">Just now</p>
          </div>
        </div>{" "}
        <div className="flex gap-3 items-start justify-start ">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div className="flex-1">
            <p>Changed the style.</p>
            <p className="text-black/40">Just now</p>
          </div>
        </div>
      </div>
    </div>
  );
};
