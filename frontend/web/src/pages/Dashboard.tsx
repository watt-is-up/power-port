import { Zap, TrendingUp, Users, DollarSign } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ChargingStationCard, StationStatus } from "@/components/dashboard/ChargingStationCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UsageChart } from "@/components/dashboard/UsageChart";

const mockStations = [
  { id: "CS-001", name: "Downtown Plaza", location: "123 Main St, Downtown", status: "available" as StationStatus, power: "150kW", rating: 4.8, profit: "$1,240", isPrivate: false },
  { id: "CS-002", name: "Mall Parking A", location: "456 Shopping Ave, Level 2", status: "in-use" as StationStatus, power: "50kW", rating: 4.5, profit: "$890", isPrivate: false },
  { id: "CS-003", name: "Office Complex", location: "789 Business Park", status: "in-use" as StationStatus, power: "22kW", rating: 4.2, profit: "$560", isPrivate: true },
  { id: "CS-004", name: "Highway Rest Stop", location: "I-95 Mile 42", status: "error" as StationStatus, power: "350kW", rating: 4.9, profit: "$2,100", isPrivate: false },
  { id: "CS-005", name: "Hotel Entrance", location: "Grand Hotel, Main Entrance", status: "idle" as StationStatus, power: "11kW", rating: 4.0, profit: "$320", isPrivate: true },
  { id: "CS-006", name: "Airport Terminal", location: "Terminal B, P3", status: "available" as StationStatus, power: "150kW", rating: 4.7, profit: "$1,850", isPrivate: false },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your charging network overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Stations"
          value="24"
          change="+3 this month"
          changeType="positive"
          icon={Zap}
        />
        <StatsCard
          title="Active Sessions"
          value="12"
          change="8 available"
          changeType="neutral"
          icon={TrendingUp}
        />
        <StatsCard
          title="Total Users"
          value="1,847"
          change="+124 this week"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="Monthly Revenue"
          value="$12,450"
          change="+18.2% vs last month"
          changeType="positive"
          icon={DollarSign}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2">
          <UsageChart />
        </div>
        
        {/* Activity */}
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Stations Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Charging Stations</h2>
          <a href="/stations" className="text-sm text-primary hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockStations.map((station) => (
            <ChargingStationCard key={station.id} {...station} />
          ))}
        </div>
      </div>
    </div>
  );
}
