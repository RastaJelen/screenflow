import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface DeviceInfo {
  brand: string;
  model: string;
  imei: string;
  serialNumber: string;
  specification: string;
}

export interface RescreeningData {
  crNo: string;
  q1DeviceChange: boolean | null;
  deviceInfo: DeviceInfo | null;
  q2CosmeticsChange: boolean | null;
  q3FunctionsChange: boolean | null;
  q4HasFMI: boolean | null;
  isComplete: boolean;
}

interface RescreeningContextType {
  data: RescreeningData;
  updateCrNo: (crNo: string) => void;
  updateQ1: (needsChange: boolean, deviceInfo?: DeviceInfo) => void;
  updateQ2: (needsChange: boolean) => void;
  updateQ3: (needsChange: boolean) => void;
  updateQ4: (hasFMI: boolean) => void;
  resetData: () => void;
}

const initialData: RescreeningData = {
  crNo: '',
  q1DeviceChange: null,
  deviceInfo: null,
  q2CosmeticsChange: null,
  q3FunctionsChange: null,
  q4HasFMI: null,
  isComplete: false,
};

const RescreeningContext = createContext<RescreeningContextType | undefined>(undefined);

export function RescreeningProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<RescreeningData>(initialData);

  const updateCrNo = (crNo: string) => {
    setData(prev => ({ ...prev, crNo }));
  };

  const updateQ1 = (needsChange: boolean, deviceInfo?: DeviceInfo) => {
    setData(prev => ({
      ...prev,
      q1DeviceChange: needsChange,
      deviceInfo: needsChange ? deviceInfo || null : null,
    }));
  };

  const updateQ2 = (needsChange: boolean) => {
    setData(prev => ({ ...prev, q2CosmeticsChange: needsChange }));
  };

  const updateQ3 = (needsChange: boolean) => {
    setData(prev => ({ ...prev, q3FunctionsChange: needsChange }));
  };

  const updateQ4 = (hasFMI: boolean) => {
    setData(prev => ({ ...prev, q4HasFMI: hasFMI, isComplete: true }));
  };

  const resetData = () => {
    setData(initialData);
  };

  return (
    <RescreeningContext.Provider
      value={{
        data,
        updateCrNo,
        updateQ1,
        updateQ2,
        updateQ3,
        updateQ4,
        resetData,
      }}
    >
      {children}
    </RescreeningContext.Provider>
  );
}

export function useRescreening() {
  const context = useContext(RescreeningContext);
  if (context === undefined) {
    throw new Error('useRescreening must be used within a RescreeningProvider');
  }
  return context;
}
