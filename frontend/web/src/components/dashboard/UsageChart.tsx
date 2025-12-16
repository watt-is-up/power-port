import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", usage: 12400 },
  { month: "Feb", usage: 14200 },
  { month: "Mar", usage: 18900 },
  { month: "Apr", usage: 16800 },
  { month: "May", usage: 21500 },
  { month: "Jun", usage: 19300 },
  { month: "Jul", usage: 24100 },
  { month: "Aug", usage: 22800 },
  { month: "Sep", usage: 26500 },
  { month: "Oct", usage: 23700 },
  { month: "Nov", usage: 28900 },
  { month: "Dec", usage: 31200 },
];

export function UsageChart() {
  return (
    <div className="bg-card border border-border rounded-xl p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-card-foreground">Power Usage (kWh)</h3>
        </div>
        <span className="text-xs text-muted-foreground">Last 12 months</span>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--popover))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--popover-foreground))"
              }}
              formatter={(value: number) => [`${value.toLocaleString()} kWh`, "Usage"]}
            />
            <Bar 
              dataKey="usage" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
