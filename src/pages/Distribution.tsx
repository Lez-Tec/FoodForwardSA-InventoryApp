import { Truck, MapPin, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import DeliveryRoutes from "@/components/distribution/DeliveryRoutes";
import ActiveDeliveries from "@/components/distribution/ActiveDeliveries";

const Distribution = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => navigate("/")}
        className="mb-4"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Distribution Management</h1>
        <p className="text-gray-600">Track and manage food deliveries</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Active Deliveries"
          value="18"
          icon={Truck}
          description="In progress"
          trend={{ value: 3, isPositive: true }}
        />
        <StatCard
          title="Delivery Points"
          value="42"
          icon={MapPin}
          description="Active locations"
        />
        <StatCard
          title="Avg Delivery Time"
          value="45 min"
          icon={Clock}
          description="This week"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Completed Today"
          value="24"
          icon={CheckCircle}
          description="Successfully delivered"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <DeliveryRoutes />
        <ActiveDeliveries />
      </div>
    </div>
  );
};

export default Distribution;