import { Key, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const accessLogs = [
  {
    id: 1,
    user: "admin@foodforward.org",
    action: "login",
    timestamp: "2024-02-20 14:30:22",
    location: "San Francisco, CA",
    device: "Desktop - Chrome",
    status: "success",
  },
  {
    id: 2,
    user: "volunteer.coord@foodforward.org",
    action: "database_access",
    timestamp: "2024-02-20 14:28:15",
    location: "Los Angeles, CA",
    device: "Mobile - iOS",
    status: "success",
  },
  {
    id: 3,
    user: "unknown",
    action: "login_attempt",
    timestamp: "2024-02-20 14:25:01",
    location: "Beijing, CN",
    device: "Unknown",
    status: "blocked",
  },
];

const AccessLogs = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-5 w-5" />
          Recent Access Logs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          {accessLogs.map((log) => (
            <div key={log.id} className="mb-6 p-4 border rounded-lg last:mb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{log.user}</h3>
                  <p className="text-sm text-muted-foreground">
                    Action: {log.action}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {log.timestamp}
                  </div>
                </div>
                <Badge
                  variant={
                    log.status === "success"
                      ? "default"
                      : log.status === "warning"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {log.status}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-sm">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="ml-2">{log.location}</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Device:</span>
                  <span className="ml-2">{log.device}</span>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AccessLogs;