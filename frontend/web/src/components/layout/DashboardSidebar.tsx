import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Zap, 
  Users, 
  FolderKanban, 
  Settings, 
  MapPin,
  ChevronLeft,
  ChevronRight,
  BatteryCharging
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { 
    section: "Main",
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
      { name: "Charging Stations", href: "/stations", icon: Zap },
      { name: "Map View", href: "/map", icon: MapPin },
    ]
  },
  {
    section: "Management",
    items: [
      { name: "Station Groups", href: "/groups", icon: FolderKanban },
      { name: "User Groups", href: "/users", icon: Users },
    ]
  },
  {
    section: "Account",
    items: [
      { name: "Settings", href: "/settings", icon: Settings },
    ]
  }
];

export function DashboardSidebar({ collapsed, onToggle }: DashboardSidebarProps) {
  const location = useLocation();

  return (
    <aside 
      className={cn(
        "bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <BatteryCharging className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="font-semibold text-foreground">ChargePro</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map((section) => (
          <div key={section.section} className="mb-4">
            {!collapsed && (
              <p className="px-4 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {section.section}
              </p>
            )}
            <ul className="space-y-1 px-2">
              {section.items.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive 
                          ? "bg-sidebar-accent text-primary" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      <item.icon className={cn("w-5 h-5", collapsed && "mx-auto")} />
                      {!collapsed && <span>{item.name}</span>}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="p-2 border-t border-sidebar-border">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
    </aside>
  );
}
