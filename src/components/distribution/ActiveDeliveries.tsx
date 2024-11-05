import { Map } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const deliveries = [
  {
    id: 1,
    deliveryId: "DEL-2024-001",
    destination: "Community Center A",
    items: [
      { name: "Fresh Produce", quantity: "250kg" },
      { name: "Canned Goods", quantity: "150 units" },
      { name: "Bread", quantity: "100 loaves" },
    ],
    status: "in-transit",
    eta: "30 mins",
    temperature: "4°C",
  },
  {
    id: 2,
    deliveryId: "DEL-2024-002",
    destination: "Food Bank B",
    items: [
      { name: "Dairy Products", quantity: "200L" },
      { name: "Frozen Meals", quantity: "300 units" },
    ],
    status: "loading",
    eta: "1 hour",
    temperature: "-18°C",
  },
  {
    id: 3,
    deliveryId: "DEL-2024-003",
    destination: "Shelter C",
    items: [
      { name: "Ready Meals", quantity: "400 units" },
      { name: "Fresh Fruit", quantity: "180kg" },
    ],
    status: "arrived",
    eta: "0 mins",
    temperature: "5°C",
  },
];

const ActiveDeliveries = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Map className="h-5 w-5" />
          Active Deliveries
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          {deliveries.map((delivery) => (
            <div key={delivery.id} className="mb-6 p-4 border rounded-lg last:mb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{delivery.deliveryId}</h3>
                  <p className="text-sm text-muted-foreground">
                    Destination: {delivery.destination}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ETA: {delivery.eta} | Temp: {delivery.temperature}
                  </p>
                </div>
                <Badge
                  variant={
                    delivery.status === "arrived"
                      ? "default"
                      : delivery.status === "in-transit"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {delivery.status}
                </Badge>
              </div>
              <div className="space-y-2">
                {delivery.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="text-muted-foreground">{item.quantity}</span>
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

export default ActiveDeliveries;