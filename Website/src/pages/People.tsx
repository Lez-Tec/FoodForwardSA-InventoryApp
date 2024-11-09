import { Users, UserPlus, Heart, Calendar, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import VolunteerShifts from "@/components/people/VolunteerShifts";
import VolunteerActivities from "@/components/people/VolunteerActivities";

const People = () => {
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
        <h1 className="text-4xl font-bold mb-2">Donors & Volunteers</h1>
        <p className="text-gray-600">Manage donors and volunteer activities</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Active Donors"
          value="234"
          icon={Heart}
          description="This month"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Active Volunteers"
          value="156"
          icon={Users}
          description="Currently registered"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="New Signups"
          value="12"
          icon={UserPlus}
          description="Last 7 days"
        />
        <StatCard
          title="Scheduled Events"
          value="8"
          icon={Calendar}
          description="Next 2 weeks"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <VolunteerShifts />
        <VolunteerActivities />
      </div>
    </div>
  );
};

export default People;