import { AppSidebar } from "@/components/AppSidebar";
import TopBar from "@/components/TopBar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <AppSidebar />
      <div className="flex flex-col w-full">
        <TopBar />
        <main className="flex-1 p-6">{/* Your main content goes here */}</main>
      </div>
    </div>
  );
};

export default Dashboard;
