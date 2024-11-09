import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const systemStatuses = [
  {
    id: 1,
    component: "Authentication Service",
    status: "operational",
    lastCheck: "2 minutes ago",
    metrics: {
      uptime: "99.99%",
      responseTime: "45ms",
      activeUsers: 42,
    },
  },
  {
    id: 2,
    component: "Data Encryption",
    status: "operational",
    lastCheck: "1 minute ago",
    metrics: {
      encryptionStrength: "256-bit",
      certificateExpiry: "11 months",
      secureConnections: 156,
    },
  },
  {
    id: 3,
    component: "Firewall",
    status: "warning",
    lastCheck: "5 minutes ago",
    metrics: {
      blockedAttempts: 247,
      suspiciousIPs: 3,
      trafficAnalysis: "Active",
    },
  },
];

const SystemMonitor = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          System Security Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          {systemStatuses.map((item) => (
            <div key={item.id} className="mb-6 p-4 border rounded-lg last:mb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{item.component}</h3>
                  <p className="text-sm text-muted-foreground">
                    Last checked: {item.lastCheck}
                  </p>
                </div>
                <Badge
                  variant={
                    item.status === "operational"
                      ? "default"
                      : item.status === "warning"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {item.status}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(item.metrics).map(([key, value]) => (
                  <div key={key} className="text-sm">
                    <span className="text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </span>
                    <span className="ml-2 font-medium">{value}</span>
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

export default SystemMonitor;