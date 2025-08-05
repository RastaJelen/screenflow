import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRescreening } from "@/contexts/RescreeningContext";

export default function Q2Page() {
  const [, setLocation] = useLocation();
  const { updateQ2 } = useRescreening();
  const [showCosmeticsQuestions, setShowCosmeticsQuestions] = useState(false);

  const handleYes = () => {
    setShowCosmeticsQuestions(true);
    updateQ2(true);
  };

  const handleNo = () => {
    updateQ2(false);
    setLocation("/q3");
  };

  const handleContinue = () => {
    setLocation("/q3");
  };

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
            alt="Laptop repair and maintenance tools" 
            className="w-full h-80 object-cover rounded-xl shadow-lg" 
            data-testid="repair-image"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Question 2</h2>
            <p className="text-xl text-slate-700 mb-6">Does the cosmetics need to be changed?</p>
          </div>
          
          <div className="flex gap-4">
            <Button 
              className="flex-1 bg-primary-600 text-white hover:bg-primary-700"
              onClick={handleYes}
              data-testid="button-yes-cosmetics"
            >
              Yes
            </Button>
            <Button 
              variant="secondary"
              className="flex-1 bg-slate-200 text-slate-700 hover:bg-slate-300"
              onClick={handleNo}
              data-testid="button-no-cosmetics"
            >
              No
            </Button>
          </div>
          
          {showCosmeticsQuestions && (
            <Card className="bg-white shadow-md border border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">COSMETICS QUESTIONS</h3>
                <p className="text-slate-600 mb-6">Detailed cosmetics assessment questions will be implemented here</p>
                <div className="bg-slate-100 p-4 rounded-lg mb-6">
                  <p className="text-sm text-slate-500">
                    Future implementation: Specific cosmetics evaluation criteria and questions
                  </p>
                </div>
                <Button 
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={handleContinue}
                  data-testid="button-continue-cosmetics"
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
