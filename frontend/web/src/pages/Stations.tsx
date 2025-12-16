import { useState } from "react";
import { Search, Filter, Plus, Grid3X3, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChargingStationCard, StationStatus } from "@/components/dashboard/ChargingStationCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockStations = [
  { id: "CS-001", name: "Downtown Plaza", location: "123 Main St, Downtown", status: "available" as StationStatus, power: "150kW", rating: 4.8, profit: "$1,240", isPrivate: false },
  { id: "CS-002", name: "Mall Parking A", location: "456 Shopping Ave, Level 2", status: "in-use" as StationStatus, power: "50kW", rating: 4.5, profit: "$890", isPrivate: false },
  { id: "CS-003", name: "Office Complex", location: "789 Business Park", status: "in-use" as StationStatus, power: "22kW", rating: 4.2, profit: "$560", isPrivate: true },
  { id: "CS-004", name: "Highway Rest Stop", location: "I-95 Mile 42", status: "error" as StationStatus, power: "350kW", rating: 4.9, profit: "$2,100", isPrivate: false },
  { id: "CS-005", name: "Hotel Entrance", location: "Grand Hotel, Main Entrance", status: "idle" as StationStatus, power: "11kW", rating: 4.0, profit: "$320", isPrivate: true },
  { id: "CS-006", name: "Airport Terminal", location: "Terminal B, P3", status: "available" as StationStatus, power: "150kW", rating: 4.7, profit: "$1,850", isPrivate: false },
  { id: "CS-007", name: "University Campus", location: "Engineering Building", status: "available" as StationStatus, power: "22kW", rating: 4.3, profit: "$420", isPrivate: true },
  { id: "CS-008", name: "City Center Garage", location: "2nd Floor, Zone A", status: "in-use" as StationStatus, power: "100kW", rating: 4.6, profit: "$980", isPrivate: false },
  { id: "CS-009", name: "Residential Complex", location: "Sunset Apartments, B1", status: "idle" as StationStatus, power: "7kW", rating: 3.9, profit: "$180", isPrivate: true },
];

export default function Stations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredStations = mockStations.filter((station) => {
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         station.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || station.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Charging Stations</h1>
          <p className="text-muted-foreground">Manage and monitor all your charging stations</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Station
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary border-none"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40 bg-secondary border-none">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="in-use">In Use</SelectItem>
            <SelectItem value="error">Error</SelectItem>
            <SelectItem value="idle">Idle</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-1 bg-secondary rounded-lg p-1">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="icon"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-primary" : ""}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="icon"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-primary" : ""}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing {filteredStations.length} of {mockStations.length} stations
      </p>

      {/* Stations Grid */}
      <div className={
        viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
          : "space-y-3"
      }>
        {filteredStations.map((station) => (
          <ChargingStationCard key={station.id} {...station} />
        ))}
      </div>

      {filteredStations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No stations found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
