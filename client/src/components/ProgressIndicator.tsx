import { useLocation } from "wouter";

const steps = [
  { path: "/", label: "Scanner", step: 1 },
  { path: "/q1", label: "Device", step: 2 },
  { path: "/q2", label: "Cosmetics", step: 3 },
  { path: "/q3", label: "Functions", step: 4 },
  { path: "/q4", label: "FMI Check", step: 5 },
];

export function ProgressIndicator() {
  const [location] = useLocation();
  
  const currentStep = steps.find(step => step.path === location)?.step || 1;
  const progressWidth = (currentStep / 5) * 100;
  
  if (location === '/admin') {
    return (
      <div className="bg-white border-b border-slate-200 px-4 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-800">Laptop Rescreening System</h1>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md font-medium">Admin Panel</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-b border-slate-200 px-4 py-3">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800">Laptop Rescreening System</h1>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md font-medium">
              Step {currentStep} of 5
            </span>
          </div>
        </div>
        <div className="mt-3">
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progressWidth}%` }}
              data-testid="progress-bar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
