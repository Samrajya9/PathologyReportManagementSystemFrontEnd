import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <Card className="w-50.5 h-28 bg-[#EDEEFC] shadow-none p-6 flex flex-col gap-2">
        <h1>Views</h1>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold">7,265</p>
          <p className="text-sm">+11.01%</p>
          <TrendingUp size={14} />
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
