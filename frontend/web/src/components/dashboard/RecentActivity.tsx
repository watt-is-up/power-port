import { Activity, Zap, User, AlertCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityItem {
  id: string;
  type: "charge" | "user" | "error" | "success";
  message: string;
  time: string;
}

const activities: ActivityItem[] = [
  { id: "1", type: "charge", message: "Station CS-001 charging session started", time: "Just now" },
  { id: "2", type: "user", message: "New user registered via invite link", time: "5 min ago" },
  { id: "3", type: "error", message: "Station CS-012 connection lost", time: "12 min ago" },
  { id: "4", type: "success", message: "Station CS-007 maintenance complete", time: "1 hour ago" },
  { id: "5", type: "charge", message: "Station CS-003 charging session ended", time: "2 hours ago" },
];

const iconConfig = {
  charge: { icon: Zap, className: "text-primary bg-primary/20" },
  user: { icon: User, className: "text-info bg-info/20" },
  error: { icon: AlertCircle, className: "text-destructive bg-destructive/20" },
  success: { icon: CheckCircle, className: "text-success bg-success/20" },
};

export function RecentActivity() {
  return (
    <div className="bg-card border border-border rounded-xl p-5 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-card-foreground">Recent Activity</h3>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const config = iconConfig[activity.type];
          const Icon = config.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", config.className)}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-card-foreground">{activity.message}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
