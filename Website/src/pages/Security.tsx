import { Shield, Key, UserCheck, AlertOctagon, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import SystemMonitor from "@/components/security/SystemMonitor";
import AccessLogs from "@/components/security/AccessLogs";

const Security = () => {
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
        <h1 className="text-4xl font-bold mb-2">Security Dashboard</h1>
        <p className="text-gray-600">Monitor system security and access controls</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Active Users"
          value="45"
          icon={UserCheck}
          description="Currently online"
        />
        <StatCard
          title="Security Level"
          value="High"
          icon={Shield}
          description="System status"
          trend={{ value: 100, isPositive: true }}
        />
        <StatCard
          title="Access Keys"
          value="12"
          icon={Key}
          description="Active keys"
        />
        <StatCard
          title="Security Alerts"
          value="0"
          icon={AlertOctagon}
          description="Last 24 hours"
          trend={{ value: 0, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <SystemMonitor />
        <AccessLogs />
      </div>
    </div>
  );
};

export default Security;