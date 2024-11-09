import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, Truck, Users, Bell, UserCircle, Calendar } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  
  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Inventory", href: "/donations", icon: Package },
    { name: "Distribution", href: "/distribution", icon: Truck },
    { name: "Volunteers", href: "/volunteers", icon: Calendar },
    { name: "Partners", href: "/partners", icon: Users },
  ];

  return (
    <div className={`min-h-screen ${isAuthPage ? 'bg-primary' : 'bg-background'}`}>
      {!isAuthPage && (
        <header className="bg-white shadow-sm">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-primary">Food Forward SA</h1>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Bell className="h-6 w-6" />
                </button>
                <Link to="/login" className="p-2 text-gray-400 hover:text-gray-500">
                  <UserCircle className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </header>
      )}
      
      <main className="flex-1 pb-16">
        {children}
      </main>

      {!isAuthPage && (
        <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
          <div className="mx-auto px-4">
            <div className="flex justify-around">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex flex-col items-center py-2 px-3 text-sm font-medium ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="mt-1">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Layout;