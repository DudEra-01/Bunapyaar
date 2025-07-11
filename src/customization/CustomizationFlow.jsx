import React from 'react';
import { CustomizationProvider, useCustomization } from './CustomizationContext';
import StepCategory from './steps/StepCategory';
import StepColor from './steps/StepColor';
// import other steps as you build them

const steps = [
  StepCategory,
  StepColor,
  // StepSize,
  // StepPattern,
  // StepExtras,
  // StepSummary,
];

function StepRenderer() {
  const { state } = useCustomization();
  const StepComponent = steps[state.step] || (() => <div>Done!</div>);
  return <StepComponent />;
}

const CustomizationFlow = () => {
  return (
    <CustomizationProvider>
      <div className="w-full max-w-2xl mx-auto">
        <StepRenderer />
      </div>
    </CustomizationProvider>
  );
};

export default CustomizationFlow; 