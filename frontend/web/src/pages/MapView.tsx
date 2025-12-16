import { MapPin, Zap, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const stations = [
  { id: "CS-001", name: "Downtown Plaza", status: "available", x: 25, y: 30 },
  { id: "CS-002", name: "Mall Parking A", status: "in-use", x: 45, y: 50 },
  { id: "CS-003", name: "Office Complex", status: "in-use", x: 70, y: 35 },
  { id: "CS-004", name: "Highway Rest Stop", status: "error", x: 85, y: 70 },
  { id: "CS-005", name: "Hotel Entrance", status: "idle", x: 30, y: 65 },
  { id: "CS-006", name: "Airport Terminal", status: "available", x: 60, y: 80 },
];

const statusColors = {
  available: "bg-success",
  "in-use": "bg-primary",
  error: "bg-destructive",
  idle: "bg-muted-foreground",
};

export default function MapView() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Map View</h1>
          <p className="text-muted-foreground">Geographic overview of your charging stations</p>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-40 bg-secondary border-none">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="all">All Stations</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="in-use">In Use</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="text-sm text-muted-foreground">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">In Use</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-sm text-muted-foreground">Error</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-muted-foreground" />
          <span className="text-sm text-muted-foreground">Idle</span>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="flex-1 min-h-[500px] bg-card border border-border rounded-xl relative overflow-hidden animate-fade-in">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }} 
        />
        
        {/* Station Markers */}
        {stations.map((station) => (
          <div
            key={station.id}
            className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer group"
            style={{ left: `${station.x}%`, top: `${station.y}%` }}
          >
            <div className="relative">
              <MapPin 
                className={`w-8 h-8 ${
                  station.status === "available" ? "text-success" :
                  station.status === "in-use" ? "text-primary" :
                  station.status === "error" ? "text-destructive" : "text-muted-foreground"
                }`} 
                fill="currentColor"
              />
              <div className={`absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${statusColors[station.status as keyof typeof statusColors]} animate-pulse-glow`} />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-popover border border-border rounded-lg p-3 shadow-lg whitespace-nowrap">
                <p className="font-medium text-popover-foreground">{station.name}</p>
                <p className="text-xs text-muted-foreground">{station.id}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-muted-foreground/30 text-lg">Interactive map - Connect to a maps API for full functionality</p>
        </div>
      </div>
    </div>
  );
}
