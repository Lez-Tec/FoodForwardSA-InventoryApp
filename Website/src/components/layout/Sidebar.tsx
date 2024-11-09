import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Box,
  Users,
  Truck,
  Shield,
  Menu,
  X,
  Home,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Box, label: "Inventory", path: "/inventory" },
    { icon: Users, label: "Donors & Volunteers", path: "/people" },
    { icon: Truck, label: "Distribution", path: "/distribution" },
    { icon: Shield, label: "Security", path: "/security" },
  ];

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };

  return (
    <div
      className={cn(
        "h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        {!collapsed && (
          <span className="font-bold text-lg text-primary">Food Forward</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>
      <nav className="flex-1 p-2">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            className={cn(
              "w-full justify-start mb-1",
              collapsed ? "px-2" : "px-4"
            )}
            onClick={() => navigate(item.path)}
          >
            <item.icon size={20} className="mr-2" />
            {!collapsed && <span>{item.label}</span>}
          </Button>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className={cn("w-full justify-start", collapsed ? "px-2" : "px-4")}
          onClick={handleLogout}
        >
          <LogOut size={20} className="mr-2" />
          {!collapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;