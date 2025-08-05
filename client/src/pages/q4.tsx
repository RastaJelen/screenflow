import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRescreening } from "@/contexts/RescreeningContext";
import { useToast } from "@/hooks/use-toast";

export default function Q4Page() {
  const { updateQ4 } = useRescreening();
  const { toast } = useToast();
  const [showResult, setShowResult] = useState<'quarantine' | 'complete' | null>(null);

  const handleYes = () => {
    updateQ4(true);
    setShowResult('quarantine');
    showSavedNotification();
  };

  const handleNo = () => {
    updateQ4(false);
    setShowResult('complete');
    showSavedNotification();
  };

  const showSavedNotification = () => {
    toast({
      title: "Data saved successfully",
      description: "Rescreening data has been saved to the system.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
            alt="Security warning alert symbol" 
            className="w-full h-80 object-cover rounded-xl shadow-lg" 
            data-testid="alert-image"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Question 4</h2>
            <p className="text-xl text-slate-700 mb-6">Does the unit have FMI?</p>
          </div>
          
          <div className="flex gap-4">
            <Button 
              className="flex-1 bg-amber-600 text-white hover:bg-amber-700"
              onClick={handleYes}
              data-testid="button-yes-fmi"
            >
              Yes
            </Button>
            <Button 
              className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
              onClick={handleNo}
              data-testid="button-no-fmi"
            >
              No
            </Button>
          </div>
          
          {showResult === 'quarantine' && (
            <Card className="bg-amber-50 border border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">⚠️</div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-800">QUARANTINE Required</h3>
                    <p className="text-amber-700 mt-1">Contact Customer immediately</p>
                  </div>
                </div>
                <div className="mt-4 bg-amber-100 p-4 rounded-lg">
                  <p className="text-sm text-amber-800">
                    This device requires special handling due to FMI detection. Please follow quarantine protocols.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
          
          {showResult === 'complete' && (
            <Card className="bg-emerald-50 border border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">✅</div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-800">Screening Complete</h3>
                    <p className="text-emerald-700 mt-1">Device has passed all checks</p>
                  </div>
                </div>
                <div className="mt-4 bg-emerald-100 p-4 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    All rescreening criteria have been met. The device is ready for processing.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
