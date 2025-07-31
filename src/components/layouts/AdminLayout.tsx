import { AppSidebar } from "../AppSidebar";
import TopBar from "../TopBar";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground pl-4 overflow-hidden">
      <AppSidebar />
      <div className="flex flex-col w-full">
        <TopBar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
