import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

const Donations = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Donations</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> New Donation
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search donations..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Donation #{i}</h3>
                <p className="text-sm text-gray-500">From: Local Supermarket</p>
                <p className="text-sm text-gray-500">Type: Non-perishable goods</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Quantity: 100kg</p>
                <p className="text-sm text-gray-500">Received: 2 days ago</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Donations;