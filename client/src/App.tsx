import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RescreeningProvider } from "@/contexts/RescreeningContext";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import HomePage from "@/pages/home";
import Q1Page from "@/pages/q1";
import Q2Page from "@/pages/q2";
import Q3Page from "@/pages/q3";
import Q4Page from "@/pages/q4";
import AdminPage from "@/pages/admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/q1" component={Q1Page} />
      <Route path="/q2" component={Q2Page} />
      <Route path="/q3" component={Q3Page} />
      <Route path="/q4" component={Q4Page} />
      <Route path="/admin" component={AdminPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RescreeningProvider>
          <div className="min-h-screen bg-slate-50">
            <ProgressIndicator />
            <main className="max-w-4xl mx-auto px-4 py-8">
              <Router />
            </main>
          </div>
          <Toaster />
        </RescreeningProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
