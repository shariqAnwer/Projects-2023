import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  if (!stepsConfig.length) return <></>;

  const handleNext = () => {
    return;
  };

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, i) => {
          return (
            <div key={step.name} className={`step ${
                currentStep === i + 1 || isComplete ? "complete" : ""
            } ${i + 1 <= currentStep && !isComplete ? "active" : ""}`}>
              {/* If the step isn't complete and it's not the active one, don't show a checkmark */}
              <div className="step-number">{i + 1}</div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
      </div>
      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "FINISH" : "NEXT"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
