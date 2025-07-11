import React, { createContext, useContext, useState } from 'react';

const CustomizationContext = createContext();

export const useCustomization = () => useContext(CustomizationContext);

const defaultState = {
  step: 0,
  category: '',
  color: '',
  sizeType: 'standard', // 'standard' or 'custom'
  standardSize: '',
  measurements: {},
  pattern: '',
  extras: {
    pocket: false,
    button: '',
    border: '',
    embroidery: false,
    initials: '',
  },
};

export const CustomizationProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const setStep = (step) => setState((s) => ({ ...s, step }));
  const setCategory = (category) => setState((s) => ({ ...s, category }));
  const setColor = (color) => setState((s) => ({ ...s, color }));
  const setSizeType = (sizeType) => setState((s) => ({ ...s, sizeType }));
  const setStandardSize = (standardSize) => setState((s) => ({ ...s, standardSize }));
  const setMeasurements = (measurements) => setState((s) => ({ ...s, measurements }));
  const setPattern = (pattern) => setState((s) => ({ ...s, pattern }));
  const setExtras = (extras) => setState((s) => ({ ...s, extras: { ...s.extras, ...extras } }));
  const reset = () => setState(defaultState);

  return (
    <CustomizationContext.Provider
      value={{
        state,
        setStep,
        setCategory,
        setColor,
        setSizeType,
        setStandardSize,
        setMeasurements,
        setPattern,
        setExtras,
        reset,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
}; 