import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useRescreening } from "@/contexts/RescreeningContext";

export default function HomePage() {
  const [, setLocation] = useLocation();
  const { updateCrNo } = useRescreening();
  const [crNo, setCrNo] = useState("");

  useEffect(() => {
    if (crNo.trim().length > 0) {
      const timer = setTimeout(() => {
        updateCrNo(crNo);
        setLocation("/q1");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [crNo, updateCrNo, setLocation]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="max-w-lg mx-auto">
          <img
            src="https://t4.ftcdn.net/jpg/02/58/21/07/360_F_258210702_8U2nwdDAFe07P3jlv01UqNr6BpioKIWJ.jpg"
            alt="Barcode scanner on table"
            className="w-full h-64 object-cover rounded-xl shadow-lg mb-6"
            data-testid="scanner-image"
          />

          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Scan CrNo to Start Rescreening
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Enter or scan the CrNo to begin the laptop rescreening process
          </p>

          <Card className="bg-white shadow-md border border-slate-200">
            <CardContent className="p-6">
              <Label
                htmlFor="crno-input"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                CrNo
              </Label>
              <Input
                type="text"
                id="crno-input"
                placeholder="Enter CrNo or use scanner..."
                className="w-full px-4 py-3 text-lg"
                value={crNo}
                onChange={(e) => setCrNo(e.target.value)}
                data-testid="input-crno"
              />
              <p className="text-sm text-slate-500 mt-2">
                Auto-navigation will occur when CrNo is entered
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
