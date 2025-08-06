import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useRescreening, DeviceInfo } from "@/contexts/RescreeningContext";

export default function Q1Page() {
  const [, setLocation] = useLocation();
  const { updateQ1 } = useRescreening();
  const [showDeviceForm, setShowDeviceForm] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    brand: "",
    model: "",
    imei: "",
    serialNumber: "",
    specification: "",
  });

  const handleYes = () => {
    setShowDeviceForm(true);
    updateQ1(true);
  };

  const handleNo = () => {
    updateQ1(false);
    setLocation("/q2");
  };

  const handleSubmitForm = () => {
    updateQ1(true, deviceInfo);
    setLocation("/q2");
  };

  const isFormValid =
    deviceInfo.brand &&
    deviceInfo.model &&
    deviceInfo.imei &&
    deviceInfo.serialNumber;

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
            alt="Modern laptop computer on desk"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
            data-testid="laptop-image"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Question 1
            </h2>
            <p className="text-xl text-slate-700 mb-6">
              Does the device need to be changed?
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1 bg-amber-600 text-white hover:bg-amber-700"
              onClick={handleYes}
              data-testid="button-yes-device"
            >
              Yes
            </Button>
            <Button
              className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
              onClick={handleNo}
              data-testid="button-no-device"
            >
              No
            </Button>
          </div>

          {showDeviceForm && (
            <Card className="bg-white shadow-md border border-slate-200">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Device Information
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium text-slate-700 mb-1">
                      Brand
                    </Label>
                    <Input
                      type="text"
                      placeholder="e.g., Dell, HP, Lenovo"
                      value={deviceInfo.brand}
                      onChange={(e) =>
                        setDeviceInfo((prev) => ({
                          ...prev,
                          brand: e.target.value,
                        }))
                      }
                      data-testid="input-brand"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-slate-700 mb-1">
                      Model
                    </Label>
                    <Input
                      type="text"
                      placeholder="e.g., Latitude 5520"
                      value={deviceInfo.model}
                      onChange={(e) =>
                        setDeviceInfo((prev) => ({
                          ...prev,
                          model: e.target.value,
                        }))
                      }
                      data-testid="input-model"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-slate-700 mb-1">
                      IMEI
                    </Label>
                    <Input
                      type="text"
                      placeholder="15-digit IMEI number"
                      value={deviceInfo.imei}
                      onChange={(e) =>
                        setDeviceInfo((prev) => ({
                          ...prev,
                          imei: e.target.value,
                        }))
                      }
                      data-testid="input-imei"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-slate-700 mb-1">
                      Serial Number
                    </Label>
                    <Input
                      type="text"
                      placeholder="Device serial number"
                      value={deviceInfo.serialNumber}
                      onChange={(e) =>
                        setDeviceInfo((prev) => ({
                          ...prev,
                          serialNumber: e.target.value,
                        }))
                      }
                      data-testid="input-serial"
                    />
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium text-slate-700 mb-1">
                    Specification
                  </Label>
                  <Textarea
                    placeholder="Enter device specifications..."
                    rows={3}
                    value={deviceInfo.specification}
                    onChange={(e) =>
                      setDeviceInfo((prev) => ({
                        ...prev,
                        specification: e.target.value,
                      }))
                    }
                    data-testid="textarea-specs"
                  />
                </div>

                <Button
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={handleSubmitForm}
                  disabled={!isFormValid}
                  data-testid="button-continue-q1"
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
