import { Route } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const routes = [
  {
    id: 1,
    name: "Northern District Route",
    driver: "John Smith",
    vehicle: "Van 01",
    stops: [
      { location: "Community Center A", time: "09:00", status: "completed" },
      { location: "Food Bank B", time: "10:30", status: "in-progress" },
      { location: "Shelter C", time: "11:45", status: "pending" },
    ],
    totalDistance: "45 km",
    estimatedDuration: "3.5 hours",
  },
  {
    id: 2,
    name: "Southern District Route",
    driver: "Sarah Johnson",
    vehicle: "Truck 03",
    stops: [
      { location: "Food Pantry X", time: "13:00", status: "pending" },
      { location: "Community Kitchen Y", time: "14:15", status: "pending" },
      { location: "Distribution Center Z", time: "15:30", status: "pending" },
    ],
    totalDistance: "38 km",
    estimatedDuration: "3 hours",
  },
];

const DeliveryRoutes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Route className="h-5 w-5" />
          Delivery Routes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          {routes.map((route) => (
            <div key={route.id} className="mb-6 p-4 border rounded-lg last:mb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{route.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Driver: {route.driver} | Vehicle: {route.vehicle}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Distance: {route.totalDistance} | Duration: {route.estimatedDuration}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {route.stops.map((stop, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium">{stop.location}</p>
                      <p className="text-sm text-muted-foreground">{stop.time}</p>
                    </div>
                    <Badge
                      variant={
                        stop.status === "completed"
                          ? "default"
                          : stop.status === "in-progress"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {stop.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default DeliveryRoutes;