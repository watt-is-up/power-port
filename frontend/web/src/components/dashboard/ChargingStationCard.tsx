import { MapPin, Zap, Star, MoreVertical, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type StationStatus = "available" | "in-use" | "error" | "idle";

interface ChargingStationCardProps {
  id: string;
  name: string;
  location: string;
  status: StationStatus;
  power: string;
  rating: number;
  profit: string;
  isPrivate?: boolean;
  onClick?: () => void;
}

const statusConfig: Record<StationStatus, { label: string; className: string }> = {
  available: { label: "Available", className: "bg-success/20 text-success" },
  "in-use": { label: "In Use", className: "bg-primary/20 text-primary" },
  error: { label: "Error", className: "bg-destructive/20 text-destructive" },
  idle: { label: "Idle", className: "bg-muted text-muted-foreground" },
};

export function ChargingStationCard({
  id,
  name,
  location,
  status,
  power,
  rating,
  profit,
  isPrivate,
  onClick,
}: ChargingStationCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <div 
      className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all cursor-pointer animate-fade-in group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            status === "available" ? "bg-success/20" : 
            status === "in-use" ? "bg-primary/20" : 
            status === "error" ? "bg-destructive/20" : "bg-muted"
          )}>
            <Zap className={cn(
              "w-5 h-5",
              status === "available" ? "text-success" : 
              status === "in-use" ? "text-primary" : 
              status === "error" ? "text-destructive" : "text-muted-foreground"
            )} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-card-foreground">{name}</h3>
              {isPrivate && <Lock className="w-3 h-3 text-muted-foreground" />}
            </div>
            <p className="text-xs text-muted-foreground">ID: {id}</p>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-popover border-border">
            <DropdownMenuItem>Edit Station</DropdownMenuItem>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Set as Private</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <MapPin className="w-4 h-4" />
        <span className="truncate">{location}</span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className={cn(
          "px-2 py-1 rounded-full text-xs font-medium",
          statusInfo.className
        )}>
          {statusInfo.label}
        </span>
        
        <div className="flex items-center gap-4 text-xs">
          <span className="text-muted-foreground">{power}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-warning fill-warning" />
            <span className="text-card-foreground">{rating}</span>
          </div>
          <span className="text-success font-medium">{profit}</span>
        </div>
      </div>
    </div>
  );
}
