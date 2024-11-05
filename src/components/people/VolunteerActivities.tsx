import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const volunteerActivities = [
  {
    id: 1,
    activity: "Food Sorting",
    description: "Sort and organize donated food items",
    requiredSkills: ["Physical ability", "Attention to detail"],
    timeCommitment: "4 hours",
    volunteers: 12,
    status: "Active",
  },
  {
    id: 2,
    activity: "Distribution Support",
    description: "Help distribute food to community members",
    requiredSkills: ["Customer service", "Organization"],
    timeCommitment: "4 hours",
    volunteers: 8,
    status: "Urgent",
  },
  {
    id: 3,
    activity: "Food Drive",
    description: "Collect food donations from local businesses",
    requiredSkills: ["Communication", "Transportation"],
    timeCommitment: "4 hours",
    volunteers: 6,
    status: "Upcoming",
  },
];

const VolunteerActivities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5" />
          Volunteer Activities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Activity</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Volunteers</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {volunteerActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{activity.activity}</div>
                      <div className="text-sm text-muted-foreground">{activity.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>{activity.timeCommitment}</TableCell>
                  <TableCell>{activity.volunteers}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        activity.status === "Urgent" 
                          ? "destructive" 
                          : activity.status === "Active" 
                          ? "default" 
                          : "secondary"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default VolunteerActivities;