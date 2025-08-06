import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRescreening } from "@/contexts/RescreeningContext";

export default function Q3Page() {
  const [, setLocation] = useLocation();
  const { updateQ3 } = useRescreening();
  const [showFunctionQuestions, setShowFunctionQuestions] = useState(false);

  const handleYes = () => {
    setShowFunctionQuestions(true);
    updateQ3(true);
  };

  const handleNo = () => {
    updateQ3(false);
    setLocation("/q4");
  };

  const handleContinue = () => {
    setLocation("/q4");
  };

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Electronic circuit board and testing equipment"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
            data-testid="electronics-image"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Question 3
            </h2>
            <p className="text-xl text-slate-700 mb-6">
              Does the functions need to be changed?
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1 bg-amber-600 text-white hover:bg-amber-700"
              onClick={handleYes}
              data-testid="button-yes-functions"
            >
              Yes
            </Button>
            <Button
              className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
              onClick={handleNo}
              data-testid="button-no-functions"
            >
              No
            </Button>
          </div>

          {showFunctionQuestions && (
            <Card className="bg-white shadow-md border border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  FUNCTION QUESTIONS
                </h3>
                <p className="text-slate-600 mb-6">
                  Detailed functionality testing questions will be implemented
                  here
                </p>
                <div className="bg-slate-100 p-4 rounded-lg mb-6">
                  <p className="text-sm text-slate-500">
                    Future implementation: Function-specific testing criteria
                    and evaluation questions
                  </p>
                </div>
                <Button
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={handleContinue}
                  data-testid="button-continue-functions"
                >
                  Continue to Next Question
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
