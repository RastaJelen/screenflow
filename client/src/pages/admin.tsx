import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface AdminConfig {
  questions: {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
  };
  images: {
    scanner: string;
    laptop: string;
    repair: string;
    electronics: string;
    alert: string;
  };
}

const defaultConfig: AdminConfig = {
  questions: {
    q1: "Does the device need to be changed?",
    q2: "Does the cosmetics need to be changed?",
    q3: "Does the functions need to be changed?",
    q4: "Does the unit have FMI?",
  },
  images: {
    scanner: "https://source.unsplash.com/featured/?scanner",
    laptop: "https://source.unsplash.com/featured/?laptop",
    repair: "https://source.unsplash.com/featured/?repair",
    electronics: "https://source.unsplash.com/featured/?electronics",
    alert: "https://source.unsplash.com/featured/?alert",
  },
};

export default function AdminPage() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [config, setConfig] = useState<AdminConfig>(defaultConfig);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === "admin" && credentials.password === "admin") {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel.",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  const handleSaveChanges = () => {
    toast({
      title: "Changes saved",
      description: "Configuration has been updated successfully.",
    });
  };

  const handleResetToDefaults = () => {
    setConfig(defaultConfig);
    toast({
      title: "Reset to defaults",
      description: "All settings have been reset to default values.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto">
        <Card className="bg-white shadow-md border border-slate-200">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300" 
                alt="Professional admin interface" 
                className="w-full h-48 object-cover rounded-lg mb-4" 
                data-testid="admin-image"
              />
              <h2 className="text-2xl font-bold text-slate-800">Admin Panel</h2>
              <p className="text-slate-600 mt-2">Enter credentials to access admin settings</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Username</Label>
                <Input 
                  type="text" 
                  placeholder="admin" 
                  value={credentials.username}
                  onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                  data-testid="input-username"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Password</Label>
                <Input 
                  type="password" 
                  placeholder="admin" 
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  data-testid="input-password"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-slate-800 text-white hover:bg-slate-900"
                data-testid="button-signin"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-md border border-slate-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Admin Configuration</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">Questions</h3>
              
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Q1: Device Change</Label>
                <Input 
                  type="text" 
                  value={config.questions.q1}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    questions: { ...prev.questions, q1: e.target.value }
                  }))}
                  data-testid="input-q1-text"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Q2: Cosmetics</Label>
                <Input 
                  type="text" 
                  value={config.questions.q2}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    questions: { ...prev.questions, q2: e.target.value }
                  }))}
                  data-testid="input-q2-text"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Q3: Functions</Label>
                <Input 
                  type="text" 
                  value={config.questions.q3}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    questions: { ...prev.questions, q3: e.target.value }
                  }))}
                  data-testid="input-q3-text"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Q4: FMI Check</Label>
                <Input 
                  type="text" 
                  value={config.questions.q4}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    questions: { ...prev.questions, q4: e.target.value }
                  }))}
                  data-testid="input-q4-text"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-700">Images</h3>
              
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Scanner Image URL</Label>
                <Input 
                  type="url" 
                  value={config.images.scanner}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    images: { ...prev.images, scanner: e.target.value }
                  }))}
                  data-testid="input-scanner-url"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Laptop Image URL</Label>
                <Input 
                  type="url" 
                  value={config.images.laptop}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    images: { ...prev.images, laptop: e.target.value }
                  }))}
                  data-testid="input-laptop-url"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Repair Image URL</Label>
                <Input 
                  type="url" 
                  value={config.images.repair}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    images: { ...prev.images, repair: e.target.value }
                  }))}
                  data-testid="input-repair-url"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Electronics Image URL</Label>
                <Input 
                  type="url" 
                  value={config.images.electronics}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    images: { ...prev.images, electronics: e.target.value }
                  }))}
                  data-testid="input-electronics-url"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-slate-700 mb-1">Alert Image URL</Label>
                <Input 
                  type="url" 
                  value={config.images.alert}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    images: { ...prev.images, alert: e.target.value }
                  }))}
                  data-testid="input-alert-url"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-4">
            <Button 
              variant="outline"
              onClick={handleResetToDefaults}
              data-testid="button-reset-defaults"
            >
              Reset to Defaults
            </Button>
            <Button 
              onClick={handleSaveChanges}
              data-testid="button-save-changes"
            >
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
