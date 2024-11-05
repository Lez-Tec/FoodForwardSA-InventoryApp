import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  {
    id: 1,
    type: "donation",
    description: "New food donation received from SuperMarket Chain",
    time: "2 hours ago",
    color: "bg-emerald-500"
  },
  {
    id: 2,
    type: "distribution",
    description: "Delivered 500kg of food to Community Center A",
    time: "4 hours ago",
    color: "bg-violet-500"
  },
  {
    id: 3,
    type: "volunteer",
    description: "5 new volunteers registered for next week",
    time: "5 hours ago",
    color: "bg-amber-500"
  },
  {
    id: 4,
    type: "inventory",
    description: "Updated inventory count for fresh produce",
    time: "1 day ago",
    color: "bg-sky-500"
  },
];

const RecentActivity = () => {
  return (
    <Card className="col-span-3 hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates from across the system</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className={`flex h-2 w-2 translate-y-1 rounded-full ${activity.color}`} />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.description}
                </p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;