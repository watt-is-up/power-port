import { useState } from "react";
import { FolderKanban, Plus, MoreVertical, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockGroups = [
  { id: "GRP-001", name: "Downtown Stations", stationCount: 5, description: "All downtown charging points" },
  { id: "GRP-002", name: "Highway Network", stationCount: 8, description: "Interstate rest stop stations" },
  { id: "GRP-003", name: "Premium Locations", stationCount: 3, description: "High-traffic premium charging" },
  { id: "GRP-004", name: "Private Corporate", stationCount: 12, description: "Corporate client stations" },
];

export default function Groups() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Station Groups</h1>
          <p className="text-muted-foreground">Organize stations into logical groups</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Group
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {mockGroups.map((group) => (
          <div 
            key={group.id}
            className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all cursor-pointer animate-fade-in group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FolderKanban className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{group.name}</h3>
                  <p className="text-xs text-muted-foreground">{group.id}</p>
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-popover border-border">
                  <DropdownMenuItem>Edit Group</DropdownMenuItem>
                  <DropdownMenuItem>Add Stations</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete Group</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{group.description}</p>

            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-card-foreground">{group.stationCount} stations</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
