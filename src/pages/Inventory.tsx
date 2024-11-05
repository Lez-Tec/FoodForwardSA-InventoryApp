import { Box, PackageOpen, ArrowUpDown, AlertTriangle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const Inventory = () => {
  const navigate = useNavigate();

  // Sample data for inventory items
  const perishableItems = [
    { id: 1, name: "Fresh Vegetables", quantity: "450 kg", expiryDate: "2024-03-15", status: "Good" },
    { id: 2, name: "Dairy Products", quantity: "200 L", expiryDate: "2024-03-10", status: "Warning" },
    { id: 3, name: "Fresh Fruits", quantity: "300 kg", expiryDate: "2024-03-12", status: "Good" },
    { id: 4, name: "Bread", quantity: "150 units", expiryDate: "2024-03-08", status: "Critical" },
  ];

  const nonPerishableItems = [
    { category: "Canned Goods", items: [
      { name: "Canned Vegetables", quantity: 450 },
      { name: "Canned Fruits", quantity: 320 },
      { name: "Canned Soup", quantity: 280 },
    ]},
    { category: "Dry Goods", items: [
      { name: "Rice", quantity: 800 },
      { name: "Pasta", quantity: 600 },
      { name: "Cereal", quantity: 400 },
    ]},
    { category: "Other", items: [
      { name: "Cooking Oil", quantity: 200 },
      { name: "Salt", quantity: 150 },
      { name: "Sugar", quantity: 250 },
    ]},
  ];

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
        <h1 className="text-4xl font-bold mb-2">Inventory Management</h1>
        <p className="text-gray-600">Track and manage food donations and stock levels</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard
          title="Total Stock"
          value="15,230 kg"
          icon={Box}
          description="Current inventory"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="New Donations"
          value="1,250 kg"
          icon={PackageOpen}
          description="Last 24 hours"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Stock Turnover"
          value="4.2 days"
          icon={ArrowUpDown}
          description="Average time"
        />
        <StatCard
          title="Expiring Soon"
          value="320 kg"
          icon={AlertTriangle}
          description="Within 48 hours"
          trend={{ value: 2, isPositive: false }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {/* Perishable Items Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Perishable Items Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {perishableItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.expiryDate}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            item.status === "Good"
                              ? "bg-green-100 text-green-800"
                              : item.status === "Warning"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Non-Perishable Items Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Non-Perishable Items Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full">
              {nonPerishableItems.map((category, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="font-semibold text-lg mb-2">{category.category}</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item Name</TableHead>
                        <TableHead>Quantity (units)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.items.map((item, itemIndex) => (
                        <TableRow key={itemIndex}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Inventory;
