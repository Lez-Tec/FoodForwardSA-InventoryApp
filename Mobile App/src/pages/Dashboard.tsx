import { Card } from "@/components/ui/card";
import { Package, Truck, Users, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      name: "Total Donations",
      value: "2,345",
      icon: Package,
      change: "+12%",
      changeType: "increase",
    },
    {
      name: "Active Deliveries",
      value: "15",
      icon: Truck,
      change: "+3",
      changeType: "increase",
    },
    {
      name: "Partner Organizations",
      value: "48",
      icon: Users,
      change: "+2",
      changeType: "increase",
    },
    {
      name: "Items Near Expiry",
      value: "23",
      icon: AlertCircle,
      change: "-5",
      changeType: "decrease",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500"> from last month</span>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Donations</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Local Supermarket #{i}</p>
                  <p className="text-sm text-gray-500">Fresh Produce - 50kg</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Deliveries</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Community Center #{i}</p>
                  <p className="text-sm text-gray-500">Scheduled for tomorrow</p>
                </div>
                <span className="text-sm text-gray-500">09:00 AM</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;