import { User, Shield, Bell, Palette, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      {/* Profile Section */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-card-foreground">Profile</h2>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="font-medium text-card-foreground">John Provider</p>
            <p className="text-sm text-muted-foreground">john@chargepro.com</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Display Name</Label>
            <Input id="name" defaultValue="John Provider" className="bg-secondary border-none" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@chargepro.com" className="bg-secondary border-none" />
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-card-foreground">Security</h2>
        </div>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" defaultValue="••••••••" className="bg-secondary border-none" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-card-foreground">Two-factor authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Switch />
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-card-foreground">Notifications</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-card-foreground">Email notifications</p>
              <p className="text-sm text-muted-foreground">Receive station alerts via email</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-card-foreground">Push notifications</p>
              <p className="text-sm text-muted-foreground">Receive real-time alerts</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-card-foreground">Weekly reports</p>
              <p className="text-sm text-muted-foreground">Get weekly performance summaries</p>
            </div>
            <Switch />
          </div>
        </div>
      </div>

      {/* Theme Section */}
      <div className="bg-card border border-border rounded-xl p-6 animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <Palette className="w-5 h-5 text-primary" />
          <h2 className="font-semibold text-card-foreground">Appearance</h2>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-card-foreground">Dark mode</p>
            <p className="text-sm text-muted-foreground">Use dark theme</p>
          </div>
          <Switch defaultChecked />
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-card border border-destructive/30 rounded-xl p-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-destructive">Delete Account</p>
            <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
          </div>
          <Button variant="destructive" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
