import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const upcomingShifts = [
  {
    id: 1,
    date: "2024-03-15",
    time: "09:00 - 13:00",
    location: "Main Warehouse",
    role: "Food Sorting",
    volunteers: [
      { name: "John Smith", status: "Confirmed" },
      { name: "Sarah Johnson", status: "Pending" },
      { name: "Mike Wilson", status: "Confirmed" },
    ],
  },
  {
    id: 2,
    date: "2024-03-16",
    time: "14:00 - 18:00",
    location: "Distribution Center",
    role: "Distribution Support",
    volunteers: [
      { name: "Emma Davis", status: "Confirmed" },
      { name: "Tom Brown", status: "Confirmed" },
    ],
  },
  {
    id: 3,
    date: "2024-03-17",
    time: "10:00 - 14:00",
    location: "Community Center",
    role: "Food Drive",
    volunteers: [
      { name: "Lisa Anderson", status: "Pending" },
      { name: "David Miller", status: "Confirmed" },
      { name: "Karen White", status: "Confirmed" },
    ],
  },
];

const VolunteerShifts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Volunteer Shifts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          {upcomingShifts.map((shift) => (
            <div key={shift.id} className="mb-6 p-4 border rounded-lg last:mb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{shift.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {shift.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {shift.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {shift.location}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {shift.volunteers.map((volunteer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span>{volunteer.name}</span>
                    <Badge variant={volunteer.status === "Confirmed" ? "default" : "secondary"}>
                      {volunteer.status}
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

export default VolunteerShifts;