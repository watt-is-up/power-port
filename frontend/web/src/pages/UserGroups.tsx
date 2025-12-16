import { Users, Plus, MoreVertical, Link, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockUserGroups = [
  { id: "UGR-001", name: "Corporate Fleet", userCount: 45, description: "Company vehicle drivers" },
  { id: "UGR-002", name: "VIP Members", userCount: 12, description: "Premium subscription users" },
  { id: "UGR-003", name: "Partner Network", userCount: 28, description: "Partner company employees" },
  { id: "UGR-004", name: "Beta Testers", userCount: 8, description: "Early access program users" },
];

export default function UserGroups() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">User Groups</h1>
          <p className="text-muted-foreground">Manage user access and permissions</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Group
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {mockUserGroups.map((group) => (
          <div 
            key={group.id}
            className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all cursor-pointer animate-fade-in group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-info/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-info" />
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
                  <DropdownMenuItem>
                    <Link className="w-4 h-4 mr-2" />
                    Copy Invite Link
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Invites
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete Group</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{group.description}</p>

            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <Users className="w-4 h-4 text-info" />
              <span className="text-sm text-card-foreground">{group.userCount} members</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
