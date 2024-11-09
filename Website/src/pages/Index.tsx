import { Box, Users, Truck, TrendingUp } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
          <p className="text-gray-600">
            Here's what's happening with Food Forward SA today.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            title="Total Food Collected"
            value="2,500 kg"
            icon={Box}
            description="This month"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Active Volunteers"
            value="156"
            icon={Users}
            description="Currently assigned"
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Deliveries Today"
            value="24"
            icon={Truck}
            description="On schedule"
          />
          <StatCard
            title="Impact Score"
            value="92%"
            icon={TrendingUp}
            description="Community satisfaction"
            trend={{ value: 4, isPositive: true }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <RecentActivity />
        </div>
      </main>
    </div>
  );
};

export default Index;